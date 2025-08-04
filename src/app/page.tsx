import { Button } from "@/components/ui/Button";
import { HomeLayout } from "@/components/HomeLayout";
import { Title } from "@/components/ui/Title";
import { SkillItem } from "@/components/ui/SkillItem";
import { skills } from "@/data/skills";
import { siteConfig } from "@/app/constants/site";

const homeSkills = skills
  .filter(skill => skill.home)
  .sort((a, b) => (a.home || 0) - (b.home || 0))
  .slice(0, 5); // Limit to 5 skills for the home page

export default function Home() {
  return (
    <HomeLayout>
      <Title homeLayout>
        Welcome to My Portfolio!
      </Title>
      <div className="flex flex-col items-center justify-center gap-6 mb-8 sm:flex-row">
        <div className="hidden sm:grid sm:grid-cols-5 sm:gap-8">
          {homeSkills.slice(0, 5).map(skill => (
            <SkillItem key={skill.id} name={skill.name} icon={skill.image} home />
          ))}
        </div>
        <div className="flex flex-wrap justify-center grid-cols-3 gap-1 sm:hidden">
          {homeSkills.slice(0, 5).map(skill => (
            <SkillItem key={skill.id} name={skill.name} icon={skill.image} home />
          ))}
        </div>
      </div>
      <p>Hello, I&apos;m Yoko — a Frontend developer with nine years of experience, now focused on modern technologies like React, Vue, Next.js, and TypeScript.</p>
      <p className="py-4">I enjoy working closely with designers and backend engineers, and I thrive in agile environments where collaboration and balance are key.</p>
      <div className="flex flex-col items-center justify-center gap-4 mt-6 sm:flex-row ">
        {siteConfig.nav
          .filter(item => item.href !== "/")
          .map(({ name, href }) => (
            <Button key={href} href={href} ariaLabel={`Go to ${name} page`}>
              {name}
            </Button>
          ))}
      </div>
    </HomeLayout>
  );
}
