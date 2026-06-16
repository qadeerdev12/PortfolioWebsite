"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";

function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 25);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, startTyping, text]);

  return (
    <span className="inline">
      {displayText}
      <span className="inline-block w-[2px] h-[1.1em] bg-primary align-middle ml-0.5 animate-pulse" />
    </span>
  );
}

function HeroAvatar() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  return (
    <div
      className="relative w-[300px] h-[360px] sm:w-[340px] sm:h-[400px] md:w-[380px] md:h-[440px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "800px" }}
    >
      {/* Back card 2 — gradient accent */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20"
        animate={{
          rotateY: mousePos.x * 8,
          rotateX: -mousePos.y * 8,
          x: mousePos.x * -15,
          y: mousePos.y * -15,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        style={{
          transformStyle: "preserve-3d",
          top: "16px",
          left: "16px",
          right: "-16px",
          bottom: "-16px",
        }}
      />

      {/* Back card 1 — primary gradient */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20"
        animate={{
          rotateY: mousePos.x * 10,
          rotateX: -mousePos.y * 10,
          x: mousePos.x * -8,
          y: mousePos.y * -8,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        style={{
          transformStyle: "preserve-3d",
          top: "8px",
          left: "8px",
          right: "-8px",
          bottom: "-8px",
        }}
      />

      {/* Main card — avatar */}
      <motion.div
        className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-border/50 bg-card shadow-2xl dark:shadow-primary/5"
        animate={{
          rotateY: mousePos.x * 15,
          rotateX: -mousePos.y * 15,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src="/avatar.jpg"
          alt="Qadeer Afzal"
          className="w-full h-full object-cover"
        />

        {/* Shine overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
          animate={{
            opacity: Math.abs(mousePos.x) + Math.abs(mousePos.y) > 0.05 ? 1 : 0,
            x: `${mousePos.x * 100}%`,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
        />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Name tag */}
        <div
          className="absolute bottom-4 left-4 right-4"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="text-white text-sm font-semibold tracking-wide drop-shadow-lg">
            Qadeer Afzal
          </div>
          <div className="text-white/60 text-xs mt-0.5">
            Full-Stack Developer
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left — Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-sm text-muted-foreground"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for opportunities
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
              >
                <span className="block">Hi, I&apos;m</span>
                <span className="block dark:gradient-text gradient-text-light">Qadeer Afzal</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="max-w-xl mx-auto lg:mx-0"
              >
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  <TypeWriter
                    text="Full-stack developer crafting fast, scalable web applications with modern technologies."
                    delay={800}
                  />
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-4"
              >
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 border border-border text-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  Download CV
                  <Download className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.6 }}
                className="flex justify-center lg:justify-start gap-16 pt-10"
              >
                {[
                  { value: "2+", label: "Years Experience" },
                  { value: "10+", label: "Projects Built" },
                  { value: "MERN", label: "Core Stack" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right — Avatar animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 hidden md:flex items-center justify-center"
          >
            <HeroAvatar />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
}
