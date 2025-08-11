import { ReactNode } from "react";

export type Project = {
  title: string;
  description: ReactNode;
  techStack: string[];
  image: string;
  link?: string;
  github?: string;
};
