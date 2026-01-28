import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Static background elements */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-transparent to-indigo-950/20" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Radial gradient spotlight */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px]"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(139, 92, 246, 0.08) 0%, transparent 60%)'
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <Hero />
        
        <section id="projects" className="py-12 md:py-16 scroll-mt-24">
          <div className="mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Featured Projects
            </h2>
            <p className="text-white/50 text-lg">
              A selection of my recent work and experiments
            </p>
          </div>
          
          <BentoGrid />
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 md:py-32 scroll-mt-24">
          <div className="mb-12 md:mb-16">
            <span className="text-violet-400 font-mono text-sm tracking-wider uppercase mb-4 block">
              Career
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent"> Experience</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl">
              My professional journey building web applications and digital products.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - visible on md+ */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-fuchsia-500/50 to-transparent" />

            <div className="space-y-8">
              <ExperienceCard
                company="Advivus LTD"
                role="Front End Developer"
                period="04.2023 - 05.2024"
                description="Advivus is the affiliate network dedicated to making Software as a Service (SaaS) and digital-based products sell. I’m responsible for developing and maintaining landing pages for affiliate marketing vendors."
                technologies={["HTML", "SCSS", "JavaScript", "TypeScript"]}
                isFirst
              />
              <ExperienceCard
                company="Huemor LLC"
                role="Front End Developer"
                period="02.2024 - 04.2024"
                description={[
                  "Create custom, editable modules for use in page templates",
                  "Translate static designs into interactive front-end experiences",
                  "Build reusable code and libraries for future use, optimization, and scalability",
                  "Ensure the technical feasibility of UI designs",
                  "Translate technical requirements and mockups into fully functioning websites using HTML/CSS/JS",
                  "Deliver maintainable and scalable code",
                  "Assist with the development of new client websites"
                ]}
                technologies={["HTML", "SCSS", "JavaScript", "TypeScript"]}
              />
              <ExperienceCard
                company="UpWork"
                role="Front End Developer"
                period="04 2019 - Present"
                description={[
                  "Profile link: https://www.upwork.com/o/profiles/users/~019adf1d4f2be03451/",
                  "An average score of 4.96",
                  "Experience with deciding the cost of the project and the time I need to finish it",
                  "Finding contacts for working on projects remotely and having an independent income",
                  "Communicating with people from all around the world and finding projects to work on"
                ]}
                technologies={["JavaScript", "React.js", "SCSS", "REST APIs"]}
              />
              <ExperienceCard
                company="Huemor LLC"
                role="WordPress developer"
                period="07.2022 - 02.2023"
                description={[
                  "Create custom, editable modules for use in page templates",
                  "Translate static designs into interactive front-end experiences",
                  "Build reusable code and libraries for future use, optimization, and scalability",
                  "Ensure the technical feasibility of UI designs",
                  "Translate technical requirements and mockups into fully functioning websites using HTML/CSS/JS",
                  "Deliver maintainable and scalable code",
                  "Assist with the development of new client websites"
                ]}
                technologies={["JavaScript", "WordPress", "SCSS", "Gutenberg Blocks"]}
              />
              <ExperienceCard
                company="DigiStore24 USA"
                role="Front End Developer"
                period="08 2020 - 04 2021"
                description="Digistore24 is an affiliate marketing platform, my position was vendor onboarding/front-end developer."
                technologies={["HTML", "SCSS", "JavaScript", "TypeScript"]}
              />
              <ExperienceCard
                company="Web Etiketa"
                role="Front End Developer"
                period="08 2020 - 04 2021"
                description={[
                  "Working closely with a team of designers and Back-End Developers",
                  "Familiar with cooperation with big companies like High Times",
                  "Had responsibility and liability for the projects I worked on"
                ]}
                technologies={["HTML", "SCSS", "JavaScript", "TypeScript"]}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-violet-400 font-mono text-sm tracking-wider uppercase mb-4 block">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Turning ideas into
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent"> reality</span>
              </h2>
              <div className="space-y-5 text-lg text-white/60 leading-relaxed">
                <p>
                  With six years of front-end development under my belt, I specialize in 
                  building modern web applications that look flawless on every device. My 
                  toolkit includes React, Next.js, and TypeScript — technologies I use daily 
                  to transform designs into performant, pixel-perfect experiences.
                </p>
                <p>
                  I&apos;m driven by the details: smooth animations, clean code, and interfaces 
                  that just <em className="text-white/80 not-italic">feel</em> right. Currently 
                  based in Serbia, I work with teams worldwide to bring digital products to life.
                </p>
                <p>
                  Always learning, always building.
          </p>
        </div>
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              <SkillCard 
                title="Frontend" 
                icon="🎨"
                skills={["React.js", "Next.js", "TypeScript", "JavaScript"]} 
              />
              <SkillCard 
                title="Styling" 
                icon="✨"
                skills={["CSS", "SASS/SCSS", "Tailwind", "Responsive"]} 
              />
              <SkillCard 
                title="Build Tools" 
                icon="⚡"
                skills={["NPM", "WebPack", "Gulp", "Git"]} 
              />
              <SkillCard 
                title="Tools" 
                icon="🛠️"
                skills={["Figma", "Docker", "Bash", "Notion"]} 
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 scroll-mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600/10 via-fuchsia-600/5 to-indigo-600/10 border border-white/10 p-12 md:p-16">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl" />
            
            <div className="relative text-center max-w-2xl mx-auto">
              <span className="text-violet-400 font-mono text-sm tracking-wider uppercase mb-4 block">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s build something
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent"> amazing</span>
              </h2>
              <p className="text-lg text-white/60 mb-10">
                Have a project in mind? I&apos;d love to hear about it. 
                Let&apos;s discuss how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:filipd815@gmail.com"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg shadow-white/10"
          >
                  Send an Email
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
          </a>
          <a
                  href="https://www.linkedin.com/in/filip-dimi%C4%87-813a0218a/"
            target="_blank"
            rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all"
                >
                  LinkedIn
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center">
          <div className="flex items-center justify-center gap-8 mb-6">
            <a href="https://github.com/Filipd815" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/filip-dimi%C4%87-813a0218a/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:filipd815@gmail.com" className="text-white/40 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
          <p className="text-white/30 text-sm">
            © 2024 Filip Dimic. Crafted with Next.js & Framer Motion.
          </p>
        </footer>
        </div>
      </main>
  );
}

