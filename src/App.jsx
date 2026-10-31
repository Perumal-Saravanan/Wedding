import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Story from './components/Story';
import Countdown from './components/Countdown';
import Details from './components/Details';
import Wishes from './components/RSVP';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import HeartClickEffect from './components/HeartClickEffect';
import { ChevronUp, Heart } from 'lucide-react';
import config from './config.json';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Heart click effect - global */}
      <HeartClickEffect />
      
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            key="cover"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0f 50%, #0a0a0a 100%)'
            }}
          >
            {/* Animated particles/stars background */}
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gold rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
              <motion.div
                className="absolute w-96 h-96 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)',
                  top: '10%',
                  left: '10%',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(128,0,32,0.3) 0%, transparent 70%)',
                  bottom: '10%',
                  right: '10%',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, -50, 0],
                  y: [0, 30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-4 max-w-5xl">
              {/* Top ornament */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="mb-8"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <motion.div 
                    className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"
                    animate={{ scaleX: [0, 1] }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Heart className="w-6 h-6 text-gold fill-gold" />
                  </motion.div>
                  <motion.div 
                    className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"
                    animate={{ scaleX: [0, 1] }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </div>
                <motion.p 
                  className="font-sans text-xs sm:text-sm tracking-[0.4em] text-gold/70 uppercase"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  You are invited
                </motion.p>
              </motion.div>

              {/* Main title with gradient animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                className="mb-8"
              >
                <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 leading-none">
                  <span className="gradient-text block mb-2">{config.bride.name}</span>
                  <motion.span 
                    className="text-gold text-6xl sm:text-8xl md:text-9xl block my-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    &
                  </motion.span>
                  <span className="gradient-text block">{config.groom.name}</span>
                </h1>
              </motion.div>

              {/* Date section */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="mb-10"
              >
                <div className="inline-block">
                  <div className="glass-effect rounded-2xl px-8 py-4 mb-4">
                    <p className="font-sans text-sm sm:text-base text-white/70 mb-2">
                      Celebrate with us
                    </p>
                    <p className="font-display text-xl sm:text-2xl md:text-3xl text-gold tracking-wide">
                      {config.metadata.coverDateRange}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Animated button */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                <motion.button
                  onClick={() => setIsOpen(true)}
                  className="group relative px-12 py-5 overflow-hidden rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gold via-yellow-300 to-gold"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ backgroundSize: '200% 100%' }}
                  />
                  
                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold to-yellow-300 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  
                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-3 font-sans font-bold text-sm sm:text-base tracking-widest text-darkBg">
                    OPEN INVITATION
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>

              {/* Bottom ornament */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-12"
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1 h-1 bg-gold rounded-full animate-pulse" />
                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                  <div className="w-1 h-1 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                  <div className="w-1 h-1 bg-gold rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
            <Story />
            <Countdown />
            <Details />
            <Wishes />
            <Footer />
            
            {/* Music Player - Fixed position */}
            <MusicPlayer />
            
            {/* Scroll to top button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  onClick={scrollToTop}
                  className="fixed bottom-6 right-6 z-50 p-3 bg-burgundy text-white rounded-full shadow-lg hover:bg-burgundy/90 transition-colors"
                  aria-label="Scroll to top"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronUp size={24} />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
