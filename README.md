# 🧭 Open Source AI Compass

**A real beginner-friendly open-source project built by students, for students.** Find reliable learning resources for GitHub, open-source AI, model cards, local inference, and responsible AI. Help improve it during Hacktoberfest × DDUGU and beyond.

> This is a resource directory, **not an AI model or inference service**. A beginner contribution to this repository is a learning activity; a PR alone is not an official Hacktoberfest 2026 AI project submission.

## What works today

- Responsive resource directory with live search and category filters
- Curated entries with official links and an actionable first step
- Accessible navigation, an AI glossary, and clear contributor instructions
- Content validation, automated JavaScript tests, and CI
- No API keys, signups, paid services, or database required

## Run it

**Fastest:** open `index.html` in a modern browser (ES modules may be blocked on `file://` by some browsers; if so use the server method).

**Recommended:** from this folder, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. Alternatively, use VS Code Live Server.

## Run the checks

Requires Node.js 20 or later. No `npm install` required:

```bash
npm run check
```

## Where to contribute

- [`src/data/resources.js`](src/data/resources.js): curated resource cards
- [`src/data/glossary.js`](src/data/glossary.js): accurate, concise AI and Git vocabulary
- [`src/styles.css`](src/styles.css): accessible layout and responsive design
- [`src/main.js`](src/main.js): UI behavior and rendering
- [`src/utils.js`](src/utils.js): testable resource filtering
- [`tests/`](tests/): automated tests

For the DDUGU event, mentors and organizers can use the [Track B playbook](docs/HACK_DAY_PLAYBOOK.md).

See [CONTRIBUTING.md](CONTRIBUTING.md) and [the issue tracker](https://github.com/ThunderKhan/open-source-ai-compass/issues) to get started. Before claiming an issue, read its acceptance criteria and leave a comment. Please do not submit duplicate, cosmetic-only, or machine-generated PR spam.

## For organizers: create the issue backlog

This repository includes 25 ready-to-run issues and custom labels in `scripts/issue-backlog.json`. To create them without installing any local dependencies:

1. In the repository, open **Actions → Seed Hack Day Issues → Run workflow**.
2. The workflow creates the labels and issues; repeated runs skip issues with the same ID.
3. Set repository **Settings → Actions → General → Workflow permissions** to allow read and write if organizational defaults restrict `GITHUB_TOKEN`. If running is restricted, use the GitHub CLI alternative below.

For the GitHub CLI: install and authenticate `gh`, then run `gh auth login`, followed by `node scripts/seed-issues.mjs` with `GITHUB_TOKEN` and `GITHUB_REPOSITORY` provided in the environment. The GitHub workflow is recommended.

## Host it on GitHub Pages

In **Settings → Pages**, set the deployment source to **GitHub Actions**, then run the "Deploy site to GitHub Pages" workflow (or push to `main`). This deployment uses plain static files; no build step is needed.

## Maintainer notes

- Keep external links relevant and check their official destination before approval.
- Avoid claiming that every open-weight model is fully open source; licenses and training-data access differ.
- Do not include other students' personal data, keys, passwords, or copyrighted content copied without permission.
- The repository is licensed under [MIT](LICENSE). External resources remain subject to their own licenses.

Created for Hacktoberfest Hack Day at Deen Dayal Upadhyaya Gorakhpur University, October 2026.
