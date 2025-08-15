"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TopProjectThumbnail from "./ui/TopProjectThumbnail";
import { projects } from "@/data/projects";
import { Button } from "./ui/Button";
import { containerVariants, itemVariants } from "@/utils/animations";

export function AnimatedProjects () {
  const topProjects = projects.filter(projects => projects.topProject);
  
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 800); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h2 className="mt-6">Top Projects</h2>
      <motion.div
        className="grid w-full grid-cols-1 gap-4 pb-4 mt-2 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {topProjects.map((project, index) => (
          <motion.div 
            key={project.title} 
            variants={itemVariants}
            className="mb-0"
          >
            <TopProjectThumbnail 
              title={project.title}
              image={project.image}
              techStack={project.techStack}
              index={index}
            />
          </motion.div>
        ))}        
      
    </motion.div>
    {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4"
        >
          <Button
            href="/projects/other-projects"
            ariaLabel="Go to Other Projects"
            className="block sm:inline"
          >
            Other Projects
          </Button>
        </motion.div>
      )}
  </>  
  );
}
