import { ReactNode } from "react";

export type Project = {
  title: string;
  description: ReactNode | string;
  techStack: string[];
  image: string;
  demo?: string;
  github?: string;
  topProject?: boolean;
};
 