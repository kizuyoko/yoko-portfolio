import { Metadata } from "next";
import { projects } from "@/data/projects";
import { Title } from "@/components/ui/Title";
import { notFound } from "next/navigation";
import { slugify } from "@/utils/slugify";

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
    </section>
  );
}
