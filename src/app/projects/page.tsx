import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

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
      <div className="grid grid-cols-2 gap-4 mt-4">
        {
          topProjects.map(project => (
            <article key={project.title}>
              <Link href={`/projects/${project.title}`}>
                <Image 
                  src={`/projects/${project.image}`}
                  width="640"
                  height="445"
                  alt={project.title}                />
                {project.title}
              </Link>
            </article>
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
