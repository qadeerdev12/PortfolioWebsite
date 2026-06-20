"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Rocket } from "lucide-react";

const features = [
  {
    name: "Clean Code",
    description:
      "Writing readable, maintainable code. Focused on solid fundamentals and building good habits from the start.",
    icon: Code2,
  },
  {
    name: "Always Learning",
    description:
      "Actively upskilling through personal projects and courses. Picking up new tools and technologies to become a better engineer.",
    icon: Brain,
  },
  {
    name: "Team Player",
    description:
      "Eager to collaborate, take feedback, and contribute to a team. Bringing energy, curiosity, and a strong willingness to grow.",
    icon: Rocket,
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider">ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3">
            Building software{" "}
            <span className="dark:gradient-text gradient-text-light">that matters</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Software Engineer with a passion for problem-solving and writing
            clean code. Open to exploring different domains and technologies —
            always looking for opportunities to learn, build, and grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 card-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-3">{feature.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
