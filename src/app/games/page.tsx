"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Gamepad2, ChevronLeft, Star } from "lucide-react";

const games = [
  { title: "EA FC 25", category: "Spor", rating: "4.8", color: "from-blue-600 to-cyan-500" },
  { title: "Tekken 8", category: "Dövüş", rating: "4.9", color: "from-red-600 to-orange-500" },
  { title: "NBA 2K25", category: "Spor", rating: "4.7", color: "from-orange-600 to-yellow-500" },
  { title: "Spider-Man 2", category: "Macera", rating: "5.0", color: "from-red-700 to-blue-700" },
  { title: "Mortal Kombat 1", category: "Dövüş", rating: "4.8", color: "from-yellow-600 to-red-600" },
  { title: "GTA V", category: "Açık Dünya", rating: "4.9", color: "from-green-600 to-emerald-500" },
  { title: "Call of Duty: MW3", category: "FPS", rating: "4.6", color: "from-gray-700 to-gray-500" },
  { title: "Valorant", category: "FPS", rating: "4.7", color: "from-rose-500 to-purple-600" },
];

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-cyber-black text-white p-8 relative overflow-hidden">
      
      {/* BASİT ARKA PLAN EFEKTİ */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-cyber-primary/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* NAVİGASYON */}
        <div className="flex items-center justify-between mb-12">
            <Link href="/" className="flex items-center gap-2 text-cyber-secondary hover:text-white transition-colors font-bold">
                <ChevronLeft /> ANA SAYFAYA DÖN
            </Link>
            <h1 className="text-4xl font-black tracking-tighter">OYUN <span className="text-cyber-primary">KÜTÜPHANESİ</span></h1>
        </div>

        {/* OYUN GRİDİ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer glass-panel border border-white/10"
                >
                    {/* Oyun Kapağı (Placeholder) */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Gamepad2 size={64} className="text-white/20 group-hover:text-white/40 transition-all transform group-hover:scale-125 group-hover:rotate-12" />
                    </div>

                    {/* İçerik */}
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded text-white">{game.category}</span>
                            <div className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                                <Star size={12} fill="currentColor" /> {game.rating}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold leading-none mb-1">{game.title}</h3>
                        <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Oynamak için tıkla</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </main>
  );
}
