import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "PokeCheck",
    description: (
      <>
        <p>
          PokeCheck is a responsive Pokémon matchup checker that allows users to search for Pokémon, explore type effectiveness, and save their favorites. Built with TypeScript and Next.js, the app prioritizes speed, accessibility, and user experience. It fetches real-time data from the official PokéAPI using TanStack Query and Axios. The project includes unit tests with Jest, UI documentation with Storybook, and has been performance-audited with Lighthouse — achieving top scores on both desktop and mobile.  
        </p>
      </>
    ),
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Axios", "Jest", "Storybook"],
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
