"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Float, Stars, Torus } from "@react-three/drei";
import { motion } from "framer-motion";
import { Gamepad2, Clock, Utensils, Sparkles, Zap, Phone, Trophy } from "lucide-react";
import { useRef, useState, useMemo } from "react";
import Link from "next/link"; // <-- YENİ EKLENDİ
import * as THREE from "three";

// --- 3D BİLEŞENLER (AYNI) ---
function Tunnel() {
  const items = useMemo(() => new Array(25).fill(0).map((_, i) => ({
      z: -i * 2.5, rot: Math.random() * Math.PI, color: i % 2 === 0 ? "#7000df" : "#00f0ff"
  })), []);
  const groupRef = useRef<THREE.Group>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.position.z = (t * 4) % 5;
    groupRef.current.rotation.z = t * 0.1;
  });
  return (
    <group ref={groupRef}>
      {items.map((data, i) => (
        <group key={i} position={[0, 0, data.z - 10]}>
          <Torus args={[3.5, 0.04, 16, 4]} rotation={[0, 0, data.rot]}>
             <meshStandardMaterial color="#000" emissive={data.color} emissiveIntensity={4} toneMapped={false}/>
          </Torus>
        </group>
      ))}
    </group>
  );
}

function FloatingParticles() {
    const count = 50;
    const mesh = useRef<THREE.InstancedMesh>(null!);
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useMemo(() => new Array(count).fill(0).map(() => ({
            t: Math.random() * 100, factor: 20 + Math.random() * 100, speed: 0.01 + Math.random() * 0.05,
            xFactor: -50 + Math.random() * 100, yFactor: -50 + Math.random() * 100, zFactor: -50 + Math.random() * 100,
        })), []);
    useFrame(() => {
        particles.forEach((particle, i) => {
            let { speed, factor, yFactor, zFactor } = particle;
            const t = particle.t += speed / 2;
            dummy.position.set((particle.t % 100) - 50, yFactor + Math.sin((t * factor) / 10), zFactor + Math.cos((t * factor) / 10));
            dummy.scale.setScalar(Math.cos(t) * 0.1 + 0.1);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        })
        mesh.current.instanceMatrix.needsUpdate = true;
    });
    return <instancedMesh ref={mesh} args={[undefined, undefined, count]}><dodecahedronGeometry args={[0.2, 0]} /><meshBasicMaterial color="#ff0055" /></instancedMesh>
}

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX - window.innerWidth / 2) / 50;
    const y = (e.clientY - window.innerHeight / 2) / 50;
    document.documentElement.style.setProperty('--mouse-x', `${x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <main className="min-h-screen bg-cyber-black text-white overflow-x-hidden relative" onMouseMove={handleMouseMove}>
      <div className="fixed inset-0 z-0">
        <Canvas gl={{ antialias: false }}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <Tunnel />
          <FloatingParticles />
          <Stars radius={50} depth={50} count={2000} factor={4} fade speed={2} />
          <fog attach="fog" args={['#050505', 5, 20]} />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6 flex flex-col gap-16">
        {/* HEADER GÜNCELLENDİ */}
        <header className="flex justify-between items-center glass-panel p-4 rounded-2xl sticky top-4 z-50 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="bg-gradient-to-tr from-cyber-primary to-cyber-accent p-2 rounded-lg">
                <Gamepad2 size={24} />
            </div>
            <h1 className="font-bold text-xl tracking-wide font-mono">CODE<span className="text-cyber-secondary animate-pulse">BROS</span></h1>
          </Link>
          
          {/* MENÜ LİNKLERİ */}
          <nav className="hidden md:flex gap-6 text-sm font-bold text-gray-300">
            <Link href="/games" className="hover:text-cyber-secondary transition-colors">OYUNLAR</Link>
            <Link href="/tournaments" className="hover:text-cyber-secondary transition-colors">TURNUVALAR</Link>
            <Link href="/" className="hover:text-cyber-secondary transition-colors">FİYATLAR</Link>
          </nav>

          <button className="bg-white text-black px-5 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
            <Phone size={16}/> REZERVASYON
          </button>
        </header>

        {/* HERO İÇERİĞİ (Aynı) */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
            <div className="space-y-8" style={{ transform: 'translate(var(--mouse-x), var(--mouse-y))' }}>
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-cyber-secondary/30 text-cyber-secondary text-xs font-bold bg-cyber-secondary/5">
                    <span className="w-2 h-2 rounded-full bg-cyber-secondary animate-ping"></span> SİVAS / MERKEZ
                </div>
                <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">OYUNUN <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-secondary">CODEBROS</span> <br/>HALİ.</h2>
                <p className="text-gray-300 text-lg max-w-lg leading-relaxed border-l-4 border-cyber-primary pl-4">Sıradanlığı kapıda bırak. <span className="text-white font-bold">RTX Açık.</span> <span className="text-white font-bold">Ping Sıfır.</span> Sivas'ın en gelişmiş dijital arenasına hoş geldin.</p>
                <div className="flex gap-4">
                    <button className="bg-cyber-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyber-accent transition-all hover:shadow-[0_0_40px_rgba(112,0,223,0.6)] flex items-center gap-2">HEMEN GEL <Zap className="animate-bounce"/></button>
                </div>
            </div>

            <div className="grid gap-6">
                <motion.div whileHover={{scale:1.02}} className="glass-panel p-8 rounded-2xl flex justify-between items-center border-l-4 border-cyber-secondary relative overflow-hidden">
                    <div className="flex items-center gap-5 relative z-10">
                        <div className="bg-cyber-secondary/20 p-4 rounded-xl text-cyber-secondary"><Clock size={32} /></div>
                        <div><h3 className="font-bold text-2xl">Standart</h3><p className="text-sm text-gray-400">1 Saatlik Deneyim</p></div>
                    </div>
                    <div className="text-4xl font-black tracking-tighter">100₺</div>
                </motion.div>
                <motion.div whileHover={{scale:1.05}} className="bg-gradient-to-br from-[#2a0055] to-[#050505] border border-cyber-primary/50 p-8 rounded-2xl flex justify-between items-center relative overflow-hidden cursor-pointer">
                    <div className="absolute top-0 right-0 bg-cyber-accent text-white text-xs font-bold px-3 py-1 rounded-bl-xl">EN POPÜLER</div>
                    <div className="flex items-center gap-5 relative z-10">
                        <div className="bg-white/10 p-4 rounded-xl text-white border border-white/20"><Trophy size={32} className="text-yellow-400 drop-shadow-lg" /></div>
                        <div><h3 className="font-bold text-2xl text-white">PRO Paket</h3><p className="text-sm text-gray-300">3 Saatlik Maraton</p></div>
                    </div>
                    <div className="text-5xl font-black text-white relative z-10">250₺</div>
                </motion.div>
            </div>
        </motion.div>

        {/* ÖZELLİKLER VE FOOTER AYNI KALDI (Kod şişmesin diye burayı özet geçiyorum, mevcut haliyle bırakabilirsin ama yukarıyı tam yapıştırırsan sorun olmaz) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            {[
                { icon: <Gamepad2 size={40} />, title: "PS5 PRO & 4K", desc: "En son teknoloji konsollar ve göz alıcı ekranlar.", color: "text-cyber-secondary" },
                { icon: <Sparkles size={40} />, title: "Ultra Hijyen", desc: "Her seanstan sonra UV ışık ve özel solüsyon temizliği.", color: "text-cyber-accent" },
                { icon: <Utensils size={40} />, title: "Gamer Menü", desc: "Tost, enerji içecekleri ve sınırsız atıştırmalık.", color: "text-yellow-400" }
            ].map((item, i) => (
                <div key={i} className="glass-panel p-8 rounded-2xl border-t border-white/10 hover:border-t-cyber-primary transition-all">
                    <div className={`${item.color} mb-6 drop-shadow-lg`}>{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}