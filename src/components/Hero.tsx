"use client";

import { useEffect, useState } from "react";
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
  return (
    <div className="relative w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] flex items-center justify-center">
      {/* Outer dashed ring — slow reverse */}
      <div
        className="hero-orbit-ring-reverse absolute rounded-full border border-dashed dark:border-accent/30 border-accent/25"
        style={{
          width: "100%",
          height: "100%",
          animationDuration: "20s",
        }}
      />

      {/* Middle dashed ring — forward */}
      <div
        className="hero-orbit-ring absolute rounded-full border dark:border-primary/25 border-primary/20"
        style={{
          width: "82%",
          height: "82%",
          animationDuration: "14s",
          borderStyle: "dashed",
        }}
      />

      {/* Inner solid ring — slow forward */}
      <div
        className="hero-orbit-ring absolute rounded-full border dark:border-primary/15 border-primary/10"
        style={{
          width: "65%",
          height: "65%",
          animationDuration: "25s",
        }}
      />

      {/* Orbiting dots — outer ring */}
      <div
        className="hero-orbit-dot absolute"
        style={{
          width: 0,
          height: 0,
          top: "50%",
          left: "50%",
          animationName: "dot-orbit-1",
          animationDuration: "6s",
          "--orbit-radius": "170px",
        } as React.CSSProperties}
      >
        <span className="block w-2.5 h-2.5 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div
        className="hero-orbit-dot absolute"
        style={{
          width: 0,
          height: 0,
          top: "50%",
          left: "50%",
          animationName: "dot-orbit-2",
          animationDuration: "6s",
          "--orbit-radius": "170px",
        } as React.CSSProperties}
      >
        <span className="block w-2 h-2 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Orbiting dot — middle ring */}
      <div
        className="hero-orbit-dot absolute"
        style={{
          width: 0,
          height: 0,
          top: "50%",
          left: "50%",
          animationName: "dot-orbit-3",
          animationDuration: "8s",
          "--orbit-radius": "140px",
        } as React.CSSProperties}
      >
        <span className="block w-1.5 h-1.5 rounded-full dark:bg-white/50 bg-foreground/40 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Avatar circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 120 }}
        className="relative w-[55%] h-[55%] rounded-full overflow-hidden border-2 dark:border-primary/30 border-primary/25 shadow-2xl dark:shadow-primary/10"
      >
        <img
          src="/avatar.jpg"
          alt="Qadeer Afzal"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 50%" }}
        />
        <div className="absolute inset-0 rounded-full ring-1 ring-inset dark:ring-white/10 ring-black/5" />
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
                    text="Software engineer who loves building clean, scalable applications and solving real-world problems."
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
                  { value: "2024", label: "Graduate" },
                  { value: "5+", label: "Projects Built" },
                  { value: "SWE", label: "Software Engineer" },
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
