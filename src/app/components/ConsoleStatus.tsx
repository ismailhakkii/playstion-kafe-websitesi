"use client";

import { motion } from "framer-motion";
import { Gamepad2, Circle } from "lucide-react";
import { useEffect, useState } from "react";

interface Console {
  id: number;
  name: string;
  status: "available" | "busy";
}

export default function ConsoleStatus() {
  const [consoles, setConsoles] = useState<Console[]>([
    { id: 1, name: "PS5 #1", status: "busy" },
    { id: 2, name: "PS5 #2", status: "available" },
    { id: 3, name: "PS5 #3", status: "busy" },
    { id: 4, name: "PS5 #4", status: "available" },
    { id: 5, name: "PS5 #5", status: "available" },
    { id: 6, name: "PS5 #6", status: "busy" },
    { id: 7, name: "PS5 PRO #1", status: "available" },
    { id: 8, name: "PS5 PRO #2", status: "busy" },
  ]);

  const availableCount = consoles.filter((c) => c.status === "available").length;

  // Fake real-time güncelleme (her 5 saniyede random değişim)
  useEffect(() => {
    const interval = setInterval(() => {
      setConsoles((prev) =>
        prev.map((console) =>
          Math.random() > 0.7
            ? {
                ...console,
                status:
                  console.status === "available" ? "busy" : "available",
              }
            : console
        )
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel p-8 rounded-2xl border-l-4 border-green-500">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-black mb-2">Konsol Durumu</h3>
          <p className="text-gray-400 text-sm">Canlı güncelleniyor</p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            {availableCount}/8
          </div>
          <p className="text-gray-400 text-sm">Müsait</p>
        </div>
      </div>

      {/* KONSOL GRİDİ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {consoles.map((console) => (
          <motion.div
            key={console.id}
            layout
            className={`p-4 rounded-xl border-2 transition-all ${
              console.status === "available"
                ? "border-green-500 bg-green-500/10"
                : "border-red-500 bg-red-500/10"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                animate={{
                  scale: console.status === "available" ? [1, 1.2, 1] : 1,
                  opacity: console.status === "available" ? [1, 0.5, 1] : 0.5,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Circle
                  size={12}
                  fill={console.status === "available" ? "#22c55e" : "#ef4444"}
                  className={
                    console.status === "available"
                      ? "text-green-500"
                      : "text-red-500"
                  }
                />
              </motion.div>
              <span className="text-xs font-bold text-white">
                {console.name}
              </span>
            </div>
            <Gamepad2
              size={20}
              className={
                console.status === "available"
                  ? "text-green-400"
                  : "text-gray-600"
              }
            />
            <p
              className={`text-xs mt-2 font-bold ${
                console.status === "available"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {console.status === "available" ? "Müsait" : "Dolu"}
            </p>
          </motion.div>
        ))}
      </div>

      {/* HIZLI REZERVASYON */}
      {availableCount > 0 && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all flex items-center justify-center gap-2"
        >
          <Circle size={16} fill="currentColor" />
          HEMEN REZERVASYON YAP
        </motion.button>
      )}
    </div>
  );
}
