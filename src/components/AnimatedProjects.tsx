"use client";

import { motion, Variants } from "framer-motion";
import { SkillItem } from "@/components/ui/SkillItem";
import { Title } from "@/components/ui/Title";
import { projects } from "@/data/projects";
import { slugify } from "@/utils/slugify";

export function AnimatedSkills() {
  const topProjects = projects.filter(projects => projects.topProject);

}