import { resources } from "./data/resources.js";
import { glossary } from "./data/glossary.js";
import { categoriesFromResources, escapeHtml, filterResources } from "./utils.js";

const search = document.querySelector("#resource-search");
const filters = document.querySelector("#category-filters");
const cards = document.querySelector("#resources-grid");
const status = document.querySelector("#results-status");
const emptyState = document.querySelector("#empty-state");
const reset = document.querySelector("#reset-filters");
const active = { query: "", category: "All topics" };

const categories = ["All topics", ...categoriesFromResources(resources)];
document.querySelector("#resource-count").textContent = String(resources.length);
document.querySelector("#category-count").textContent = String(categories.length - 1);

function renderFilters() {
  filters.innerHTML = categories.map((category) => `<button type="button" class="filter-chip${category === active.category ? " is-active" : ""}" data-category="${escapeHtml(category)}" aria-pressed="${String(category === active.category)}">${escapeHtml(category)}</button>`).join("");
}

function resourceCard(item) {
  return `<article class="resource-card"><div class="card-meta"><span class="tag">${escapeHtml(item.category)}</span><span class="difficulty">${escapeHtml(item.level)}</span></div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p><div class="card-foot"><span class="first-step"><strong>Start here:</strong> ${escapeHtml(item.firstStep)}</span><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHtml(item.title)} in a new tab">Visit resource ↗</a></div></article>`;
}

function renderResources() {
  const matches = filterResources(resources, active);
  cards.innerHTML = matches.map(resourceCard).join("");
  emptyState.hidden = matches.length > 0;
  status.textContent = `${matches.length} resource${matches.length === 1 ? "" : "s"} found`;
  renderFilters();
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  active.category = button.dataset.category;
  renderResources();
});

search.addEventListener("input", () => {
  active.query = search.value;
  renderResources();
});

reset.addEventListener("click", () => {
  active.query = "";
  active.category = "All topics";
  search.value = "";
  renderResources();
  search.focus();
});

document.querySelector("#glossary-grid").innerHTML = glossary.map((item) => `<article class="glossary-item"><h3>${escapeHtml(item.term)}</h3><p>${escapeHtml(item.definition)}</p></article>`).join("");
renderResources();
