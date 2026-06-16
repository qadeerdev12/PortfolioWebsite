"use client";

import { useEffect, useRef } from "react";

export function CursorBlob() {
  const blobRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const blobPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const visible = useRef(false);
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible.current) {
        visible.current = true;
        blobPos.current = { x: e.clientX, y: e.clientY };
        ringPos.current = { x: e.clientX, y: e.clientY };
        if (blobRef.current) blobRef.current.style.opacity = "1";
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onLeave = () => {
      visible.current = false;
      if (blobRef.current) blobRef.current.style.opacity = "0";
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const animate = () => {
      blobPos.current.x += (target.current.x - blobPos.current.x) * 0.12;
      blobPos.current.y += (target.current.y - blobPos.current.y) * 0.12;
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.15;
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${blobPos.current.x}px, ${blobPos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Center dot — follows cursor exactly */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10001] hidden md:block opacity-0 transition-opacity duration-300"
        style={{ willChange: "transform" }}
      >
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>

      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block opacity-0 transition-opacity duration-300"
        style={{ willChange: "transform" }}
      >
        <div className="w-8 h-8 rounded-full border-[1.5px] dark:border-primary/60 border-primary/50" />
      </div>

      {/* Ambient gradient blob */}
      <div
        ref={blobRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block opacity-0 transition-opacity duration-300"
        style={{ willChange: "transform" }}
      >
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 rounded-full dark:bg-[radial-gradient(circle,rgba(0,255,255,0.18)_0%,rgba(102,126,234,0.1)_40%,transparent_70%)] bg-[radial-gradient(circle,rgba(8,145,178,0.15)_0%,rgba(79,70,229,0.08)_40%,transparent_70%)] blur-2xl" />
        </div>
      </div>
    </>
  );
}
