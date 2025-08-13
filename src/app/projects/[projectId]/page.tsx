import { projects } from "@/data/projects";
import { Title } from "@/components/ui/Title";
import { notFound } from "next/navigation";
import { slugify } from "@/utils/slugify";

type ProjectPageProps = {
  params: { projectId: string };
}

export default function ProjecPage({ params }: ProjectPageProps) {
  const project = projects.find(p => slugify(p.title) === params.projectId);

  if (!project) {
    notFound();
  }

  return (
    <section>
      <Title>{project.title}</Title>
    </section>
  );
}