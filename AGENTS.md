# AGENTS.md

## Project Overview

This is Nikolas Padilla's personal portfolio, now built with Astro and Tailwind CSS. The site is static-first and uses Markdown content collections for project write-ups.

## Stack

- Astro 6
- Tailwind CSS 4 via `@tailwindcss/vite`
- Astro content collections for `src/content/projects`
- `@astrojs/sitemap` for sitemap generation
- pnpm as the package manager
- ESLint and Prettier for linting/formatting
- Lefthook for Git hooks

## Commands

- Install dependencies with `pnpm install`.
- Start local development with `pnpm run dev`.
- Run type checks with `pnpm run typecheck`.
- Run lint with `pnpm run lint`.
- Check formatting with `pnpm run format:check`.
- Run the full non-build quality gate with `pnpm run check`.
- Build the site with `pnpm run build`.
- Run the full verification gate with `pnpm run verify`.
- Install Git hooks with `pnpm run hooks:install`.

## Project Structure

- `src/pages/` contains Astro routes.
- `src/layouts/Layout.astro` owns document metadata, shared layout, and Astro client routing/view transitions.
- `src/components/` contains shared Astro components.
- `src/content.config.ts` defines content collections.
- `src/content/projects/*/index.md` contains project posts.
- `src/lib/config.ts` contains site-wide metadata.
- `src/lib/projects.ts` contains project collection helpers.
- `src/styles/global.css` contains Tailwind theme tokens, prose styles, and site motion utilities.
- `public/` contains static assets such as the headshot, resume, favicon, fonts, and OG image.

## Conventions

- Use pnpm, not Bun or npm.
- Prefer Astro components and content collections over framework-specific client code.
- Keep the portfolio content and visual structure minimal; preserve the existing copy unless the task asks to change it.
- Keep motion tasteful and consistent with the existing utilities in `src/styles/global.css`.
- Use `@astrojs/sitemap` for sitemap generation. Do not add a custom `sitemap.xml` route unless explicitly requested.
- Keep `robots.txt` as the Astro route at `src/pages/robots.txt.ts`.
- Run `pnpm run check` and `pnpm run build` after framework, routing, content, or styling changes.

## Commit Messages

- Prefer imperative mood commit messages without Conventional Commit prefixes.
- Examples: `Port portfolio to Astro`, `Normalize sitemap generation`.
- Avoid prefixes like `docs:`, `chore:`, or `feat:` unless explicitly requested.
