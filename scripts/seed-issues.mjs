/** Manually invoked by the GitHub Actions workflow. Idempotent across reruns. */
import { readFile } from "node:fs/promises";

const repo = process.env.GITHUB_REPOSITORY;
const token = process.env.GITHUB_TOKEN;
if (!repo || !/^[^/]+\/[^/]+$/.test(repo) || !token) {
  console.error("Set GITHUB_REPOSITORY=owner/repo and GITHUB_TOKEN to run the issue seeder.");
  process.exit(1);
}
const payload = JSON.parse(await readFile(new URL("./issue-backlog.json", import.meta.url), "utf8"));
const base = `https://api.github.com/repos/${repo}`;

async function api(path, options = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...options.headers
    }
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`${options.method ?? "GET"} ${path}: HTTP ${response.status} ${JSON.stringify(data).slice(0, 700)}`);
  return data;
}

const existingLabels = new Set();
for (let page = 1; ; page++) {
  const pageItems = await api(`/repos/${repo}/labels?per_page=100&page=${page}`);
  for (const item of pageItems) existingLabels.add(item.name);
  if (pageItems.length < 100) break;
}
let labelsCreated = 0;
for (const label of payload.labels) {
  if (existingLabels.has(label.name)) continue;
  await api(`/repos/${repo}/labels`, { method: "POST", body: JSON.stringify(label) });
  labelsCreated++;
}

const existingMarkers = new Set();
for (let page = 1; ; page++) {
  const pageItems = await api(`/repos/${repo}/issues?state=all&per_page=100&page=${page}`);
  for (const issue of pageItems) {
    for (const match of String(issue.body ?? "").matchAll(/<!-- compass-seed:([a-z0-9-]+) -->/g)) existingMarkers.add(match[1]);
  }
  if (pageItems.length < 100) break;
}
let issuesCreated = 0;
for (const issue of payload.issues) {
  if (existingMarkers.has(issue.id)) continue;
  const created = await api(`/repos/${repo}/issues`, {
    method: "POST",
    body: JSON.stringify({ title: issue.title, body: `${issue.body}\n\n<!-- compass-seed:${issue.id} -->`, labels: issue.labels })
  });
  issuesCreated++;
  console.log(`Created #${created.number}: ${created.title}`);
}
console.log(`Complete: ${labelsCreated} labels created, ${issuesCreated} issues created. Existing entries skipped.`);
