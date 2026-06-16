"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "Bondi Beauty",
    period: "Jun 2023 — Oct 2023",
    description:
      "Scaled and developed brand's existing website. Optimised for better user experience, performance and conversion rates. Implemented new features and resolved bugs.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider">EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3">
            Career{" "}
            <span className="dark:gradient-text gradient-text-light">path</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-card border border-border/50 p-8 md:p-10 hover:border-primary/30 transition-all duration-300 card-glow"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-48 shrink-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-mono mb-3">
                    <Briefcase className="w-3 h-3" />
                    {exp.period}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {exp.company}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
