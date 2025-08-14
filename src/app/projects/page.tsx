import { AnimatedProjects } from "@/components/AnimatedProjects";
import { Title } from "@/components/ui/Title";

export const metadata = {
  title: "Projects - Yoko's Portfolio",
  description: "My projects and works in web development.",
};

export default function Projects() {
  
  return (
    <section>
      <Title>Projects</Title>
      <AnimatedProjects />
    </section>  
  );
}
