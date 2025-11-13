# Cloudflare Pages Deployment Guide

This project is configured to deploy as a static React (Vite) site on Cloudflare Pages. The following steps describe the recommended workflow for both CI and manual deployments.

## 1. Install dependencies

```bash
npm install
```

## 2. Build locally (optional but recommended)

```bash
npm run build
```

The generated production assets will be output to `dist/`.

## 3. Configure Cloudflare Pages

1. Log into the Cloudflare dashboard and create (or select) a Pages project.
2. When asked for the build command, enter:
   ```
   npm run build
   ```
3. When asked for the build output directory, use:
   ```
   dist
   ```
4. The deployment will automatically use the configuration from `wrangler.toml`, including the `pages_build_output_dir` and compatibility date.

## 4. Optional: Deploy via Wrangler CLI

You can also deploy directly from your terminal using Wrangler:

```bash
npx wrangler pages deploy dist
```

(Ensure you have built the project first.)

## 5. Preview deployments

Use `npm run dev` for a local development server or `npm run preview` to test the production build locally before pushing changes.

With these steps, the project is ready to be deployed to Cloudflare Pages with minimal configuration.
