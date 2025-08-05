import { DefaultLayout } from "@/components/DefaultLayout";
import { Title } from "@/components/ui/Title";
import { SkillItem } from "@/components/ui/SkillItem";
import { skills } from "@/data/skills";

export const metadata = {
  title: "Skills - Yoko's Portfolio",
  description: "My skills and expertise in web development.",
};

export default function Home() {
  // Group skills by category
  const categories = [...new Set(skills.map(skill => skill.category))];
  const skillsByCategory = categories.map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category)
  }));

  return (
    <DefaultLayout>
      <aside className="sm:sticky sm:right-0 sm:max-w-1/4 sm:mr-8 sm:mt-8">
        <div className="sub-menu sm:sticky sm:top-8">
          <ul>
            {categories.map(category => (
            <li 
              key={category}
              className="mb-4 text-xl font-medium hover:underline"
            >
              <a href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}>{category}</a>
            </li>
            ))}
          </ul>
        </div>
      </aside>
      <section className="flex flex-col items-start flex-1 sm:m-8 m-4">
        <Title>
          Skills
        </Title>
        <div className="w-full mt-6 space-y-8">
          {skillsByCategory.map(({ category, skills }) => (
            <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="w-full">
              <h2
                id={`${category.toLowerCase().replace(/\s+/g, '-')}`}
              >{category}</h2>
              <ul className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <li key={skill.name}>
                    <SkillItem name={skill.name} icon={skill.image} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
