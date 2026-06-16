"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

const projects = [
  {
    title: "Applyflow",
    description:
      "Full-stack MERN application for managing job applications. JWT authentication, interactive dashboards with analytics, and a modern SaaS-style UI.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Recharts"],
    github: "https://github.com/qadeerdev12/job-tracker-frontend",
    demo: "https://applyflow-one-ruby.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider">PROJECTS</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3">
            Featured{" "}
            <span className="dark:gradient-text gradient-text-light">work</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-card border border-border/50 p-8 md:p-10 hover:border-primary/30 transition-all duration-300 card-glow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-lg bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-border/50 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
                    aria-label="Live Demo"
                  >
                    Live Demo
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
