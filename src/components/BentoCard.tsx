"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cardVariants, hoverVariants } from "@/lib/animations";
import type { Project } from "@/lib/projects";

interface BentoCardProps {
  project: Project;
}

const sizeClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  large: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
  wide: "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
  tall: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
};

export function BentoCard({ project }: BentoCardProps) {
  const isLarge = project.size === "large" || project.size === "tall";

  return (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      className={`${sizeClasses[project.size]} relative`}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <motion.div
          variants={hoverVariants}
          className="relative h-full min-h-[180px] md:min-h-[200px] overflow-hidden rounded-2xl p-6 flex flex-col justify-between shadow-lg shadow-black/20 cursor-pointer group"
          style={{
            background: `linear-gradient(to bottom right, ${project.color.from}, ${project.color.to})`,
          }}
        >
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Shine effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
            style={{ skewX: "-15deg" }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {project.image ? (
              <div className="relative w-full mb-3 rounded-lg overflow-hidden grow flex">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={220}
                  height={220}
                  className="object-contain max-w-[220px] w-full mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t" />
              </div>
            ) : project.icon ? (
              <span className="text-3xl md:text-4xl mb-3 block drop-shadow-lg">
                {project.icon}
              </span>
            ) : null}
            <h3 className={`font-bold text-white mb-2 ${isLarge ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
              {project.title}
            </h3>
            <p className={`text-white/80 line-clamp-2 ${isLarge ? "text-base md:text-lg" : "text-sm"}`}>
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="relative z-10 flex flex-wrap gap-2 mt-4">
            {project.tags.slice(0, isLarge ? 4 : 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hover arrow */}
          <motion.div
            className="absolute bottom-4 right-4 text-white/60"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
          >
            <svg
              className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

