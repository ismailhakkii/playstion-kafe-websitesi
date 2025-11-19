"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, MapPin, Phone, Clock, Mail, Send, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import MouseTrail from "../components/MouseTrail";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    people: "1",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada
    alert("Rezervasyon talebiniz alındı! En kısa sürede size dönüş yapacağız.");
  };

  return (
    <main className="min-h-screen bg-cyber-black text-white p-8 relative overflow-hidden">
      <MouseTrail />
      
      {/* ARKA PLAN EFEKTİ */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Link href="/" className="flex items-center gap-2 text-cyber-secondary hover:text-white transition-colors font-bold mb-12">
          <ChevronLeft /> ANA SAYFAYA DÖN
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-accent">İLETİŞİM</span> & REZERVASYON
          </h1>
          <p className="text-gray-400">Bize ulaşın ve yerinizi hemen ayırtın!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* İLETİŞİM BİLGİLERİ */}
          <div className="space-y-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-6 rounded-2xl border-l-4 border-cyber-primary"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyber-primary/20 p-3 rounded-lg text-cyber-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Adres</h3>
                  <p className="text-gray-400 text-sm">Eskikale Mahallesi, Sivas Merkez</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 pl-16">58000 Sivas / Türkiye</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-6 rounded-2xl border-l-4 border-cyber-secondary"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyber-secondary/20 p-3 rounded-lg text-cyber-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Telefon</h3>
                  <p className="text-gray-400 text-sm">Bizi arayın</p>
                </div>
              </div>
              <a href="tel:+905551234567" className="text-xl font-bold pl-16 hover:text-cyber-secondary transition-colors">
                +90 555 123 45 67
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-6 rounded-2xl border-l-4 border-cyber-accent"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyber-accent/20 p-3 rounded-lg text-cyber-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Çalışma Saatleri</h3>
                  <p className="text-gray-400 text-sm">Her gün açık</p>
                </div>
              </div>
              <div className="pl-16 space-y-1 text-sm">
                <p className="text-white font-bold">Hafta İçi: <span className="text-gray-400 font-normal">10:00 - 02:00</span></p>
                <p className="text-white font-bold">Hafta Sonu: <span className="text-gray-400 font-normal">10:00 - 04:00</span></p>
              </div>
            </motion.div>

            {/* SOSYAL MEDYA */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="font-bold text-lg mb-4">Bizi Takip Edin</h3>
              <div className="flex gap-3">
                <a href="#" className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg hover:scale-110 transition-transform">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg hover:scale-110 transition-transform">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* REZERVASYON FORMU */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-accent">
              HEMEN REZERVASYON YAPIN
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Adınız Soyadınız</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-primary focus:outline-none transition-colors"
                  placeholder="Ahmet Yılmaz"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Telefon</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-primary focus:outline-none transition-colors"
                  placeholder="0555 123 45 67"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Tarih</label>
                  <input 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Saat</label>
                  <input 
                    type="time" 
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Kişi Sayısı</label>
                <select 
                  value={formData.people}
                  onChange={(e) => setFormData({...formData, people: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-primary focus:outline-none transition-colors"
                >
                  <option value="1">1 Kişi</option>
                  <option value="2">2 Kişi</option>
                  <option value="3">3 Kişi</option>
                  <option value="4">4 Kişi</option>
                  <option value="5+">5+ Kişi (Grup)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Mesajınız (Opsiyonel)</label>
                <textarea 
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-primary focus:outline-none transition-colors resize-none"
                  placeholder="Özel bir isteğiniz var mı?"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyber-primary to-cyber-accent text-white px-6 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(112,0,223,0.6)] transition-all"
              >
                REZERVASYON OLUŞTUR <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>

        {/* HARİTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 glass-panel p-4 rounded-2xl overflow-hidden"
        >
          <h3 className="font-bold text-xl mb-4 px-4">Bizi Haritada Bulun</h3>
          <div className="w-full h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 text-cyber-primary" />
              <p className="text-gray-400">Google Maps iframe buraya eklenebilir</p>
              <p className="text-sm text-gray-500 mt-2">Eskikale Mahallesi, Sivas Merkez</p>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
