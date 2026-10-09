# Contributing to Open Source AI Compass

Welcome! This repository is designed for first-time GitHub contributors. You do **not** need prior open-source or AI experience to make a meaningful change.

## Pick an issue

1. Open the **Issues** tab.
2. Start with `good first issue` or `difficulty: beginner`.
3. Read the full task and its **Acceptance criteria**.
4. Comment: `I'd like to work on this. Is it available?` Wait for organizer assignment to reduce duplicate work.
5. If you get stuck, ask your mentor in the issue rather than silently copying an answer.

## GitHub website workflow (no terminal required)

1. On this repository, click **Fork** to create your copy.
2. Open a file such as `src/data/glossary.js` in your fork, then click the pencil icon to edit it.
3. Make **one focused change**, following the examples in the file.
4. Commit to a new branch, e.g. `docs/add-fairness-term`.
5. Click **Contribute → Open pull request** and compare your branch against the original `main` branch.
6. Fill the PR template; link your issue with `Closes #ISSUE_NUMBER` only if it truly resolves it.
7. Respond to review comments respectfully. A submitted PR is not automatically an accepted contribution.

## Local workflow (optional)

```bash
git clone https://github.com/YOUR_USERNAME/open-source-ai-compass.git
cd open-source-ai-compass
git switch -c docs/my-improvement
# make your change
npm run check
git add .
git commit -m "docs: explain model cards more clearly"
git push -u origin docs/my-improvement
```

Then open a pull request using GitHub.

## Quality rules

- New resource entries need a trustworthy link, accurate summary, level, category, a suggested first step, and tags. Avoid duplicates and promotional entries.
- New glossary terms should be understandable by a beginner and scientifically accurate.
- For code edits, run `npm run check` locally if possible. Organizers can also review GitHub Actions results.
- For UI changes, include a screenshot and check mobile display and keyboard interaction.
- Don't include personal student data or credentials.
- You may use AI tools to understand code, but **you must understand, check, and be able to explain your own change**.
- Do not open a flood of trivial or duplicate PRs. One meaningful PR beats ten meaningless ones.

## Code of conduct

Be respectful and helpful. Critique work, not people. Avoid harassment, discriminatory behavior, or sharing private information. Organizers may moderate discussions and close inappropriate contributions.

For an urgent safety or conduct concern at the in-person event, speak to an organizer directly. Do not post sensitive reports publicly.
