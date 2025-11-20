"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Gamepad2 } from "lucide-react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animasyonu
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] bg-cyber-black flex items-center justify-center"
        >
          {/* ANIMATED BACKGROUND */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-primary/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyber-accent/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 text-center">
            {/* LOGO */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-8 inline-block"
            >
              <div className="bg-gradient-to-tr from-cyber-primary to-cyber-accent p-6 rounded-2xl shadow-[0_0_50px_rgba(112,0,223,0.5)]">
                <Gamepad2 size={64} className="text-white" />
              </div>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-4 tracking-tighter"
            >
              CODE<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-accent">BROS</span>
            </motion.h1>

            {/* LOADING TEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 mb-8 font-mono text-sm"
            >
              SYSTEM INITIALIZING<span className="animate-pulse">...</span>
            </motion.p>

            {/* PROGRESS BAR */}
            <div className="w-80 mx-auto">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-secondary rounded-full shadow-[0_0_20px_rgba(112,0,223,0.8)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-cyber-secondary font-mono text-xs mt-2">{progress}%</p>
            </div>

            {/* GLITCH TEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xs text-gray-600 mt-8 font-mono"
            >
              PREPARING YOUR GAMING EXPERIENCE
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
