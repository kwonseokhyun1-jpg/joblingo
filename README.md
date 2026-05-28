# PathDiscover

PathDiscover is a beginner-friendly career exploration app. It helps people learn
what different jobs are actually like, match their personality with possible
career paths, and complete short class-style lessons for each role.

## Features

- Browse 100 career paths by field, skills, traits, or keywords.
- Take a personality quiz to get suggested starting points.
- Learn through 500 useful mini classes, including prerequisite guidance, reflection prompts, and proof-of-learning activities.
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
to GitHub Pages from `main` and Cursor feature branches.

Expected live site: [https://kwonseokhyun1-jpg.github.io/joblingo/](https://kwonseokhyun1-jpg.github.io/joblingo/)

If that URL returns 404, check the repository settings in GitHub:

1. Open **Settings > Pages**.
2. Set **Build and deployment > Source** to **GitHub Actions**.
3. If the repository is private, make sure your GitHub plan and Pages visibility settings allow the site to be viewed.
4. Re-run the **Deploy PathDiscover to GitHub Pages** workflow or push to `main`.

The site will not be available until GitHub Pages is enabled and a deployment run completes successfully.
If the workflow log says `Resource not accessible by integration`, the repository owner must enable Pages manually in settings because the automation token is not allowed to create the Pages site.

## Validate

```bash
npm run check
```
