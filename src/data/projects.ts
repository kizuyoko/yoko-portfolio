import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "PokeCheck",
    description: "A Pokémon compatibility checker built with Next.js, TypeScript, and TailwindCSS.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Axios", "Jest", "Storybook"],
    image: "/images/pokecheck.png",
    link: "https://pokecheck-two.vercel.app/",
    github: "https://github.com/kizuyoko/pokecheck",
  },
];
