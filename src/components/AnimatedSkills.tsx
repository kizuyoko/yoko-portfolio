"use client";

import { motion, Variants } from "framer-motion";
import { SkillItem } from "@/components/ui/SkillItem";
import { Title } from "@/components/ui/Title";
import { skills } from "@/data/skills";

export function AnimatedSkills() {
  const categories = [...new Set(skills.map(skill => skill.category))];
  const skillsByCategory = categories.map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category)
  }));

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section className="flex flex-col items-start flex-1 m-4 sm:m-8">
      <Title>Skills</Title>
      <motion.div
        className="w-full mt-6 space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {skillsByCategory.map(({ category, skills }) => (
          <motion.div
            key={category}
            id={category.toLowerCase().replace(/\s+/g, '-')}
            variants={itemVariants}
          >
            <h2 className="mb-2 text-lg font-semibold">{category}</h2>
            <motion.ul
              className="flex flex-wrap gap-2"
              variants={containerVariants}
            >
              {skills.map(skill => (
                <motion.li key={skill.name} variants={itemVariants}>
                  <SkillItem name={skill.name} image={skill.image} darkInvert={skill.darkInvert} />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
