"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "FC 25 Şampiyonu",
    avatar: "🎮",
    rating: 5,
    text: "CodeBros'ta geçirdiğim her dakika inanılmaz! PS5 Pro'da 4K oynamak başka bir deneyim. Kesinlikle tavsiye ederim!",
  },
  {
    id: 2,
    name: "Mehmet Kaya",
    role: "Tekken Ustası",
    avatar: "👊",
    rating: 5,
    text: "Turnuvaları çok profesyonel organize ediyorlar. Ekip son derece ilgili ve mekan tertemiz. Sivas'ın en iyisi!",
  },
  {
    id: 3,
    name: "Can Demir",
    role: "NBA 2K Oyuncusu",
    avatar: "🏀",
    rating: 5,
    text: "Fiyatlar gayet uygun, öğrenci indirimini de unutmayın! Arkadaşlarımla her hafta sonu geliyoruz.",
  },
  {
    id: 4,
    name: "Burak Şahin",
    role: "Valorant Oyuncusu",
    avatar: "🎯",
    rating: 5,
    text: "Ping problemi yok, ekipmanlar son model. Maç öncesi ısınmak için harika bir yer!",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className="py-12">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-accent">
          OYUNCULAR
        </span>{" "}
        NE DİYOR?
      </h2>

      <div className="max-w-4xl mx-auto">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          {/* QUOTE ICON */}
          <div className="absolute top-4 right-4 text-cyber-primary/20">
            <Quote size={80} />
          </div>

          {/* CONTENT */}
          <div className="relative z-10">
            {/* AVATAR & INFO */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyber-primary to-cyber-accent flex items-center justify-center text-3xl">
                {current.avatar}
              </div>
              <div>
                <h4 className="font-bold text-xl">{current.name}</h4>
                <p className="text-gray-400 text-sm">{current.role}</p>
              </div>
            </div>

            {/* RATING */}
            <div className="flex gap-1 mb-4">
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill="#facc15"
                  className="text-yellow-400"
                />
              ))}
            </div>

            {/* TEXT */}
            <p className="text-gray-300 text-lg leading-relaxed italic">
              "{current.text}"
            </p>
          </div>
        </motion.div>

        {/* INDICATORS */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-gradient-to-r from-cyber-primary to-cyber-accent"
                  : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
