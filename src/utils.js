/** Filtering logic kept separate so contributors can add unit tests. */
export function normalizeQuery(value) {
  return String(value ?? "").trim().toLocaleLowerCase("en");
}

export function categoriesFromResources(items) {
  return [...new Set(items.map((item) => item.category))].sort((a, b) => a.localeCompare(b));
}

export function filterResources(items, { query = "", category = "All topics" } = {}) {
  const needle = normalizeQuery(query);
  return items.filter((item) => {
    if (category !== "All topics" && item.category !== category) return false;
    if (!needle) return true;
    const haystack = [item.title, item.description, item.category, item.level, ...item.tags].join(" ").toLocaleLowerCase("en");
    return haystack.includes(needle);
  });
}

/** Escape content from the resource data before inserting it into HTML. */
export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
