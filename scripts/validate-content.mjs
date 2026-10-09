import { resources } from "../src/data/resources.js";
import { glossary } from "../src/data/glossary.js";

const categories = new Set(["Foundations", "Models", "Tools", "Learning", "Responsible AI"]);
const levels = new Set(["Start here", "Exploring", "Going deeper"]);
const seenIds = new Set();
const problems = [];
for (const [index, item] of resources.entries()) {
  const prefix = `resources[${index}]`;
  for (const field of ["id", "title", "category", "level", "url", "description", "firstStep"]) {
    if (typeof item[field] !== "string" || !item[field].trim()) problems.push(`${prefix}.${field} must be nonempty text`);
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id)) problems.push(`${prefix}.id must be a kebab-case slug`);
  if (seenIds.has(item.id)) problems.push(`Duplicate resource id: ${item.id}`);
  seenIds.add(item.id);
  if (!categories.has(item.category)) problems.push(`${prefix}.category must be one of ${[...categories].join(", ")}`);
  if (!levels.has(item.level)) problems.push(`${prefix}.level is not supported`);
  try { if (new URL(item.url).protocol !== "https:") problems.push(`${prefix}.url must be HTTPS`); } catch { problems.push(`${prefix}.url is invalid`); }
  if (!Array.isArray(item.tags) || item.tags.length < 1 || item.tags.some((tag) => typeof tag !== "string" || !tag.trim())) problems.push(`${prefix}.tags must contain nonempty strings`);
}
const seenTerms = new Set();
for (const [index, item] of glossary.entries()) {
  if (!item.term?.trim() || !item.definition?.trim()) problems.push(`glossary[${index}]: term/definition required`);
  if (seenTerms.has(item.term.toLowerCase())) problems.push(`Duplicate glossary term: ${item.term}`);
  seenTerms.add(item.term.toLowerCase());
}
if (problems.length) { console.error(problems.join("\n")); process.exitCode = 1; }
else console.log(`Content validation passed: ${resources.length} resources, ${glossary.length} glossary terms.`);
