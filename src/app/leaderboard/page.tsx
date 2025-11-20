"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Trophy, Medal, Crown, Zap, Target } from "lucide-react";
import { useState } from "react";
import MouseTrail from "../components/MouseTrail";
import ScrollProgress from "../components/ScrollProgress";

// PLACEHOLDER VERİLER
const leaderboardData = {
  "EA FC 25": [
    { rank: 1, name: "Ahmet Y.", wins: 47, losses: 12, points: 1420, avatar: "🔥" },
    { rank: 2, name: "Mehmet K.", wins: 42, losses: 18, points: 1280, avatar: "⚡" },
    { rank: 3, name: "Can S.", wins: 38, losses: 22, points: 1150, avatar: "🎮" },
    { rank: 4, name: "Emre D.", wins: 35, losses: 25, points: 1050, avatar: "🏆" },
    { rank: 5, name: "Burak T.", wins: 32, losses: 28, points: 980, avatar: "⭐" },
  ],
  "Tekken 8": [
    { rank: 1, name: "Serkan M.", wins: 52, losses: 8, points: 1580, avatar: "👊" },
    { rank: 2, name: "Ali R.", wins: 45, losses: 15, points: 1380, avatar: "💪" },
    { rank: 3, name: "Deniz A.", wins: 40, losses: 20, points: 1220, avatar: "🥊" },
    { rank: 4, name: "Kaan P.", wins: 36, losses: 24, points: 1100, avatar: "🔥" },
    { rank: 5, name: "Onur G.", wins: 30, losses: 30, points: 950, avatar: "⚔️" },
  ],
  "NBA 2K25": [
    { rank: 1, name: "Cem B.", wins: 48, losses: 12, points: 1450, avatar: "🏀" },
    { rank: 2, name: "Murat H.", wins: 44, losses: 16, points: 1320, avatar: "🎯" },
    { rank: 3, name: "Eren K.", wins: 39, losses: 21, points: 1180, avatar: "🔥" },
    { rank: 4, name: "Berk Y.", wins: 34, losses: 26, points: 1020, avatar: "⭐" },
    { rank: 5, name: "Arda S.", wins: 28, losses: 32, points: 890, avatar: "💫" },
  ],
};

const games = ["EA FC 25", "Tekken 8", "NBA 2K25"];

