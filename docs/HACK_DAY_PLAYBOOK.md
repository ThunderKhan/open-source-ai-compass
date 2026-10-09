# DDUGU Hacktoberfest — Track B organizer playbook

This track teaches genuine first open-source contributions. It is **not** a shortcut to Hacktoberfest 2026's official AI-project awards; a merged PR is not required for someone to learn successfully.

## Before 12:45 PM

- Open the repository and verify the site and the 100-issue backlog are visible.
- Put this URL and the [contribution instructions](../CONTRIBUTING.md) on a slide and QR code.
- Ask attendees to sign in to GitHub. Browser editing is supported; terminals are optional.
- For 30–40 participants, arrange at least 3 technical mentors and a dedicated issue/review coordinator; for a 75-person turnout, arrange significantly more support (ideally 5–6 mentors plus a coordinator).

## Git & GitHub 101 (12:45–1:25 PM)

1. Demonstrate how a repository, issue, fork, branch, commit and pull request fit together.
2. Open an example issue and identify the **Goal** and **Acceptance criteria**.
3. Demonstrate a single change to a fork and how to open a PR against this repository.
4. Explain that a PR is a request for review; only accept a PR after checking correctness.
5. Help participants form pairs where helpful.

## Hack Sprint (1:35–3:35 PM)

| Time (IST) | Track B activity |
| --- | --- |
| 1:35–1:45 | Select issues and leave a claim comment. Organizers confirm each claim. |
| 1:45–2:40 | Implement meaningful improvements; mentors circulate. |
| 2:40–3:05 | Run tests or review the browser result, and write a clear PR description. |
| 3:05–3:20 | Open PRs and request mentor review. |
| 3:20–3:35 | Respond to feedback or prepare a short explanation of the work. |

Students can work solo or in pairs. The repository now has **100 prepared issues** for possible participants and follow-up contributors. This is a selection pool, not a promise that 100 independent PRs can be merged during one sprint. Some issues edit the same source files, and some feature issues will require more time than beginners have.

## Issue claim policy

- A student/pair comments “I'd like to work on this” on one available issue.
- A mentor replies to confirm the claim, and adds an assignee if GitHub allows it.
- No one should work on a claimed issue without coordinating; two independent PRs for identical work waste everyone's time.
- Many AI glossary and resource-card tasks touch `src/data/glossary.js` or `src/data/resources.js`. Stagger claims, merge reviewed changes early, and help new contributors sync their forks to limit conflicts.
- Prioritize independent `docs/*.md` tasks and small tests for participants unfamiliar with merge conflicts. Assign intermediate features only to prepared participants.
- One active claim per participant or pair; allow another after submitting or releasing the first, and keep a reserve of unclaimed issues for late arrivals.
- If blocked or leaving early, comment so an organizer can release it.
- Mentors may split or refine issues when work is genuinely independent.
- Do not merge a PR merely to increase the contribution count.

## Review checklist

- Does the change address the issue's acceptance criteria?
- Are facts, links, and examples correct and original?
- Does `npm run check` pass when code or content is changed?
- If the UI changes, is it usable with a keyboard and on a narrow screen?
- Does the contributor understand and explain the change?
- Is any personal data, credential or copied copyrighted text included?

A review may request revisions. Unfinished work can still be celebrated as learning, without representing it as a completed contribution. **Do not promise same-day review or merge for all 100 issues.**

## Fair recognition

Reward effort, useful work, collaboration, and the clarity of explanations—not PR quantity. Keep official Hack Day project judging and its eligible submissions separate from Track B learning activities.

## Troubleshooting

- **Cannot run Python or Node?** Use GitHub's web editor to change one documentation or data entry; a mentor can run the checks.
- **A PR conflicts with another?** Ask a mentor to help rebase or choose another independent issue.
- **No Wi-Fi?** Continue the workshop using screenshots or locally cached files, then submit when connectivity returns.
- **Cannot finish?** Leave an honest progress comment with what was attempted and what remains.

After the event, review every PR carefully, reply to the contributor, and keep the repository useful beyond Hacktoberfest.
