"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export function Hero() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-5xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-mono text-sm tracking-wider">
              Available for work
            </span>
          </motion.div>

          {/* Heading with profile photo */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 md:gap-8">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] flex-1"
            >
            <span className="text-white">I build </span>
            <span className="relative">
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                digital
              </span>
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-violet-400/20 via-fuchsia-400/20 to-indigo-400/20 blur-xl rounded-lg -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              experiences
            </span>
            <span className="text-white/40">.</span>
          </motion.h1>
          
          {/* Profile photo */}
          <motion.div
            className="relative shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 rounded-full opacity-60 blur-md group-hover:opacity-80 transition-opacity" />
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/20">
              <Image
                src="/profile.jpg"
                alt="Filip Dimic"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/50 max-w-2xl font-light leading-relaxed"
          >
            Front-end developer with 6 years of experience crafting pixel-perfect, 
            responsive web applications with obsessive attention to detail.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-6"
          >
            {/* Remove ParallaxCard wrapper */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <svg
                className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform"
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
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full border border-white/20 text-white/80 font-semibold hover:bg-white/5 hover:border-white/30 transition-all"
            >
              Get in Touch
            </motion.a>
            
            <motion.a
              href="/Filip-Dimic-CV.pdf"
              download="Filip-Dimic-CV.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 font-semibold hover:bg-white/5 hover:border-white/30 transition-all"
            >
              <svg className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </motion.a>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div variants={itemVariants} className="pt-8 flex flex-wrap gap-3">
            {["React.js", "Next.js", "TypeScript", "JavaScript", "SCSS"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="px-4 py-2 text-sm font-medium text-white/60 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white/80 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

