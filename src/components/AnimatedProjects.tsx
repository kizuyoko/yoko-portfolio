"use client";

import { motion } from "framer-motion";
import TopProjectThumbnail from "./ui/TopProjectThumbnail";
import { Title } from "@/components/ui/Title";
import { projects } from "@/data/projects";
import { Button } from "./ui/Button";
import { containerVariants, itemVariants } from "@/utils/animations";

export function AnimatedProjects () {
  const topProjects = projects.filter(projects => projects.topProject);

  return (
    <section>
      <Title>Projects</Title>
      <h2 className="mt-6">Top Projects</h2>
      <motion.div
        className="grid w-full grid-cols-1 gap-4 pb-4 mt-2 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {topProjects.map(project => (
          <motion.div 
            key={project.title} 
            variants={itemVariants}
            className="mb-0"
          >
            <TopProjectThumbnail 
              title={project.title}
              image={project.image}
              techStack={project.techStack}
            />
          </motion.div>
        ))}        
      <motion.div variants={itemVariants} className="mt-4 col-span-full">
        <Button
          href="/other-projects"
          ariaLabel="Go to Other Projects"
        >
          Other Projects
        </Button>
      </motion.div>
    </motion.div>
    </section>
  );
}
