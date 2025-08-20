import { AnimatedProjects } from "@/components/AnimatedProjects";
import { Title } from "@/components/ui/Title";

export const metadata = {
  title: "Projects - Yoko's Portfolio",
  description: "My projects and works in web development.",
};

export default function ProjectsPage() {
  
  return (
    <section>
      <Title>Projects</Title>
      <p className="error-text">⚠️ Under Construction - Project content is still being developed. More details will be added soon!</p>
      <AnimatedProjects />
    </section>  
  );
}
