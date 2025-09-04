"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SkillItem } from "@/components/ui/SkillItem";
import { Title } from "@/components/ui/Title";
import { ReactNode } from "react";

type AnimatedProjectProps = {
  title: string;
  image: string;
  techStack: string[];
  demo: string;
  github: string;
  description: string | ReactNode;
};

export const AnimatedProject = ({
  title,
  image,
  techStack,
  demo,
  github,
  description,
}: AnimatedProjectProps) => {
  return (
    <motion.section
      className="space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Title>{title}</Title>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <a 
          href={demo}
          aria-label={`View demo of ${title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Image
            src={`/projects/${image}`}
            width={640}
            height={445}
            alt=""
          />
        </a>
      </motion.div>
      <motion.div
        className="flex flex-wrap gap-2 mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {techStack.map((tech) => (
          <SkillItem key={tech} name={tech} />
        ))}
      </motion.div>
      <motion.div
        className="flex items-center justify-center gap-2 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <Button href={demo} ariaLabel={`Demo of ${title}`}>
          Demo
        </Button>
        <Button href={github} ariaLabel={`GitHub of ${title}`}>
          GitHub
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {typeof description === "string" ? <p>{description}</p> : description}
      </motion.div>
        
    </motion.section>
  );
};
