"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sphere, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function AnimatedShape({
  position,
  color,
  scale,
  type,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  type: "sphere" | "icosahedron";
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      {type === "sphere" ? (
        <Sphere ref={meshRef} args={[1, 32, 32]} position={position} scale={scale}>
          <meshStandardMaterial
            color={color}
            wireframe
            transparent
            opacity={0.15}
          />
        </Sphere>
      ) : (
        <Icosahedron ref={meshRef} args={[1, 0]} position={position} scale={scale}>
          <meshStandardMaterial
            color={color}
            wireframe
            transparent
            opacity={0.15}
          />
        </Icosahedron>
      )}
    </Float>
  );
}

export function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-background">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        
        {/* Abstract floating shapes */}
        <AnimatedShape position={[-5, 2, -2]} color="#8b5cf6" scale={2} type="icosahedron" />
        <AnimatedShape position={[6, -3, -5]} color="#3b82f6" scale={3} type="sphere" />
        <AnimatedShape position={[-6, -4, -3]} color="#ec4899" scale={1.5} type="icosahedron" />
        <AnimatedShape position={[4, 5, -8]} color="#8b5cf6" scale={2.5} type="sphere" />
      </Canvas>
    </div>
  );
}
