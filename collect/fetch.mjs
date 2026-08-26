#!/usr/bin/env node
/**
 * Local collector. Public APIs + RSS only. No unofficial X scrape.
 *
 *   node collect/fetch.mjs
 *
 * Writes:
 *   world/inbox.json          — desk reads this
 *   sources/YYYY-MM-DD.json   — dated snapshot
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DAY = new Date().toISOString().slice(0, 10);
const INBOX = join(ROOT, "world", "inbox.json");
const SNAP = join(ROOT, "sources", `${DAY}.json`);
const UA =
  "agentic-corpus/0.3 (https://github.com/sai-prakash/agentic-corpus; mailto:saiprak@gmail.com)";

const QUERIES = [
  "agent harness",
  "graph engineering",
  "agentic memory",
  "GraphRAG",
  "multi-agent orchestration",
  "context engineering",
  "MCP agent",
];

const TOPIC =
  /agent|harness|graph.?rag|graphrag|multi-?agent|orchestrat|memory graph|context graph|context engineering|tool.?use|mcp\b|webllm|eval|loop engineering|skill(?:s)?\b|computer.?use|swe-?agent/i;

async function get(url, extra = {}) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": UA,
      Accept: extra.accept || "application/json, application/atom+xml, application/rss+xml, */*",
      ...extra.headers,
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res;
}

