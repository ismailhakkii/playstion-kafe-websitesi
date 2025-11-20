"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Clock, Zap, Crown, Users, Check, Gift, GraduationCap } from "lucide-react";
import MouseTrail from "../components/MouseTrail";
import ScrollProgress from "../components/ScrollProgress";

const packages = [
  {
    name: "Standart",
    price: "100₺",
    duration: "1 Saat",
    icon: <Clock size={32} />,
    color: "from-blue-600 to-cyan-500",
    borderColor: "border-cyan-500",
    features: [
      "PS5 Konsol Erişimi",
      "4K HDR Ekran",
      "Tüm Oyunlar Açık",
      "Kulaklık Dahil",
    ]
  },
  {
    name: "PRO",
    price: "250₺",
    duration: "3 Saat",
    icon: <Crown size={32} />,
    color: "from-purple-600 to-pink-600",
    borderColor: "border-pink-500",
    badge: "EN POPÜLER",
    features: [
      "PS5 Konsol Erişimi",
      "4K HDR Ekran",
      "Tüm Oyunlar Açık",
      "Kulaklık Dahil",
      "1 Ücretsiz İçecek",
      "Sınırsız Atıştırmalık",
    ]
  },
  {
    name: "ULTIMATE",
    price: "450₺",
    duration: "6 Saat",
    icon: <Zap size={32} />,
    color: "from-yellow-600 to-red-600",
    borderColor: "border-yellow-500",
    features: [
      "PS5 PRO Konsol Erişimi",
      "4K HDR 120Hz Ekran",
      "Tüm Oyunlar Açık",
      "Premium Kulaklık",
      "2 Ücretsiz İçecek",
      "Sınırsız Atıştırmalık",
      "VIP Koltuk",
    ]
  },
];

const discounts = [
  {
    title: "Öğrenci İndirimi",
    discount: "%15",
    icon: <GraduationCap size={40} />,
    color: "text-blue-400",
    desc: "Geçerli öğrenci belgesi ile"
  },
  {
    title: "Grup Paketi",
    discount: "%20",
    icon: <Users size={40} />,
    color: "text-green-400",
    desc: "4+ kişilik gruplar için"
  },
  {
    title: "Hafta İçi Özel",
    discount: "%10",
    icon: <Gift size={40} />,
    color: "text-purple-400",
    desc: "Pazartesi-Cuma 10:00-18:00"
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-cyber-black text-white p-8 relative overflow-hidden">
      <ScrollProgress />
      <MouseTrail />
      
      {/* ARKA PLAN EFEKTİ */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyber-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Link href="/" className="flex items-center gap-2 text-cyber-secondary hover:text-white transition-colors font-bold mb-12">
          <ChevronLeft /> ANA SAYFAYA DÖN
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-secondary">FİYATLAR</span> & PAKETLER
          </h1>
          <p className="text-gray-400">Sana en uygun paketi seç ve oyunun tadını çıkar!</p>
        </div>

        {/* FİYATLANDIRMA KARTLARI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative glass-panel p-8 rounded-2xl border-2 ${pkg.borderColor} overflow-hidden`}
            >
              {/* BADGE */}
              {pkg.badge && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-cyber-accent to-pink-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                  {pkg.badge}
                </div>
              )}

              {/* GRADIENT BG */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-5`}></div>

              <div className="relative z-10">
                {/* ICON */}
                <div className={`bg-gradient-to-br ${pkg.color} p-4 rounded-xl inline-block mb-4`}>
                  {pkg.icon}
                </div>

                {/* BAŞLIK */}
                <h3 className="text-3xl font-black mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{pkg.duration}</p>

                {/* FİYAT */}
                <div className="mb-6">
                  <span className="text-5xl font-black">{pkg.price}</span>
                </div>

                {/* ÖZELLİKLER */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check size={16} className="text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* BUTON */}
                <Link href="/contact">
                  <button className={`w-full bg-gradient-to-r ${pkg.color} text-white px-6 py-3 rounded-lg font-bold hover:shadow-[0_0_30px_rgba(112,0,223,0.5)] transition-all`}>
                    HEMEN AYIRT
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* İNDİRİMLER */}
        <div>
          <h2 className="text-4xl font-black text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ÖZEL</span> İNDİRİMLER
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {discounts.map((discount, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-panel p-8 rounded-2xl text-center border-t-4 border-cyber-primary/50 hover:border-cyber-accent transition-all"
              >
                <div className={`${discount.color} mb-4 inline-block`}>
                  {discount.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{discount.title}</h3>
                <div className="text-5xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-accent">
                  {discount.discount}
                </div>
                <p className="text-gray-400 text-sm">{discount.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* NOTLAR */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 glass-panel p-6 rounded-2xl border-l-4 border-yellow-500"
        >
          <h4 className="font-bold text-lg mb-3 text-yellow-400">📌 Önemli Notlar</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>• Tüm fiyatlara KDV dahildir.</li>
            <li>• İndirimler birleştirilemez.</li>
            <li>• Rezervasyonlar en az 1 saat önceden yapılmalıdır.</li>
            <li>• Hafta sonu yoğunluk nedeniyle rezervasyon tavsiye edilir.</li>
          </ul>
        </motion.div>

      </div>
    </main>
  );
}
