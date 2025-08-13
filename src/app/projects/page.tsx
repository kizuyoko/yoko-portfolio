import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";
import { projects } from "@/data/projects";
import TopProjectThumbnail from "@/components/ui/TopProjectThumbnail";

export const metadata = {
  title: "Projects - Yoko's Portfolio",
  description: "My projects and works in web development.",
};

export default function Projects() {
  const topProjects = projects.filter(projects => projects.topProject);
  
  return (
    <section>
      <Title>
        Projects
      </Title>
      <h2 className="mt-6">Top Projects</h2>
      <div className="grid grid-cols-1 gap-4 pb-4 mt-4 sm:grid-cols-2">
        {
          topProjects.map(project => (
            <TopProjectThumbnail 
              key={project.title}
              title={project.title}
              image={project.image}
              techStack={project.techStack}
            />
          ))
        }
      </div>
      <Button
        href="/other-projects"
        ariaLabel="Go to Other Projects"
      >
        Other Projects
      </Button>
    </section>
  );
}
