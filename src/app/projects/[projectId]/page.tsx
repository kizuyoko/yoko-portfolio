import { projects } from "@/data/projects";
import { Title } from "@/components/ui/Title";
import { notFound } from "next/navigation";
import { slugify } from "@/utils/slugify";

type ProjectPageProps = {
  params: Promise<{ projectId: string }>;
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