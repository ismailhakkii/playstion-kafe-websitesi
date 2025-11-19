"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function MouseTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Her mouse hareketinde yeni parçacık ekle
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev, newParticle]);

      // 1 saniye sonra parçacığı kaldır
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* ANA MOUSE CURSOR */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePos.x - 10,
          y: mousePos.y - 10,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyber-primary to-cyber-accent opacity-60 blur-sm"></div>
      </motion.div>

      {/* MOUSE İZİ PARTİKÜLLERİ */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-[9998]"
            initial={{
              x: particle.x - 4,
              y: particle.y - 4,
              scale: 1,
              opacity: 1,
            }}
            animate={{
              scale: 0,
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyber-secondary to-cyber-accent shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* HALO EFEKTİ (MOUSE ÇEVRES) */}
      <motion.div
        className="fixed pointer-events-none z-[9997] mix-blend-screen"
        animate={{
          x: mousePos.x - 30,
          y: mousePos.y - 30,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
        }}
      >
        <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-cyber-primary/20 to-cyber-accent/20 blur-xl"></div>
      </motion.div>
    </>
  );
}
