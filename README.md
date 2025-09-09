# Welcome to My Portfolio!

Hi! This is Yoko, a Frontend Developer.

This portfolio site has been completely rebuilt from scratch to reflect my recent growth in modern frontend technologies including React, Next.js, and TypeScript.

You can still view my previous portfolio [here](https://portfolioyoko.vercel.app) to see how far I’ve come.

In this updated version, I have also focused on performance and accessibility improvements, including Lighthouse optimization, WAVE evaluations, and the integration of Friendly Captcha for WCAG-compliant and privacy-friendly form validation. 

Feel free to explore my updated work — and check back soon for further improvements!

This site was created using my custom [boilerplate](https://boilerplate-react-nextjs-typescript.vercel.app/). You're welcome to clone it and use it as a starting point for your own projects!

## Improvements from the last version
- Design from scratch with [Figma](https://www.figma.com/design/jawKCOfRFJjaRytr5RtJDm/Yoko-Portfolio?node-id=63-38&t=e8XsOdkiLwFETs5y-1)
- Improved page structure with Next.js routing and better performance
- Categorized skills section for easier readability
- Project section with more detailed descriptions
- More complex responsive design, now that the number of pages has increased
- Documentation in README.md and feature branches per pages while development
- Introduced better Git workflow by managing branches based on features and development stages, and experimented with GitHub Actions to automate Lint and Build for faster, safer deployments.
- Accessibility and performance based on Lighthouse, WAVE, and Friendly Captcha evaluations.
- Implemented keyboard navigation with visible focus rings on interactive elements.
- Enhanced color contrast and applied proper ARIA attributes for better accessibility compliance.
- Optimized page performance and Core Web Vitals scores.
- Introduced Friendly Captcha to provide WCAG-compliant and privacy-friendly form validation.

## Screenshot

![Screenshot](./public/screenshot.png) 

## Deployment

Live on Vercel, [View Site](https://yoko-portfolio-kappa.vercel.app/)

## Features

- Fully designed in [Figma](https://www.figma.com/design/jawKCOfRFJjaRytr5RtJDm/Yoko-Portfolio?node-id=63-38&t=e8XsOdkiLwFETs5y-1) using a Design System.
- Built with React 18 and Next.js App Router
- Written in TypeScript
- Tailwind CSS setup with responsive and dark mode support
- Dynamic site settings stored in `src/app/constants/site.ts`
- Two layouts: Centered layout for homepage and 404. Two-column layout with header and right-side menu for other pages.
- Custom 404 page
- Dark mode
- SEO-ready with sitemap.xml and robots.txt
- Minimal GitHub Actions workflow that runs `npm run lint` automatically on each push and pull request to the `main` branch. 
- Contact form integrated with EmailJS
- Accessible navigation with focus indicators and ARIA labels.
- Performance-optimized images and lazy loading for faster page rendering.

## Tech Stack

- **Frameworks**: React, Next.js
- **Languages**: TypeScript
- **Styling**: Tailwind CSS
- **Design**: Figma
- **Animation**: Framer Motion
- **Deployment**: Vercel
- **Performance & SEO**: Lighthouse, Wave, Friendly Captcha, Sitemap
- **CI/CD**: GitHub Actions
- **Email Service**: EmailJS

## GitHub Branches
- setup (Readme, enviroment, font, basic colors, favicon, 404) 
- layout (header, footer, main)
- feature/home (home, 404)
- feature/skills (list per cetegories, sub menu) 
- feature/projects (detail pages)
- feature/contact (contact form)
- enhancement/responsive (hamburger menu)
- enhancement/accessibility (accessibilty, performance)

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/kizuyoko/yoko-portfolio.git
cd yoko-portfolio
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
