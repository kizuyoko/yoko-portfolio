"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";
import { Button } from "./ui/Button";
import { containerVariants, itemVariants } from "@/utils/animations";
import { SkillItem } from "./ui/SkillItem";

export default function AnimatedOtherProjects() {
  const otherProjects = projects.filter(projects => !projects.topProject);


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
          variants={itemVariants}
          className="w-full"
        >
          { index !== 0 && <hr /> }
          <div className={`flex flex-col w-full gap-2 pb-4 mt-2 sm:gap-8  ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
            <h2 className="sm:hidden">{project.title}</h2>
            <Image 
              src={`/projects/${project.image}`}
              alt={project.title}
              width="200"
              height="200"
              priority={index === 0}
            />
            <div className="flex-1">
              <h2 className="hidden sm:block">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mt-2"
              >{project.techStack.map((tech) => (
                <SkillItem key={tech} name={tech} />
              ))}
              </div>
              <p className="pt-4 pb-2">{project.description}</p>   
              <div className="flex gap-4">
                <Button href={project.demo}>Demo</Button>
                <Button href={project.github}>GitHub</Button>
              </div>
            </div>
          </div>    
        </motion.article>
      ))} 
    </motion.div>  

  );
}