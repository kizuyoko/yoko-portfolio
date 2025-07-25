# Welcome to My Portfolio!

Hi! This is Yoko, a Frontend Developer.

This portfolio is currently being rebuilt from scratch to reflect my recent growth in modern frontend technologies such as React, Next.js, and TypeScript.  
You can still view my previous portfolio [here](https://portfolioyoko.vercel.app) to see how far I’ve come.

Feel free to explore my updated work — and check back soon for further improvements!

## Screenshot

![Screenshot](./public/screenshot.png) 

## Demo

Deployed to Vercel, [here](https://yoko-portfolio-kappa.vercel.app/)

## Features

- React 18 / Next.js App Router
- TypeScript support
- TailwindCSS, including dark mode support
- Google Fonts with CSS variables (`--font-title`, `--font-text`)
- Layout component with `<Header />` and `<Footer />`
- UI component with `<Button />`
- Easily customizable styles using CSS variables and Tailwind classes
- Dynamic site configuration with `src/app/constants/site.ts`
- 404 page
- Dark mode setting
- Sitemap and robots.txt for SEO.
- Minimal GitHub Actions workflow that runs `npm run lint` automatically on each push and pull request to the `main` branch. 

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/kizuyoko/boilerplate-react-nextjs-typescript-tailwind.git
cd boilerplate-react-nextjs-typescript-tailwind
```
Then, install dependencies and start the development server:

```bash
npm install
npm run dev
# or
yarn
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000)  in your browser to see the app running.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

