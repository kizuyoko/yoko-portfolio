"use client";

import { motion, Variants } from "framer-motion";
import TopProjectThumbnail from "./ui/TopProjectThumbnail";
import { Title } from "@/components/ui/Title";
import { projects } from "@/data/projects";
import { Button } from "./ui/Button";

export function AnimatedProjects () {
  const topProjects = projects.filter(projects => projects.topProject);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section>
      <Title>Projects</Title>
      <h2 className="mt-6">Top Projects</h2>
      <motion.div
        className="grid w-full grid-cols-1 gap-4 pb-4 mt-2 space-y-8 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {topProjects.map(project => (
          <motion.div 
            key={project.title} 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
            className="mb-0"
          >
            <TopProjectThumbnail 
              title={project.title}
              image={project.image}
              techStack={project.techStack}
            />
          </motion.div>
        ))}        
      </motion.div>
      <Button
          href="/other-projects"
          ariaLabel="Go to Other Projects"
        >
          Other Projects
        </Button>
    </section>
  );
}