export default function LeaderboardPage() {
  const [selectedGame, setSelectedGame] = useState("EA FC 25");

  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1: return <Crown className="text-yellow-400" size={24} />;
      case 2: return <Medal className="text-gray-400" size={24} />;
      case 3: return <Medal className="text-orange-600" size={24} />;
      default: return <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">{rank}</div>;
    }
  };

  const getRankColor = (rank: number) => {
    switch(rank) {
      case 1: return "border-yellow-400 bg-yellow-400/5";
      case 2: return "border-gray-400 bg-gray-400/5";
      case 3: return "border-orange-600 bg-orange-600/5";
      default: return "border-white/10 bg-transparent";
    }
  };

  return (
    <main className="min-h-screen bg-cyber-black text-white p-8 relative overflow-hidden">
      <ScrollProgress />
      <MouseTrail />
      
      {/* ARKA PLAN */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Link href="/" className="flex items-center gap-2 text-cyber-secondary hover:text-white transition-colors font-bold mb-12">
          <ChevronLeft /> ANA SAYFAYA DÖN
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600">LİDERLİK</span> TABLOSU
          </h1>
          <p className="text-gray-400">En iyi oyuncular burada yarışıyor!</p>
        </div>

        {/* OYUN SEÇİCİ */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {games.map((game) => (
            <motion.button
              key={game}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedGame(game)}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                selectedGame === game
                  ? "bg-gradient-to-r from-cyber-primary to-cyber-accent text-white shadow-[0_0_30px_rgba(112,0,223,0.5)]"
                  : "glass-panel text-gray-400 hover:text-white"
              }`}
            >
              {game}
            </motion.button>
          ))}
        </div>

        {/* İSTATİSTİK KARTLARI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6 rounded-2xl border-t-4 border-yellow-400 text-center"
          >
            <Trophy className="mx-auto mb-3 text-yellow-400" size={32} />
            <div className="text-3xl font-black mb-1">
              {leaderboardData[selectedGame as keyof typeof leaderboardData][0].name}
            </div>
            <p className="text-sm text-gray-400">Bu Ayın Şampiyonu</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-6 rounded-2xl border-t-4 border-cyber-primary text-center"
          >
            <Zap className="mx-auto mb-3 text-cyber-primary" size={32} />
            <div className="text-3xl font-black mb-1">
              {leaderboardData[selectedGame as keyof typeof leaderboardData][0].wins}
            </div>
            <p className="text-sm text-gray-400">En Yüksek Galibiyet</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-6 rounded-2xl border-t-4 border-green-500 text-center"
          >
            <Target className="mx-auto mb-3 text-green-500" size={32} />
            <div className="text-3xl font-black mb-1">
              {leaderboardData[selectedGame as keyof typeof leaderboardData].length}
            </div>
            <p className="text-sm text-gray-400">Toplam Yarışan</p>
          </motion.div>
        </div>

        {/* LİDERLİK TABLOSU */}
        <motion.div 
          key={selectedGame}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass-panel rounded-2xl overflow-hidden"
        >
          {/* TABLO BAŞLIĞI */}
          <div className="bg-gradient-to-r from-cyber-primary to-cyber-accent p-4 flex items-center justify-between">
            <span className="font-bold">SIRA</span>
            <span className="font-bold flex-1 ml-16">OYUNCU</span>
            <span className="font-bold hidden md:block w-20 text-center">GALİBİYET</span>
            <span className="font-bold hidden md:block w-20 text-center">MAĞLUBİYET</span>
            <span className="font-bold w-24 text-center">PUAN</span>
          </div>

          {/* TABLO İÇERİĞİ */}
          <div className="divide-y divide-white/10">
            {leaderboardData[selectedGame as keyof typeof leaderboardData].map((player, index) => (
              <motion.div
                key={player.rank}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 flex items-center justify-between hover:bg-white/5 transition-all border-l-4 ${getRankColor(player.rank)}`}
              >
                {/* RANK */}
                <div className="w-12 flex items-center justify-center">
                  {getRankIcon(player.rank)}
                </div>

                {/* OYUNCU */}
                <div className="flex-1 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyber-primary to-cyber-accent flex items-center justify-center text-2xl">
                    {player.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{player.name}</div>
                    <div className="text-xs text-gray-500">Sıra #{player.rank}</div>
                  </div>
                </div>

                {/* İSTATİSTİKLER */}
                <div className="hidden md:block w-20 text-center text-green-400 font-bold">{player.wins}</div>
                <div className="hidden md:block w-20 text-center text-red-400 font-bold">{player.losses}</div>
                <div className="w-24 text-center">
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    {player.points}
                  </div>
                  <div className="text-xs text-gray-500">puan</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ALT BİLGİ */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center glass-panel p-6 rounded-2xl"
        >
          <h3 className="font-bold text-lg mb-3 text-cyber-secondary">🏆 Nasıl Sıralamaya Girebilirim?</h3>
          <p className="text-gray-400 text-sm mb-4">
            CodeBros'ta oynadığınız her maç otomatik olarak kaydedilir. 
            Puanlarınızı artırmak için daha fazla maç kazanın ve liderlik tablosunda yerinizi alın!
          </p>
          <Link href="/contact">
            <button className="bg-gradient-to-r from-cyber-primary to-cyber-accent text-white px-6 py-3 rounded-lg font-bold hover:shadow-[0_0_30px_rgba(112,0,223,0.5)] transition-all">
              ŞİMDİ OYNA VE KAZANMAYA BAŞLA
            </button>
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
