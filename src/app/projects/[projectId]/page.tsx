import { Metadata } from "next";
import { projects } from "@/data/projects";
import { Title } from "@/components/ui/Title";
import { notFound } from "next/navigation";
import { slugify } from "@/utils/slugify";
import Image from 'next/image';
import { Button } from "@/components/ui/Button";
import { SkillItem } from "@/components/ui/SkillItem";
import { image } from "framer-motion/client";
import { skills } from "@/data/skills";

type ProjectPageProps = {
  params: Promise<{ projectId: string }>;
}

type ProjectPageParams = {
  projectId: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<ProjectPageParams>;
}): Promise<Metadata> {
  const { projectId } = await params;
  const project = projects.find((p) => slugify(p.title) === projectId);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Yoko's Portfolio`,
    description: `Details about ${project.title}, built with ${project.techStack.join(
      ", "
    )}.`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = projects.find((p) => slugify(p.title) === projectId);

  if (!project) {
    notFound();
  }

  return (
    <section>
      <Title>{project.title}</Title>
      <Image 
        src={`/projects/${project.image}`}
        width={640}
        height={445}
        alt={project.title}
        priority
        className="my-2 shadow sm:my-6"
      />
      <div className="flex flex-wrap gap-2 mt-2">
        {project.techStack.map((tech) => (
          <SkillItem key={tech} name={tech} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 my-6">
        <Button 
          href={project.demo}
          ariaLabel={`Demo of ${project.title}`}
        >Demo</Button>
        <Button 
          href={project.github}
          ariaLabel={`Demo of ${project.title}`}
        >GitHub</Button>
      </div>
      {
        typeof project.description === "string" ?
          (<p>{project.description}</p>)
        : (
          <>
            {project.description}
          </>
        )  
      }
    </section>
  );
}