function xmlTag(xml, tag) {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  if (!m) return "";
  return m[1]
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function relevant(title, summary = "") {
  return TOPIC.test(`${title} ${summary}`);
}

function isoDate(raw) {
  if (!raw) return "";
  const s = String(raw).trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
  const t = Date.parse(s);
  if (!Number.isNaN(t)) return new Date(t).toISOString().slice(0, 10);
  return s.slice(0, 10);
}

async function arxiv() {
  const q = encodeURIComponent(
    'all:"agent harness" OR all:"graph engineering" OR all:"agentic memory" OR all:GraphRAG OR all:"harness engineering" OR all:"context engineering" OR all:"multi-agent"'
  );
  const url = `https://export.arxiv.org/api/query?search_query=${q}&start=0&max_results=18&sortBy=submittedDate&sortOrder=descending`;
  const xml = await (await get(url)).text();
  return xml.split("<entry>").slice(1).map((e) => {
    const id = xmlTag(e, "id");
    return {
      source: "arxiv",
      kind: "paper",
      id: id.replace("http://arxiv.org/abs/", "arxiv:").replace("https://arxiv.org/abs/", "arxiv:"),
      title: xmlTag(e, "title"),
      url: id.replace("http://", "https://"),
      date: xmlTag(e, "published").slice(0, 10),
      summary: xmlTag(e, "summary").slice(0, 320),
      heat: 4,
    };
  }).filter((x) => x.title);
}

async function hn() {
  const queries = ["agentic", "GraphRAG", "agent harness", "MCP", "context engineering"];
  const rows = [];
  for (const q of queries) {
    const url = "https://hn.algolia.com/api/v1/search?query=" + encodeURIComponent(q) + "&tags=story&hitsPerPage=8";
    const data = await (await get(url)).json();
    for (const h of data.hits || []) {
      if ((h.points || 0) < 8) continue;
      rows.push({
        source: "hn",
        kind: "discussion",
        id: `hn:${h.objectID}`,
        title: h.title,
        url: h.url || `https://news.ycombinator.com/item?id=${h.objectID}`,
        date: isoDate(h.created_at),
        summary: `${h.points || 0} points · ${h.num_comments || 0} comments`,
        heat: Math.min(5, Math.floor((h.points || 0) / 80) + 2),
      });
    }
  }
  return rows;
}

async function hf() {
  const data = await (await get("https://huggingface.co/api/daily_papers")).json();
  const rows = Array.isArray(data) ? data : data.papers || [];
  return rows.slice(0, 20).map((p) => {
    const paper = p.paper || p;
    const title = paper.title || p.title || "";
    const aid = paper.id || paper.arxiv_id || "";
    return {
      source: "hf-daily",
      kind: "paper",
      id: `hf:${aid || title.slice(0, 24)}`,
      title,
      url: aid ? `https://arxiv.org/abs/${aid}` : "https://huggingface.co/papers",
      date: String(p.publishedAt || paper.publishedAt || "").slice(0, 10),
      summary: String(paper.summary || "").replace(/\s+/g, " ").slice(0, 280),
      heat: 3,
    };
  }).filter((x) => relevant(x.title, x.summary));
}

async function openalex() {
  const q = encodeURIComponent('"agent harness" OR GraphRAG OR "graph engineering" OR "agentic memory"');
  const url = `https://api.openalex.org/works?search=${q}&sort=publication_date:desc&per_page=12&select=id,display_name,publication_date,doi,primary_location,cited_by_count`;
  const data = await (await get(url)).json();
  return (data.results || []).map((w) => {
    const loc = w.primary_location || {};
    const landing = loc.landing_page_url || w.doi || w.id;
    return {
      source: "openalex",
      kind: "paper",
      id: `oa:${String(w.id || "").split("/").pop()}`,
      title: w.display_name,
      url: landing,
      date: (w.publication_date || "").slice(0, 10),
      summary: `cited ${w.cited_by_count || 0}` + (w.doi ? ` · ${w.doi}` : ""),
      heat: (w.cited_by_count || 0) > 20 ? 4 : 3,
    };
  }).filter((x) => x.title && relevant(x.title, x.summary));
}

async function lobsters() {
  const feeds = ["https://lobste.rs/t/ai.json", "https://lobste.rs/t/compsci.json"];
  const rows = [];
  for (const url of feeds) {
    const data = await (await get(url)).json();
    rows.push(...(Array.isArray(data) ? data : []));
  }
  return rows.filter((s) => relevant(s.title || "", s.description_plain || s.description || "")).slice(0, 12).map((s) => ({
    source: "lobsters",
    kind: "discussion",
    id: `lb:${s.short_id}`,
    title: s.title,
    url: s.url || `https://lobste.rs/s/${s.short_id}`,
    date: String(s.created_at || "").slice(0, 10),
    summary: `${s.score || 0} pts · ${s.comment_count || 0} comments`,
    heat: Math.min(4, Math.floor((s.score || 0) / 8) + 2),
  }));
}

async function devto() {
  const url = "https://dev.to/api/articles?tag=ai&per_page=20&top=7";
  const data = await (await get(url)).json();
  return (Array.isArray(data) ? data : []).filter((a) => relevant(a.title || "", a.description || "")).slice(0, 10).map((a) => ({
    source: "devto",
    kind: "essay",
    id: `dev:${a.id}`,
    title: a.title,
    url: a.url,
    date: String(a.published_at || a.readable_publish_date || "").slice(0, 10),
    summary: String(a.description || "").slice(0, 240),
    heat: (a.positive_reactions_count || 0) > 80 ? 3 : 2,
  }));
}

function parseRss(xml, source) {
  const items = xml.split(/<item[\s>]/i).slice(1);
  const entries = xml.split(/<entry[\s>]/i).slice(1);
  const chunks = items.length ? items : entries;
  return chunks.slice(0, 10).map((chunk) => {
    const title = xmlTag(chunk, "title");
    const link = xmlTag(chunk, "link") || (chunk.match(/<link[^>]+href="([^"]+)"/i) || [])[1] || "";
    const date = isoDate(xmlTag(chunk, "pubDate") || xmlTag(chunk, "published") || xmlTag(chunk, "updated"));
    const summary = xmlTag(chunk, "description") || xmlTag(chunk, "summary") || xmlTag(chunk, "content");
    return { source, kind: "essay", id: `${source}:${(link || title).slice(0, 48)}`, title, url: link, date, summary: summary.slice(0, 240), heat: 3 };
  });
}

async function rss() {
  const feeds = [
    ["simonw", "https://simonwillison.net/atom/everything/"],
    ["latent-space", "https://www.latent.space/feed"],
    ["import-ai", "https://importai.substack.com/feed"],
  ];
  const out = [];
  for (const [name, url] of feeds) {
    try {
      const xml = await (await get(url)).text();
      out.push(...parseRss(xml, name).filter((x) => x.title && relevant(x.title, x.summary)));
    } catch (err) {
      out.push({ __error: true, source: name, error: String(err) });
    }
  }
  return out;
}

async function github() {
  const token = process.env.GITHUB_TOKEN;
  const queries = [
    "agent harness stars:>20 pushed:>2026-06-01",
    "graphrag stars:>50 pushed:>2026-01-01",
    "topic:ai-agents stars:>100 pushed:>2026-06-01",
  ];
  const headers = { "User-Agent": UA, Accept: "application/vnd.github+json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  const rows = [];
  for (const q of queries) {
    const res = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=updated&per_page=6`, { headers });
    if (!res.ok) {
      if (res.status === 403 || res.status === 429) break;
      continue;
    }
    const data = await res.json();
    for (const r of data.items || []) {
      rows.push({
        source: "github",
        kind: "repo",
        id: `gh:${r.full_name}`,
        title: `${r.full_name} — ${r.description || "repo"}`,
        url: r.html_url,
        date: (r.pushed_at || "").slice(0, 10),
        summary: `★${r.stargazers_count} · ${r.language || "?"}`,
        heat: r.stargazers_count > 500 ? 4 : 3,
      });
    }
  }
  return rows;
}

function dedupe(items) {
  const seen = new Set();
  const out = [];
  for (const it of items) {
    const key = String(it.url || it.title).toLowerCase().replace(/\/$/, "").replace(/v\d+$/, "");
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(it);
  }
  return out;
}

const NAMES = ["arxiv", "hn", "hf", "openalex", "lobsters", "devto", "rss", "github"];
const jobs = [arxiv, hn, hf, openalex, lobsters, devto, rss, github];
const batches = await Promise.allSettled(jobs.map((fn) => fn()));

const items = [];
const errors = [];
const health = {};

for (const [i, name] of NAMES.entries()) {
  const b = batches[i];
  if (b.status !== "fulfilled") {
    errors.push({ source: name, error: String(b.reason) });
    health[name] = { ok: false, count: 0, error: String(b.reason).slice(0, 160) };
    continue;
  }
  const val = b.value || [];
  const nestedErr = val.filter((x) => x && x.__error);
  const clean = val.filter((x) => x && !x.__error);
  for (const e of nestedErr) errors.push({ source: e.source, error: e.error });
  items.push(...clean);
  health[name] = { ok: true, count: clean.length };
}

const inbox = {
  collected_at: new Date().toISOString(),
  queries: QUERIES,
  health,
  errors,
  items: dedupe(items).sort((a, b) => String(b.date).localeCompare(String(a.date)) || (b.heat || 0) - (a.heat || 0)),
};

mkdirSync(dirname(INBOX), { recursive: true });
mkdirSync(dirname(SNAP), { recursive: true });
writeFileSync(INBOX, JSON.stringify(inbox, null, 2));
writeFileSync(SNAP, JSON.stringify(inbox, null, 2));
console.log(`wrote ${inbox.items.length} items → world/inbox.json + sources/${DAY}.json`);
for (const [k, v] of Object.entries(health)) {
  console.log(`  ${k.padEnd(12)} ${v.ok ? v.count : "FAIL " + (v.error || "")}`);
}
for (const e of errors) console.warn("warn", e.source, e.error);
