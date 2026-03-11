/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ArrowRight, 
  Search, 
  User, 
  Star, 
  ShieldCheck, 
  Truck, 
  ChevronRight,
  Instagram,
  Twitter,
  Facebook
} from 'lucide-react';

// --- Types ---
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  tag?: string;
}

// --- Constants ---
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Home Kit 24/25",
    category: "Elite Series",
    price: 120,
    image: "https://images.unsplash.com/photo-1580087442694-9f302ca3d824?q=80&w=800&auto=format&fit=crop",
    tag: "New Arrival"
  },
  {
    id: 2,
    name: "Midnight Away Jersey",
    category: "Performance",
    price: 110,
    image: "https://images.unsplash.com/photo-1521412644187-c49fa0b4e6d5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Retro Heritage Edition",
    category: "Limited",
    price: 150,
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop",
    tag: "Limited Stock"
  },
  {
    id: 4,
    name: "Training V-Neck Jersey",
    category: "Essentials",
    price: 85,
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=800&auto=format&fit=crop",
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium uppercase tracking-widest">
            <a href="#" className="hover:opacity-50 transition-opacity">Shop</a>
            <a href="#" className="hover:opacity-50 transition-opacity">Collections</a>
            <a href="#" className="hover:opacity-50 transition-opacity">About</a>
          </div>
        </div>

        <a href="/" className="text-2xl font-bold tracking-tighter uppercase italic">
          Strvya<span className="font-light">Sport</span>
        </a>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block hover:opacity-50 transition-opacity"><Search className="w-5 h-5" /></button>
          <button className="hidden sm:block hover:opacity-50 transition-opacity"><User className="w-5 h-5" /></button>
          <button className="relative hover:opacity-50 transition-opacity">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
            </div>
            <div className="mt-12 flex flex-col gap-8 text-4xl font-bold tracking-tighter uppercase">
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Shop All</a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>New Arrivals</a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Collections</a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Heritage</a>
            </div>
            <div className="mt-auto pt-8 border-t border-black/10 flex flex-col gap-4 text-sm uppercase tracking-widest font-medium">
              <a href="#">Account</a>
              <a href="#">Support</a>
              <a href="#">Locations</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-block text-white/60 text-xs uppercase tracking-[0.3em] font-semibold mb-6">
            Spring / Summer 2026
          </span>
          <h1 className="text-white text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] uppercase mb-8">
            Define <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 italic">The Game.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-md mb-10 font-light leading-relaxed">
            Engineered for the elite. Designed for the streets. Experience the new standard of performance apparel.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/90 transition-all flex items-center gap-2 group">
              Shop Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/30 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
              View Lookbook
            </button>
          </div>
        </motion.div>
      </div>

      {/* Side Label */}
      <div className="absolute right-10 bottom-20 hidden lg:block">
        <div className="rotate-90 origin-right text-white/20 text-[10px] uppercase tracking-[1em] font-bold whitespace-nowrap">
          AUTHENTIC PERFORMANCE GEAR — EST 2026
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f5] rounded-2xl mb-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {product.tag && (
          <div className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {product.tag}
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
          Quick Add
        </button>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold mb-1">{product.category}</p>
          <h3 className="text-lg font-semibold tracking-tight group-hover:underline underline-offset-4">{product.name}</h3>
        </div>
        <p className="text-lg font-light">${product.price}</p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Authentic Quality", desc: "Every jersey is certified authentic and crafted with premium materials." },
    { icon: <Truck className="w-6 h-6" />, title: "Global Shipping", desc: "Fast, secure delivery to over 150 countries worldwide." },
    { icon: <Star className="w-6 h-6" />, title: "Elite Performance", desc: "Moisture-wicking technology designed for maximum comfort." }
  ];

  return (
    <section className="py-24 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-6">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{f.title}</h3>
            <p className="text-black/50 leading-relaxed max-w-[250px]">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-1">
            <a href="/" className="text-3xl font-bold tracking-tighter uppercase italic mb-8 block">
              Strvya<span className="font-light">Sport</span>
            </a>
            <p className="text-white/50 leading-relaxed mb-8 max-w-xs">
              Crafting the future of sports apparel. Minimalist aesthetics meets peak performance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-white/40">Shop</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white/60 transition-colors">All Jerseys</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Heritage Collection</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-white/40">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white/60 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-white/40">Newsletter</h4>
            <p className="text-sm text-white/50 mb-6">Join the inner circle for exclusive drops and early access.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-white/30 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-black px-4 rounded-full hover:bg-white/90 transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-white/30">
          <p>© 2026 Strvya Sport. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Featured Section */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 mb-4 block">Curated Selection</span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
                The New <br />
                <span className="italic font-light">Essentials.</span>
              </h2>
            </div>
            <a href="#" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1">
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Split Banner */}
        <section className="grid lg:grid-cols-2 h-[600px] lg:h-[800px]">
          <div className="relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1200&auto=format&fit=crop" 
              alt="Heritage" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-12 text-white">
              <h3 className="text-4xl font-bold uppercase tracking-tighter mb-4">Heritage Collection</h3>
              <p className="text-white/70 max-w-xs mb-8">Relive the greatest moments with our meticulously recreated vintage kits.</p>
              <button className="w-fit border border-white/50 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Explore Heritage
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1518005020250-6859b2827c6d?q=80&w=1200&auto=format&fit=crop" 
              alt="Performance" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-12 text-white">
              <h3 className="text-4xl font-bold uppercase tracking-tighter mb-4">Pro Performance</h3>
              <p className="text-white/70 max-w-xs mb-8">The exact same technology worn by the world's best athletes on the pitch.</p>
              <button className="w-fit border border-white/50 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Shop Pro
              </button>
            </div>
          </div>
        </section>

        <Features />

        {/* Instagram Feed Style Section */}
        <section className="py-24 bg-[#f9f9f9]">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">Worn By You</h2>
            <p className="text-black/40 uppercase tracking-widest text-xs font-bold">Tag @STRVYA to be featured</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 px-2">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="aspect-square overflow-hidden relative group">
                <img 
                  src={`https://picsum.photos/seed/sport${i}/600/600`} 
                  alt="Social" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Instagram className="text-white w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
