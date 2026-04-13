# Copilot Next.js

A Next.js project set up manually following the official [Next.js installation guide](https://nextjs.org/docs/app/getting-started/installation).

## Features

- ✅ Next.js 16 (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS v4
- ✅ ESLint
- ✅ Turbopack (default dev bundler)
- ❌ No `src/` folder

## Getting Started

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server (Turbopack) |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Run ESLint with auto-fix |

## Project Structure

```
copilot-nextjs/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```
