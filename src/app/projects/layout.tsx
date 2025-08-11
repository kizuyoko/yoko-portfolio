import { DefaultLayout } from "@/components/DefaultLayout";
import { projects } from "@/data/projects";
import { SubMenu } from "@/components/ui/SubMenu";

export const metadata = {
  title: "Projects - Yoko's Portfolio",
  description: "My projects and works in web development.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const titles = [...new Set(projects.map(project => project.title))];

  return (
    <DefaultLayout>
      <SubMenu 
        title="Projects"
        items={titles}
        isProjects
      />
      {children}
    </DefaultLayout>
  );
}
