"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { slideUpVariants, containerVariants, cardVariants } from "@/lib/animations";
import { ParallaxCard } from "@/components/ParallaxCard";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params.slug === "string" ? params.slug : params.slug?.[0] || "";
  const project = getProject(slug);

  // Handle Escape key to go back to projects
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.push("/#projects");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-violet-400 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            background: `linear-gradient(to bottom right, ${project.color.from}, ${project.color.to})`,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 py-12">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          className="mb-16"
        >
          <ParallaxCard className="mb-8">
            <div
              className="relative rounded-3xl flex items-center justify-center overflow-hidden"
              style={{
                background: `linear-gradient(to bottom right, ${project.color.from}, ${project.color.to})`,
              }}
            >
              {project.bannerImage ? (
                <div className="relative w-full">
                  <Image
                    src={project.bannerImage}
                    alt={`${project.title} - Banner`}
                    width={1200}
                    height={600}
                    className="object-contain w-full h-auto"
                    priority
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              ) : project.icon ? (
                <div className="py-16 md:py-20">
                  <span className="text-8xl md:text-9xl drop-shadow-2xl">{project.icon}</span>
                </div>
              ) : null}
              
              {/* Decorative elements */}
              <div className="absolute inset-0 pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-2xl pointer-events-none" />
            </div>
          </ParallaxCard>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium border border-white/20 rounded-full"
                style={{
                  background: `linear-gradient(to right, ${project.color.from}, ${project.color.to})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-white/70 max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
              >
                Visit Website
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Source Code
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Project details */}
        {project.content && (
          <motion.section
            initial="hidden"
            animate="visible"
            variants={slideUpVariants}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6">About This Project</h2>
            <div className="prose prose-invert max-w-none">
              {Array.isArray(project.content) ? (
                project.content.map((paragraph, index) => (
                  <p key={index} className={`text-white/70 text-lg leading-relaxed ${index > 0 ? 'mt-4' : ''}`}>
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-white/70 text-lg leading-relaxed">
                  {project.content}
                </p>
              )}
            </div>
          </motion.section>
        )}

        {/* Other projects */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <h2 className="text-2xl font-bold text-white mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((p) => (
              <motion.div key={p.id} variants={cardVariants}>
                <Link href={`/projects/${p.slug}`} className="block group">
                  <div
                    className="relative h-40 rounded-2xl p-4 flex flex-col justify-between overflow-hidden transition-transform group-hover:scale-[1.02]"
                    style={{
                      background: `linear-gradient(to bottom right, ${p.color.from}, ${p.color.to})`,
                    }}
                  >
                    {p.image ? (
                      <div className="absolute inset-0">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-contain opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    ) : p.icon ? (
                      <span className="text-3xl">{p.icon}</span>
                    ) : null}
                    <div className="relative z-10">
                      <h3 className="font-bold text-white">{p.title}</h3>
                      <p className="text-white/70 text-sm line-clamp-1">{p.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}

