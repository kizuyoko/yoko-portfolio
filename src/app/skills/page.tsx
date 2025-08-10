import { DefaultLayout } from "@/components/DefaultLayout";
import { skills } from "@/data/skills";
import { SubMenu } from "@/components/ui/SubMenu";
import { AnimatedSkills } from "@/components/AnimatedSkills";

export const metadata = {
  title: "Skills - Yoko's Portfolio",
  description: "My skills and expertise in web development.",
};

export default function Skill() {
  // Group skills by category
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <DefaultLayout>
      <SubMenu>
        <input type="checkbox" id="submenu-toggle" className="hidden peer" />
        <label htmlFor="submenu-toggle" className="cursor-pointer sm:hidden">
          <h3>Skills </h3>
        </label>
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
      </SubMenu>
      <AnimatedSkills />
    </DefaultLayout>
  );
}
