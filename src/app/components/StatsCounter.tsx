"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Trophy, Gamepad2, Star } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

function StatItem({ icon, value, suffix, label, color }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 saniye
      const increment = value / (duration / 16); // 60 FPS

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="glass-panel p-8 rounded-2xl text-center border-t-4 border-cyber-primary/50 hover:border-cyber-accent transition-all group"
    >
      <div className={`${color} mb-4 inline-block transform group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-accent">
        {count}{suffix}
      </div>
      <p className="text-gray-400 font-bold text-sm">{label}</p>
    </motion.div>
  );
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-12">
      <StatItem
        icon={<Users size={48} />}
        value={1250}
        suffix="+"
        label="Mutlu Oyuncu"
        color="text-cyan-400"
      />
      <StatItem
        icon={<Trophy size={48} />}
        value={87}
        suffix="+"
        label="Düzenlenen Turnuva"
        color="text-yellow-400"
      />
      <StatItem
        icon={<Gamepad2 size={48} />}
        value={50}
        suffix="+"
        label="Oyun Çeşidi"
        color="text-purple-400"
      />
      <StatItem
        icon={<Star size={48} />}
        value={98}
        suffix="%"
        label="Müşteri Memnuniyeti"
        color="text-green-400"
      />
    </div>
  );
}
