"use client";

import { motion } from "framer-motion";
import { SkillItem } from "@/components/ui/SkillItem";
import { skills } from "@/data/skills";
import { slugify } from "@/utils/slugify";
import { containerVariants, itemVariants } from "@/utils/animations";

export function AnimatedSkills() {
  const categories = [...new Set(skills.map(skill => skill.category))];
  const skillsByCategory = categories.map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category)
  }));

  return (
    <motion.div
      className="w-full mt-6 space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {skillsByCategory.map(({ category, skills }) => (
        <motion.div
          key={slugify(category)}
          id={slugify(category)}
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
  );
}
