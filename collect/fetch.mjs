#!/usr/bin/env node
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "world", "inbox.json");
const UA = "agentic-corpus/0.2 (+https://github.com/sai-prakash/agentic-corpus)";
const QUERIES = ["agent harness", "graph engineering LLM", "agentic memory", "GraphRAG", "multi-agent orchestration"];

async function get(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/json, application/atom+xml, */*" } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res;
}
function text(xml, tag) {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  if (!m) return "";
  return m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}
async function arxiv() {
  const q = encodeURIComponent('all:"agent harness" OR all:"graph engineering" OR all:"agentic memory" OR all:GraphRAG OR all:"harness engineering"');
  const xml = await (await get(`https://export.arxiv.org/api/query?search_query=${q}&start=0&max_results=15&sortBy=submittedDate&sortOrder=descending`)).text();
  return xml.split("<entry>").slice(1).map((e) => {
    const id = text(e, "id");
    return { source: "arxiv", id: id.replace("http://arxiv.org/abs/", "arxiv:"), title: text(e, "title"), url: id.replace("http://", "https://"), date: text(e, "published").slice(0, 10), summary: text(e, "summary").slice(0, 320), heat: 4 };
  }).filter((x) => x.title);
}
async function hn() {
  const data = await (await get("https://hn.algolia.com/api/v1/search?query=" + encodeURIComponent("agentic OR GraphRAG OR \"agent harness\" OR \"AI agent\"") + "&tags=story&hitsPerPage=15")).json();
  return (data.hits || []).filter((h) => (h.points || 0) >= 8).map((h) => ({
    source: "hn", id: `hn:${h.objectID}`, title: h.title,
    url: h.url || `https://news.ycombinator.com/item?id=${h.objectID}`,
    date: (h.created_at || "").slice(0, 10),
    summary: `${h.points || 0} points`,
    heat: Math.min(5, Math.floor((h.points || 0) / 80) + 2),
  }));
}
async function hf() {
  try {
    const data = await (await get("https://huggingface.co/api/daily_papers")).json();
    const rows = Array.isArray(data) ? data : data.papers || [];
    return rows.slice(0, 12).map((p) => {
      const paper = p.paper || p;
      const title = paper.title || p.title || "";
      const aid = paper.id || paper.arxiv_id || "";
      return { source: "hf-daily", id: `hf:${aid || title.slice(0, 24)}`, title, url: aid ? `https://arxiv.org/abs/${aid}` : "https://huggingface.co/papers", date: (p.publishedAt || paper.publishedAt || "").slice(0, 10), summary: (paper.summary || "").replace(/\s+/g, " ").slice(0, 280), heat: 3 };
    }).filter((x) => /agent|harness|graph|rag|memory|multi-agent/i.test(x.title + x.summary));
  } catch { return []; }
}
async function github() {
  const token = process.env.GITHUB_TOKEN;
  const headers = { "User-Agent": UA, Accept: "application/vnd.github+json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  try {
    const q = encodeURIComponent("agent harness stars:>20 pushed:>2026-06-01");
    const res = await fetch(`https://api.github.com/search/repositories?q=${q}&sort=updated&per_page=8`, { headers });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items || []).map((r) => ({ source: "github", id: `gh:${r.full_name}`, title: `${r.full_name} — ${r.description || "repo"}`, url: r.html_url, date: (r.pushed_at || "").slice(0, 10), summary: `★${r.stargazers_count}`, heat: r.stargazers_count > 200 ? 4 : 3 }));
  } catch { return []; }
}
function dedupe(items) {
  const seen = new Set(); const out = [];
  for (const it of items) { const key = (it.url || it.title).toLowerCase(); if (seen.has(key)) continue; seen.add(key); out.push(it); }
  return out;
}
const batches = await Promise.allSettled([arxiv(), hn(), hf(), github()]);
const items = []; const errors = [];
for (const [i, name] of ["arxiv", "hn", "hf", "github"].entries()) {
  const b = batches[i];
  if (b.status === "fulfilled") items.push(...b.value);
  else errors.push({ source: name, error: String(b.reason) });
}
const inbox = { collected_at: new Date().toISOString(), queries: QUERIES, errors, items: dedupe(items) };
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify(inbox, null, 2));
console.log(`wrote ${inbox.items.length} items → world/inbox.json`);
