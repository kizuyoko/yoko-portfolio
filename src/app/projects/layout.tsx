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

  const topProjects = projects.filter(projects => projects.topProject);
  const projectTitles = [...new Set(topProjects.map(project => project.title))];
  const SubMenuTitles = [...projectTitles, "Others"]

  return (
    <DefaultLayout>
      <SubMenu 
        title="Projects"
        items={SubMenuTitles}
        isProjects
      />
      {children}
    </DefaultLayout>
  );
}
