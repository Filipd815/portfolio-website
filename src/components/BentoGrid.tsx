"use client";

import { motion } from "framer-motion";
import { containerVariants } from "@/lib/animations";
import { projects } from "@/lib/projects";
import { BentoCard } from "./BentoCard";

export function BentoGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-fr"
    >
      {projects.map((project) => (
        <BentoCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
}

