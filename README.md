# JobLingo

JobLingo is a beginner-friendly career exploration app. It helps people learn
what different jobs are actually like, match their personality with possible
career paths, and complete short class-style lessons for each role.

## Features

- Browse career paths by field, skills, traits, or keywords.
- Take a personality quiz to get suggested starting points.
- Learn through four mini classes per career path.
- Track class progress locally in the browser.
- Run as a dependency-free static web app.

## Run locally

```bash
npm start
```

Then open `http://localhost:8088`.

In Cursor Cloud, open the forwarded/preview URL for port `8088`. Typing
`http://127.0.0.1:8088` in your own browser points at your computer, not the
cloud machine, so it will not load unless the port is forwarded.

## GitHub Pages

This repository includes a GitHub Actions workflow that deploys the static app
to GitHub Pages whenever changes land on `main`.

After this branch is merged, the live site should be available at:

```text
https://kwonseokhyun1-jpg.github.io/joblingo/
```

## Validate

```bash
npm run check
```
