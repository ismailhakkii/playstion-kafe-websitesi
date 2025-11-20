"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Spring animasyonu ile smooth hareket
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-secondary z-[9999] origin-left shadow-[0_0_20px_rgba(112,0,223,0.8)]"
      style={{ scaleX }}
    />
  );
}
