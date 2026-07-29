# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 16 App Router site using React 19, TypeScript, and Tailwind CSS 4. Route files live in `src/app/`: `page.tsx` renders the home page, `layout.tsx` owns global metadata and fonts, and `globals.css` contains the design system and section styles. Put reusable UI in `src/components/`; current examples include `SiteHeader.tsx`, `ServiceIndex.tsx`, `WorkRail.tsx`, and the ReactBits-derived `Silk.jsx`. Store directly served assets in `public/`.

`design.md` defines the N33 visual system. Treat it as design source of truth; do not edit it unless the requester asks.

## Build, Test, and Development Commands

- `npm run dev` starts local development at `http://localhost:3000`.
- `npm run lint` runs ESLint with Next.js core-web-vitals and TypeScript rules.
- `npm run build` creates the production build and catches type/build failures.
- `npm run start` serves a completed production build.

Run `npm run lint` and `npm run build` before handing off UI changes.

## Coding Style & Naming Conventions

Use TypeScript for new components when practical. Keep React components in PascalCase files, such as `ProjectRail.tsx`; use camelCase for functions and variables. Follow existing two-space indentation, double quotes, and semicolons. Use Tailwind utilities for small local rules and keep shared tokens, layout primitives, and section selectors in `src/app/globals.css`.

Reuse existing components before creating abstractions. Keep changes scoped, responsive, accessible, and aligned with `design.md`'s monochrome, sharp-cornered system. Add `aria-label` text for icon-only controls.

## Testing Guidelines

No test runner exists yet. Use lint plus production build as baseline checks. For new non-trivial logic, add the smallest focused test when a test framework is introduced; name it `*.test.ts` or `*.test.tsx` beside its module or in a matching test directory.

## Commit & Pull Request Guidelines

History uses short, imperative summaries: `Updated Homepage`, `Removed logo Header`, `Fix project structure`. Keep commits focused and use the same style. Pull requests need a concise description, affected paths, validation commands, linked issue when present, and desktop/mobile screenshots for visual changes.

## Configuration & Dependencies

Do not commit secrets or local environment files. Check `package.json` before adding dependencies; prefer built-in browser, React, Next.js, and existing package capabilities.
