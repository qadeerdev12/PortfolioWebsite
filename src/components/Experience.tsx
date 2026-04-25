"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "Bondi Beauty",
    period: "2023 (June) - 2023 (Oct)",
    description: "Scaled and developed brand's existing website and optimised it for better user experience, performance and conversion rates. Worked on implementing new features and fixing bugs.",
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 bg-muted/30 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:text-center mb-16"
        >
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wider">
            Career Journey
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Professional Experience
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl relative" ref={containerRef}>
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-border overflow-hidden">
            <motion.div
              className="absolute top-0 w-full bg-primary"
              style={{ height, transformOrigin: "top" }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start justify-between group">

                {/* Timeline dot */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 mt-6 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:bg-primary transition-colors duration-300">
                  <Briefcase className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content - Left side on desktop for even indices, right side for odd */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`w-full md:w-[calc(50%-40px)] pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-10 md:text-right" : "md:ml-auto md:pl-10"
                    }`}
                >
                  <div className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
                    <div className={`flex items-center gap-2 text-sm text-primary font-medium mb-2 ${index % 2 === 0 ? "md:justify-end" : ""
                      }`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <h4 className="text-lg text-muted-foreground mb-4">{exp.company}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
