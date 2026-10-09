import test from "node:test";
import assert from "node:assert/strict";
import { resources } from "../src/data/resources.js";
import { categoriesFromResources, escapeHtml, filterResources, normalizeQuery } from "../src/utils.js";

test("resources exist and categories are sorted", () => {
  assert.ok(resources.length >= 10);
  assert.ok(categoriesFromResources(resources).length >= 4);
  assert.deepEqual(categoriesFromResources(resources), [...categoriesFromResources(resources)].sort());
});
test("normalization handles extra spaces and null", () => {
  assert.equal(normalizeQuery("  GITHUB  "), "github");
  assert.equal(normalizeQuery(null), "");
});
test("search matches terms in title, tags, and description", () => {
  assert.ok(filterResources(resources, { query: "GITHUB" }).length > 0);
  assert.ok(filterResources(resources, { query: "local ai" }).length > 0);
  assert.equal(filterResources(resources, { query: "nonexistentneedle999" }).length, 0);
});
test("category filtering can be combined with searching", () => {
  const items = filterResources(resources, { category: "Tools", query: "python" });
  assert.ok(items.length > 0);
  assert.ok(items.every((item) => item.category === "Tools"));
});
test("empty search returns all items", () => {
  assert.equal(filterResources(resources).length, resources.length);
});
test("HTML escaping handles untrusted text", () => {
  assert.equal(escapeHtml(`<img src="x" onerror='alert(1)'>&`), "&lt;img src=&quot;x&quot; onerror=&#39;alert(1)&#39;&gt;&amp;");
});
