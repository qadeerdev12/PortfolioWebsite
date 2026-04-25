"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Rocket } from "lucide-react";

const features = [
  {
    name: "Full-Stack Development",
    description: "Specializing in the MERN stack to build robust, scalable, and responsive web applications from end to end.",
    icon: Code2,
  },
  {
    name: "Problem Solving",
    description: "Approaching complex challenges with a logical mindset, finding efficient and elegant solutions to technical problems.",
    icon: Brain,
  },
  {
    name: "Real-World Impact",
    description: "Passionate about creating applications that solve real user needs and deliver exceptional user experiences.",
    icon: Rocket,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wider">
            About Me
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Passionate about building the web of tomorrow.
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I am a Software Engineer dedicated to crafting high-quality, modern web applications. 
            With a strong foundation in modern JavaScript frameworks and a keen eye for design, 
            I bridge the gap between aesthetic interfaces and robust backend architectures.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col rounded-2xl bg-card p-8 border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all group"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                    <feature.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
