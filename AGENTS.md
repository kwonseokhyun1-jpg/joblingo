# Repository Instructions

## Cursor Cloud specific instructions

- The current `main` checkout contains only `README.md`; there are no package manager files, runnable services, lint scripts, test scripts, or build scripts on this branch.
- If working on the static JobLingo app branch that includes `package.json`, follow that branch's `README.md` and package scripts. It runs as a dependency-free static site on port `8088` with `npm start`, and `npm run check` performs the JavaScript syntax check.
- No database, cache, Docker service, or external SaaS dependency is required for the discovered static app branch.
