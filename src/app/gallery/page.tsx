"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Image as ImageIcon, Gamepad2, Users, Sparkles } from "lucide-react";
import { useState } from "react";
import MouseTrail from "../components/MouseTrail";
import ScrollProgress from "../components/ScrollProgress";

// PLACEHOLDER GALERI İÇERİĞİ (Gerçek fotoğraflar eklenebilir)
const galleryItems = [
  { id: 1, category: "setup", title: "PS5 Pro Setup", color: "from-blue-600 to-cyan-500" },
  { id: 2, category: "gaming", title: "EA FC 25 Action", color: "from-green-600 to-emerald-500" },
  { id: 3, category: "tournament", title: "Turnuva Finali", color: "from-yellow-600 to-red-600" },
  { id: 4, category: "setup", title: "4K Gaming Monitors", color: "from-purple-600 to-pink-600" },
  { id: 5, category: "gaming", title: "Tekken 8 Battle", color: "from-red-600 to-orange-500" },
  { id: 6, category: "space", title: "Gaming Area", color: "from-indigo-600 to-purple-600" },
  { id: 7, category: "tournament", title: "Şampiyonlar", color: "from-yellow-500 to-orange-600" },
  { id: 8, category: "space", title: "VIP Bölüm", color: "from-gray-700 to-gray-900" },
  { id: 9, category: "gaming", title: "Spider-Man 2", color: "from-red-700 to-blue-700" },
];

const categories = [
  { id: "all", label: "Tümü", icon: <Sparkles size={16} /> },
  { id: "setup", label: "Setup'lar", icon: <Gamepad2 size={16} /> },
  { id: "gaming", label: "Oyun Anları", icon: <ImageIcon size={16} /> },
  { id: "tournament", label: "Turnuvalar", icon: <Users size={16} /> },
  { id: "space", label: "Mekan", icon: <Sparkles size={16} /> },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: any) => {
    setSelectedImage(item);
    setLightboxOpen(true);
  };

  return (
    <main className="min-h-screen bg-cyber-black text-white p-8 relative overflow-hidden">
      <ScrollProgress />
      <MouseTrail />
      
      {/* ARKA PLAN */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Link href="/" className="flex items-center gap-2 text-cyber-secondary hover:text-white transition-colors font-bold mb-12">
          <ChevronLeft /> ANA SAYFAYA DÖN
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">GALERİ</span>
          </h1>
          <p className="text-gray-400">CodeBros deneyimini keşfedin</p>
        </div>

        {/* KATEGORİ FİLTRELERİ */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-bold text-sm transition-all ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-cyber-primary to-cyber-accent text-white"
                  : "glass-panel text-gray-400 hover:text-white"
              }`}
            >
              {cat.icon}
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* GALERİ GRİDİ (MASONRY LAYOUT) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openLightbox(item)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer glass-panel border border-white/10"
            >
              {/* PLACEHOLDER GRADIENT */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
              
              {/* ICON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon size={64} className="text-white/20 group-hover:text-white/40 transition-all transform group-hover:scale-125" />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-300">Büyütmek için tıklayın</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* LIGHTBOX */}
        {lightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-8 cursor-pointer"
          >
            <div className="relative max-w-5xl w-full h-[80vh] rounded-2xl overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedImage.color}`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon size={120} className="text-white/30" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                <h2 className="text-4xl font-black mb-2">{selectedImage.title}</h2>
                <p className="text-gray-300">Gerçek fotoğraf buraya eklenecek</p>
              </div>
              <button 
                onClick={() => setLightboxOpen(false)}
                className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}

        {/* ALT BİLGİ */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center glass-panel p-6 rounded-2xl"
        >
          <p className="text-gray-400 text-sm">
            📸 Gerçek mekan fotoğrafları eklenecek. Placeholder görseller kullanılmaktadır.
          </p>
        </motion.div>

      </div>
    </main>
  );
}
