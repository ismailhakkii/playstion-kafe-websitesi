"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, ChevronLeft, Calendar, Users, Zap } from "lucide-react";
import MouseTrail from "../components/MouseTrail";
import ScrollProgress from "../components/ScrollProgress";

export default function TournamentsPage() {
  return (
    <main className="min-h-screen bg-cyber-black text-white p-8 relative">
        <ScrollProgress />
        <MouseTrail />
        
      <div className="max-w-5xl mx-auto relative z-10">
        <Link href="/" className="flex items-center gap-2 text-cyber-secondary hover:text-white transition-colors font-bold mb-12">
            <ChevronLeft /> ANA SAYFAYA DÖN
        </Link>

        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-4">TURNUVA <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">ARENASI</span></h1>
            <p className="text-gray-400">Sivas'ın en iyileri burada kapışıyor. Sıradaki şampiyon sen misin?</p>
        </div>

        {/* AKTİF TURNUVALAR */}
        <div className="space-y-6">
            
            {/* Turnuva Kartı 1 */}
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass-panel p-8 rounded-2xl border-l-4 border-yellow-400 flex flex-col md:flex-row items-center justify-between gap-8"
            >
                <div className="flex items-center gap-6">
                    <div className="bg-yellow-400/20 p-4 rounded-full text-yellow-400">
                        <Trophy size={40} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-red-500/20 text-red-500 text-xs font-bold px-2 py-1 rounded animate-pulse">KAYITLAR AÇIK</span>
                            <span className="text-gray-500 text-sm font-mono">FC 25</span>
                        </div>
                        <h2 className="text-3xl font-bold">Sivas Kış Kupası</h2>
                        <div className="flex gap-4 mt-2 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Calendar size={14}/> 25 Kasım 2025</span>
                            <span className="flex items-center gap-1"><Users size={14}/> 32 Oyuncu</span>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-sm text-gray-400">ÖDÜL HAVUZU</div>
                    <div className="text-4xl font-black text-yellow-400">5.000₺</div>
                    <button className="mt-4 bg-white text-black px-6 py-2 rounded font-bold hover:bg-yellow-400 transition-colors w-full">KAYIT OL</button>
                </div>
            </motion.div>

            {/* Turnuva Kartı 2 */}
            <motion.div 
                className="glass-panel p-8 rounded-2xl border-l-4 border-gray-600 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
            >
                <div className="flex items-center gap-6">
                    <div className="bg-gray-700 p-4 rounded-full text-white">
                        <Zap size={40} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">GELECEK</span>
                            <span className="text-gray-500 text-sm font-mono">TEKKEN 8</span>
                        </div>
                        <h2 className="text-3xl font-bold">Demir Yumruk Turnuvası</h2>
                        <div className="flex gap-4 mt-2 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Calendar size={14}/> Aralık 2025</span>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-sm text-gray-400">ÖDÜL HAVUZU</div>
                    <div className="text-4xl font-black">3.000₺</div>
                    <button disabled className="mt-4 border border-white/20 text-white px-6 py-2 rounded font-bold cursor-not-allowed w-full">YAKINDA</button>
                </div>
            </motion.div>

        </div>
      </div>
    </main>
  );
}
