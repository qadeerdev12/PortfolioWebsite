"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Sphere } from "@react-three/drei";
import * as THREE from "three";

const skills = [
  { name: "React.js", color: "#61dafb" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Node.js", color: "#68a063" },
  { name: "MongoDB", color: "#4db33d" },
  { name: "Express.js", color: "#a855f7" },
  { name: "Tailwind CSS", color: "#06b6d4" },
  { name: "Three.js", color: "#ffffff" },
  { name: "Docker", color: "#2496ed" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "GraphQL", color: "#e10098" },
  { name: "Git", color: "#f05032" },
  { name: "Framer Motion", color: "#bb44ee" },
  { name: "REST APIs", color: "#a855f7" },
  { name: "JavaScript", color: "#f0db4f" },
  { name: "Mongoose", color: "#880000" },
];

function fibonacciPoint(n: number, total: number, radius: number): [number, number, number] {
  const phi = Math.acos(1 - (2 * n) / (total - 1));
  const theta = Math.PI * (1 + Math.sqrt(5)) * n;
  return [
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
}

function GlobeScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central wireframe sphere */}
      <Sphere args={[2.2, 24, 24]}>
        <meshStandardMaterial
          color="#7c3aed"
          wireframe
          transparent
          opacity={0.12}
        />
      </Sphere>

      {/* Inner glow sphere */}
      <Sphere args={[2.0, 16, 16]}>
        <meshStandardMaterial
          color="#a855f7"
          emissive="#5b21b6"
          emissiveIntensity={0.3}
          transparent
          opacity={0.05}
        />
      </Sphere>

      {/* Skill labels at fibonacci sphere points */}
      {skills.map((skill, i) => {
        const position = fibonacciPoint(i, skills.length, 3.4);
        return (
          <Html key={skill.name} position={position} center>
            <div
              style={{
                background: `${skill.color}18`,
                border: `1px solid ${skill.color}50`,
                borderRadius: "20px",
                padding: "3px 10px",
                fontSize: "11px",
                color: skill.color,
                fontWeight: "600",
                whiteSpace: "nowrap",
                backdropFilter: "blur(4px)",
                pointerEvents: "none",
                userSelect: "none",
                fontFamily: "system-ui, sans-serif",
                boxShadow: `0 0 10px ${skill.color}30`,
              }}
            >
              {skill.name}
            </div>
          </Html>
        );
      })}
    </group>
  );
}

export function SkillsGlobe() {
  return (
    <div className="w-full h-full min-h-[420px]">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#a855f7" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#06b6d4" />

        <GlobeScene />
      </Canvas>
    </div>
  );
}
