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
          {index !== 0 && <hr />}
          <div className="flex flex-col w-full gap-4 pb-4 mt-2 sm:gap-8 sm:flex-row ">
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
              <motion.div
                className="flex flex-wrap gap-2 mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >{project.techStack.map((tech) => (
                <SkillItem key={tech} name={tech} />
              ))}
              </motion.div> 
              <div className="flex gap-4">
                <Button href={project.demo}>Demo</Button>
                <Button href={project.github}>GitHub</Button>
              </div>
            </div>
          </div>
          <p>{project.description}</p>    
        </motion.article>
      ))} 
    </motion.div>  

  );
}