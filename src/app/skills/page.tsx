import { DefaultLayout } from "@/components/DefaultLayout";
import { skills } from "@/data/skills";
import { SubMenu } from "@/components/ui/SubMenu";
import { AnimatedSkills } from "@/components/AnimatedSkills";
import { Title } from "@/components/ui/Title";

export const metadata = {
  title: "Skills - Yoko's Portfolio",
  description: "My skills and expertise in web development.",
};

export default function Skill() {
  // Group skills by category
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <DefaultLayout>
      <SubMenu 
        title="Skills"
        items={categories}
      />
      <section>
        <Title>Skills</Title>
        <AnimatedSkills />
      </section>
    </DefaultLayout>
  );
}
