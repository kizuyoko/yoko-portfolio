'use client';

import { Button } from "@/components/ui/Button";
import { HomeLayout } from "@/components/HomeLayout";
import { Title } from "@/components/ui/Title";
import { SkillItem } from "@/components/ui/SkillItem";
import { skills } from "@/data/skills";
import { siteConfig } from "@/app/constants/site";
import { useEffect, useState } from "react";

const homeSkills = skills
  .filter(skill => skill.home)
  .sort((a, b) => (a.home || 0) - (b.home || 0))
  .slice(0, 5); // Limit to 5 skills for the home page

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  return (
    <HomeLayout className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}>
      <Title homeLayout>
        Welcome to <br className="sm:hidden" />My Portfolio!
      </Title>

      <div className="grid items-center justify-center grid-cols-5 gap-2 mb-6 sm:mt-4 sm:mb-10 sm:gap-8">
        {homeSkills.slice(0, 5).map(skill => (
          <SkillItem key={skill.name} name={skill.name} image={skill.image} home />
        ))}
      </div>
    
      <p>Hello, I&apos;m Yoko — a Frontend developer with nine years of experience, now focused on modern technologies like React, Vue, Next.js, and TypeScript.</p>
      <p className="py-4">I enjoy working closely with designers and backend engineers, and I thrive in agile environments where collaboration and balance are key.</p>
      
      <div className="flex flex-col items-center justify-center w-full gap-0 mt-6 sm:gap-4 sm:flex-row">
        {siteConfig.nav
          .filter(item => item.href !== "/")
          .map(({ name, href }) => (
            <Button key={href} href={href} ariaLabel={`Go to ${name} page`} className="w-full sm:w-auto">
              {name}
            </Button>
          ))}
      </div>
    </HomeLayout>
  );
}
