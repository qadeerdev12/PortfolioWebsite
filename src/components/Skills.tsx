"use client";

import { motion } from "framer-motion";
import { Layout, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", 
      "Tailwind CSS", "Framer Motion", "Three.js", "HTML5", "CSS3"
    ]
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js", "Express.js", "MongoDB", "PostgreSQL", 
      "RESTful APIs", "GraphQL", "Authentication", "Mongoose"
    ]
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: [
      "Git", "GitHub", "Docker", "Vercel", 
      "Figma", "Jest", "Postman", "Agile/Scrum"
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:text-center mb-16"
        >
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wider">
            Technical Skills
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Toolbox
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A comprehensive list of the technologies and tools I use to build modern, scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
