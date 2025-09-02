import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "PokeCheck",
    description: (
      <article className="project-description">
        <h2>Overview</h2>
        <p>
          PokeCheck is a Pokémon matchup checker that allows users to search for Pokémon and check type effectiveness in battles. The app is designed to be fast, accessible, and user-friendly. For more details, see the PokeCheck Project Plan.
        </p>
        <h2>Achievement</h2>
        <p>
          PokeCheck scored 100 on the Lighthouse test! View the result. 100 points on both desktop and mobile for the homepage and search results page in Lighthouse performance audits! While the detail page on mobile scored 96 points, I am thrilled with the overall optimization, especially for key pages.
        </p>
        <h2>Features</h2>
        <ul>
          <li><b>Home Page:</b> Displays featured Pokémon and a search bar.</li>
          <li><b>Search Functionality:</b> Users can search for Pokémon by name.</li>
          <li><b>Pokémon Details:</b> View weight, height, stats, type, and abilities.</li>
          <li><b>Type Details:</b> Check type effectiveness, Pokémon, and move.</li>
          <li><b>Favorite Functionality:</b> Users can add/remove Pokémon to favorites with a heart icon. Favorite list is persisted via localStorage.</li>
          <li><b>Favorite List Page:</b> View all your favorited Pokémon in one place.</li>
          <li><b>Responsive Design:</b> Optimized for both desktop and mobile.</li>
        </ul>
        <h2>Tech Stack</h2>
        <ul>
          <li><b>WireFrame:</b> Figma</li>
          <li><b>Deployment:</b> Vercel</li>
          <li><b>Language:</b> TypeScript</li>
          <li><b>Styling:</b> Tailwind CSS</li>
          <li><b>State Management:</b> Redux Toolkit</li>
          <li><b>API Requests:</b> Axios, TanStack Query</li>
          <li><b>Component Documentation:</b> Storybook</li>
          <li><b>Testing:</b> Jest (unit testing)</li>
          <li><b>Performance Testing, Accessibility:</b> Lighthouse, Wave</li>
        </ul>
      </article>
    ),
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Axios", "Jest", "Storybook", "React.js", "Figma", "Vercel", "Redux", "Tanstack Query", "Lighthouse", "Wave", "Responsive Design", "API"],
    image: "pokecheck.png",
    demo: "https://pokecheck-two.vercel.app/",
    github: "https://github.com/kizuyoko/pokecheck",
    topProject: true,
  }, {
    title: "Quick Invoice",
    description: (
      <article className="project-description">
        <h2>Overview</h2>
        <p>
          QuickInvoice is an invoice generator that allows users to create professional invoices by filling out a simple form and adding multiple items. The app emphasizes accessibility, performance, and simplicity, achieving perfect or near-perfect scores in Lighthouse and Wave accessibility audits.
        </p>
        <p>
          Built with Vue 3 and Nuxt 3, QuickInvoice leverages modern web technologies to deliver a seamless user experience. The project is structured into three phases, with the first phase (MVP) already completed and subsequent phases planned for future enhancements.
        </p>
        <h2>Current Status</h2>
        <h3>Phase 1 (MVP) completed</h3>
        <ul>
          <li>Implemented the core functionality of generating invoices.</li>
          <li>Learned form handling and validation in Vue/Nuxt.</li>
          <li>Implemented PDF generation directly on the frontend.</li>
          <li>Shifted perspective from React-centric practices to Vue/Nuxt approaches.</li>
          <li>Built a clean and reusable component-based UI.</li>
        </ul>
        <h3>Key Features</h3>
        <ul>
          <li>Dynamic form with validation</li>
          <li>Generate invoices with customizable fields</li>
          <li>Export invoices as PDF</li>
          <li>Responsive design for both desktop and mobile</li>
          <li>Simple and clean UI, built with reusable components</li>
          <li>Planned features: authentication and invoice history</li>
          <li>Future enhancements: A/B testing, multi-language support, CSV export</li>
        </ul>
        <h2>Planned Enhancements</h2>
        <h3>Phase 2 (Enhancements - upcoming)</h3>
        <p>This phase focuses on refining the user experience, improving accessibility and performance, and laying the groundwork for future scalability.</p>
        <ul>
          <li>UI refinements and improved component design</li>
          <li>Accessibility and performance improvements</li>
          <li>Integration with Strapi for data handling</li>
          <li>Storybook for UI documentation</li>
          <li>Currency API integration</li>
          <li>Automated testing with Jest and Cypress</li>
          <li>SEO optimization and additional performance audits</li>
        </ul>
        <h3>Phase 3: Advanced Features</h3>
        <ul>
          <li>User authentication</li>
          <li>Invoice history and management</li>
          <li>Multi-language support</li>
          <li>Dark mode toggle</li>
          <li>CSV export</li>
          <li>A/B testing with Statsig</li>
        </ul>
      </article>
    ),
    techStack: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Vuex', 'LightHouse', 'Wave', 'Jest', 'Cypress', 'TanStack Query', 'Axios', 'Tailwind', 'Storybook', 'Vercel', 'Figma', 'EmailJS'],
    image: "quickinvoice.png",
    demo: 'https://quick-invoice-eight.vercel.app',
    github: 'https://github.com/kizuyoko/quick-invoice',
    topProject: true,
  },{
    title: "Portfolio",
    description: (
      <article className="project-description">
        <h2>Overview</h2>
        <p>
          This portfolio site has been completely rebuilt from scratch to reflect my recent growth in modern frontend technologies including React, Next.js, and TypeScript. You can still view my previous portfolio <a className="underline" href="https://portfolioyoko.vercel.app/" target="_blank" rel="noopener noreferrer">here</a> to see how far I have come. Feel free to explore my updated work — and check back soon for further improvements!</p>
        <p>
          This site was created using my custom <a className="underline" href="https://github.com/kizuyoko/boilerplate-react-nextjs-typescript-tailwind/" target="_blank" rel="noopener noreferrer">boilerplate</a>. You are welcome to clone it and use it as a starting point for your own projects!
        </p>
        <h2>Improvements from the last version</h2>
        <ul>
          <li>Design from scratch with Figma</li>
          <li>Improved page structure with Next.js routing and better performance</li>
          <li>Categorized skills section for easier readability</li>
          <li>Project section with more detailed descriptions</li>
          <li>More complex responsive design, now that the number of pages has increased</li>
          <li>Documentation in README.md and feature branches per pages while development</li>
          <li>Introduced better Git workflow by managing branches based on features and development stages.</li>
        </ul>
        <h2>Features</h2>
        <ul>
          <li>Fully designed in Figma</li>
          <li>Built with React 18 and Next.js App Router</li>
          <li>Written in TypeScript</li>
          <li>Tailwind CSS setup with responsive and dark mode support</li>
          <li>Dynamic site settings stored in src/app/constants/site.ts</li>
          <li>Two layouts: Centered layout for homepage and 404. Two-column layout with header and right-side menu for other pages.</li>
          <li>Custom 404 page</li>
          <li>Dark mode</li>
          <li>SEO-ready with sitemap.xml and robots.txt</li>
          <li>Minimal GitHub Actions workflow that runs npm run lint automatically on each push and pull request to the main branch.</li>
          <li>Contact form integrated with EmailJS</li>
        </ul>
        <h2>Tech Stack</h2>
        <ul>
          <li><b>Frameworks:</b> React, Next.js</li>
          <li><b>Languages:</b> TypeScript</li>
          <li><b>Styling:</b> Tailwind CSS</li>
          <li><b>Design:</b> Figma</li>
          <li><b>Deployment:</b> Vercel</li>
          <li><b>Performance & SEO:</b> Lighthouse, Sitemap</li>
          <li><b>CI/CD:</b> GitHub Actions</li>
          <li><b>Email Service:</b> EmailJS</li>
        </ul>
      </article>
    ),
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "React.js", "Figma", "Vercel", "Responsive Design", "Dark Mode", "Lighthouse", "sitemap.xml", "robots.txt", "GitHub Actions"],
    image: "portfolio.png",
    demo: "https://yoko-portfolio-kappa.vercel.app/",
    github: "https://github.com/kizuyoko/yoko-portfolio",
    topProject: true,
  },{
    title: 'Quick Reddit',
    image: 'quickreddit.png',
    description: (
      <article className="project-description">
        <h2>Overview</h2>
        <p>Quick Reddit is a fast and intuitive web application that allows users to explore trending Reddit posts effortlessly. Built with Next.js, the app is optimized for SEO and performance while maintaining a clean, responsive design. It integrates the Reddit API for real-time data, enabling users to browse posts by category, search for topics, and vote on posts.</p>
        <h2>Stack</h2>
        <ul>
          <li><b>React</b> - Component-based UI development</li>
          <li><b>Redux</b> - State management</li>
          <li><b>TypeScript</b> - Type safety and better development experience</li>
          <li><b>Next.js</b> - SEO optimization and server-side rendering</li>
          <li><b>Jest</b> - Unit testing framework</li>
          <li><b>React Testing Library</b> - UI component testing</li>
          <li><b>Tailwind CSS</b> - Utility-first styling</li>
          <li><b>Figma</b> - UI/UX design</li>
          <li><b>Lighthouse</b> - Performance and accessibility analysis</li>
        </ul>
        <h2>Features</h2>
        <ul>
          <li><b>Reddit API</b> - Fetching reddits</li>
          <li><b>Category</b> - Browse post</li>
          <li><b>Search</b> - Reddits with key words</li>
          <li><b>Vote</b> - On posts</li>
          <li><b>Responsive Design</b> - For all devices, Dark mode adjustment</li>
        </ul>
      </article>
    ),
    techStack: ['Next.js', 'React.js', 'TypeScript', 'Redux', 'Jest and RTL', 'Lighthouse' , 'Reddit API', 'Figma', 'Tailwind'],
    demo: 'https://quickreddit.vercel.app',
    github: 'https://github.com/kizuyoko/quickreddit',
    topProject: true,
  },{
    title: "Inspiration Hub",
    description: (
      <article className="project-description">
        <h2>Overview</h2>
        <p>
          An app designed to inspire and motivate daily. It allows users to set daily goals with status tracking and automatic sorting for better organization. The app also displays local weather, a random inspirational quote, and a stunning background image to spark creativity and positivity.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Daily goal setting</li>
          <li>Status tracking</li>
          <li>Automatic sorting</li>
          <li>Local weather display (API: Open Weather API)</li>
          <li>Random inspirational quotes (API: DummyJSON)</li>
          <li>Beautiful background images, cycle through multiple fetched images (API: Unsplash)</li>
        </ul>
      </article>
    ),
    techStack:  ['React.js', 'TypeScript', 'Vite', 'Redux', 'API (Open Weather, Unsplash, Quote by DummyJSON)', 'Figma', 'Tailwind' ],
    image: "inspiration-hub.png",
    demo: 'https://inspiration-hub-three.vercel.app/',
    github: 'https://github.com/kizuyoko/inspiration-hub',
    topProject: true,
  },{
    title: 'React TypeScript Music',
    image: 'react_typescript_music.png',
    description: 'A dynamic music app that lets users search for their favorite songs, curate custom playlists, and save them directly to Spotify.',
    techStack: ['React.js', 'TypeScript', 'Vite', 'Tailwind', 'Spotify API' ],
    demo: 'https://react-typescript-music.vercel.app/',
    github: 'https://github.com/kizuyoko/react-typescript-music',
  },  {
    title: 'Tailwind Showcase',
    image: 'tailwind_showcase.png',
    description: 'Tailwind template with menu, 1/2/3 columns, grid, tabs, accordion, form. Works for React, Vue, and vanilla HTML.',
    techStack: ['Tailwind', 'JavaScript', 'HTML', 'CSS'],
    demo: 'https://tailwind-showcase-2l1f.vercel.app',
    github: 'https://github.com/kizuyoko/tailwind-showcase',
  },{
    title: 'React Native Color',
    image: 'react_native_color.png',
    description: "Colors List, today's color (random), form to add a new color.",
    techStack: ['React Native', 'Expo', 'Android', 'iOS', 'EAS'],
    demo: 'https://expo.dev/accounts/kizuyoko/projects/react-native-start/builds/d1518ce4-4d92-47b2-9aa3-a207f5271b56',
    github: 'https://github.com/kizuyoko/react-native-color',
  }, 
];
