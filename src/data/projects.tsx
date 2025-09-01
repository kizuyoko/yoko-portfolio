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
      <>
        <p>
          The current version of QuickInvoice is in its MVP phase. It allows users to generate a professional invoice by filling out a simple form and adding multiple items. The app focuses on accessibility, performance, and simplicity, which has resulted in perfect or near-perfect scores in Lighthouse and Wave accessibility audits.Future plans include enhancements such as item editing, integration with Strapi for data handling, setting up Storybook for UI components, connecting to a currency API, and adding automated testing using Jest and Cypress. Additional improvements will focus on the PDF layout, input validation, reusable templates, SEO optimization, performance auditing, and accessibility fixes. In later phases, more advanced features are planned, including user authentication, invoice history and management, multi-language support, a dark mode toggle, CSV export, and A/B testing with Statsig. 
        </p>
      </>
    ),
    techStack: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Vuex', 'LightHouse', 'Wave', 'Jest', 'Cypress', 'TanStack Query', 'Axios', 'Tailwind', 'Storybook', 'Vercel', 'Figma'],
    image: "quickinvoice.png",
    demo: 'https://quick-invoice-eight.vercel.app',
    github: 'https://github.com/kizuyoko/quick-invoice',
    topProject: true,
  },{
    title: 'Quick Reddit',
    image: 'quickreddit.png',
    description: 'Quick Reddit is a fast and intuitive web application that allows users to explore trending Reddit posts effortlessly. Built with Next.js, the app is optimized for SEO and performance while maintaining a clean, responsive design. It integrates the Reddit API for real-time data, enabling users to browse posts by category, search for topics, and vote on posts.',
    techStack: ['Next.js', 'React.js', 'TypeScript', 'Redux', 'Jest and RTL', 'Lighthouse' , 'Reddit API', 'Figma', 'Tailwind'],
    demo: 'https://quickreddit.vercel.app',
    github: 'https://github.com/kizuyoko/quickreddit',
    topProject: true,
  },{
    title: "Inspiration Hub",
    description: (
      <>
        <p>
          An app designed to inspire and motivate daily. It allows users to set daily goals with status tracking and automatic sorting for better organization. The app also displays local weather, a random inspirational quote, and a stunning background image to spark creativity and positivity.
        </p>
      </>
    ),
    techStack:  ['React.js', 'TypeScript', 'Vite', 'Redux', 'API (Open Weather, Unslplash, Quote by DummyJSON)', 'Figma', 'Tailwind' ],
    image: "inspiration-hub.png",
    demo: 'https://inspiration-hub-three.vercel.app/',
    github: 'https://github.com/kizuyoko/inspiration-hub',
    topProject: true,
  },{
    title: "Portfolio",
    description: (
      <>
        <p>
          This page. Simple list of projects, animation 
        </p>
      </>
    ),
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Axios", "Jest", "Storybook"],
    image: "portfolio.png",
    demo: "https://yoko-portfolio-kappa.vercel.app/",
    github: "https://github.com/kizuyoko/yoko-portfolio",
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
    description: 'Tailwind template with menue, 1/2/3 columns, grid, tabs, accordion, form. Works for React, Vue, and vanilla HTML.',
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
