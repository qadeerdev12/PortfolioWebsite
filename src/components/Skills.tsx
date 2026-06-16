"use client";

import { motion } from "framer-motion";
import { Layout, Server, Wrench } from "lucide-react";
import { TechOrbit } from "./TechOrbit";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      "React.js", "Next.js", "TypeScript", "JavaScript",
      "Tailwind CSS", "Framer Motion", "Three.js", "HTML5", "CSS3",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js", "Express.js", "MongoDB", "PostgreSQL",
      "REST APIs", "GraphQL", "JWT Auth", "Mongoose",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: [
      "Git", "GitHub", "Docker", "Vercel",
      "Figma", "Jest", "Postman", "Agile",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider">SKILLS</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3">
            My{" "}
            <span className="dark:gradient-text gradient-text-light">toolbox</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Orbit visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 hidden md:flex items-center justify-center"
          >
            <TechOrbit />
          </motion.div>

          {/* Skill cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="rounded-2xl bg-card border border-border/50 overflow-hidden card-glow"
              >
                <div className="flex items-center gap-3 px-6 py-5 border-b border-border/50">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold tracking-wide">
                    {category.title}
                  </h3>
                </div>

                <div className="p-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
