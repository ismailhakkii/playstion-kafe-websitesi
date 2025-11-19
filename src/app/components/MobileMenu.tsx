"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Gamepad2, Trophy, Sparkles, Phone, DollarSign, Image, BarChart3 } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { href: "/", label: "ANA SAYFA", icon: <Gamepad2 size={20} /> },
  { href: "/games", label: "OYUNLAR", icon: <Gamepad2 size={20} /> },
  { href: "/tournaments", label: "TURNUVALAR", icon: <Trophy size={20} /> },
  { href: "/pricing", label: "FİYATLAR", icon: <DollarSign size={20} /> },
  { href: "/gallery", label: "GALERİ", icon: <Image size={20} /> },
  { href: "/leaderboard", label: "LİDERLİK TABLOSU", icon: <BarChart3 size={20} /> },
  { href: "/contact", label: "İLETİŞİM", icon: <Phone size={20} /> },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] md:hidden"
          />

          {/* SIDEBAR */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[280px] bg-gradient-to-b from-[#0a0a0a] to-[#1a0033] border-l border-cyber-primary/30 z-[70] md:hidden shadow-2xl"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-tr from-cyber-primary to-cyber-accent p-2 rounded-lg">
                  <Gamepad2 size={20} />
                </div>
                <span className="font-bold text-lg font-mono">
                  CODE<span className="text-cyber-secondary">BROS</span>
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <nav className="p-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 p-4 rounded-xl hover:bg-cyber-primary/20 transition-all group border border-transparent hover:border-cyber-primary/50"
                  >
                    <span className="text-cyber-secondary group-hover:text-cyber-accent transition-colors">
                      {item.icon}
                    </span>
                    <span className="font-bold text-sm text-gray-300 group-hover:text-white">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* FOOTER */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
              <button className="w-full bg-white text-black px-4 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-cyber-secondary transition-colors">
                <Phone size={16} /> HEMEN ARA
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                SİVAS / MERKEZ
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