function SkillCard({ title, icon, skills }: { title: string; icon: string; skills: string[] }) {
  return (
    <div className="group p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="text-xs text-white/50 bg-white/5 px-2.5 py-1 rounded-md group-hover:text-white/70 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ 
  company, 
  role, 
  period, 
  description, 
  technologies,
  isFirst = false 
}: { 
  company: string; 
  role: string; 
  period: string; 
  description: string | string[]; 
  technologies: string[];
  isFirst?: boolean;
}) {
  // Check if description is a list (array) or text (string)
  const isList = Array.isArray(description);
  
  return (
    <div className="relative md:pl-20">
      {/* Timeline dot - visible on md+ */}
      <div className="hidden md:flex absolute left-8 top-6 w-5 h-5 items-center justify-center -translate-x-1/2">
        <div className={`w-3 h-3 rounded-full ${isFirst ? 'bg-violet-500' : 'bg-white/30'}`} />
        {isFirst && (
          <div className="absolute w-5 h-5 rounded-full bg-violet-500/30 animate-ping" />
        )}
      </div>

      <div className="group p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white group-hover:text-violet-300 transition-colors">
              {role}
            </h3>
            <p className="text-violet-400 font-medium">{company}</p>
          </div>
          <span className="text-white/40 font-mono text-sm shrink-0">{period}</span>
        </div>
        
        <div className="text-white/60 leading-relaxed mb-5">
          {isList ? (
            <ul className="space-y-2 list-none">
              {description.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-violet-400 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-full group-hover:text-white/70 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
