"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";
import { Button } from "./ui/Button";
import { containerVariants } from "@/utils/animations";
import { SkillItem } from "./ui/SkillItem";
import { Variants } from "framer-motion";

export default function AnimatedOtherProjects() {
  const otherProjects = projects.filter(projects => !projects.topProject);

  const localItemVariants: Variants = {
    hidden: (direction: "left" | "right") => ({
      opacity: 0,
      x: direction === "left" ? -50 : 50,
    }),
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col w-full gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {otherProjects.map((project, index) => (
        <motion.article
          key={project.title}
          variants={localItemVariants}
          custom={index % 2 === 0 ? "left" : "right"} 
          className="w-full"
        >
          <div className={`flex flex-col w-full gap-2 my-2 sm:gap-8  ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
            <h2 className="sm:hidden">{project.title}</h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src={`/projects/${project.image}`}
                alt={project.title}
                width="200"
                height="200"
                priority={index === 0}
                className="object-contain object-top"
              />
            </motion.div>  
            <div className="flex-1">
              <h2 className="hidden sm:block">{project.title}</h2>
              <motion.div
                className="flex flex-wrap gap-2 mt-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {
                  project.techStack.map((tech) => (
                    <SkillItem key={tech} name={tech} />
                  ))
                }
              </motion.div>  
              <p className="pt-4 pb-2">{project.description}</p>   
              <div className="flex gap-4">
                <Button href={project.demo}>Demo</Button>
                <Button href={project.github}>GitHub</Button>
              </div>
            </div>
          </div>  
          {index !== otherProjects.length - 1 && <hr />} 
        </motion.article>
      ))} 
    </motion.div>  

  );
}