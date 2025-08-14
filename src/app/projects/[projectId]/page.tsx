import { Metadata } from "next";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { slugify } from "@/utils/slugify";
import { AnimatedProject } from "@/components/AnimatedProject";

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
     <AnimatedProject
      title={project.title}
      image={project.image}
      techStack={project.techStack}
      demo={project.demo}
      github={project.github}
      description={project.description}
    />
  );
}
