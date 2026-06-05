# prd-pocket-guide

Deployment-ready scaffolding and quick instructions.

Build locally

```bash
npm ci
npm run build
```

Run locally (preview)

```bash
npm start
# or
npm run preview
```

Docker (build and run)

```bash
docker build -t prd-pocket-guide:latest .
docker run -p 8080:80 prd-pocket-guide:latest
```

CI

The repository includes a GitHub Actions workflow that runs `npm ci`, `npm run lint`, and `npm run build` on push.

Notes

- Copy `.env.example` to `.env` and set environment variables as needed.
CI & GitHub Container Registry

- A GitHub Actions workflow `publish-ghcr.yml` builds the site using Node 18, builds a Docker image, and pushes it to the GitHub Container Registry as `ghcr.io/<owner>/<repo>:latest` on push to `main`/`master`.
- You can enable and use that image directly (no local build required). See GitHub Packages / GHCR for pulling and deploying images.
- The Docker image serves the built `dist/` with `nginx`.
