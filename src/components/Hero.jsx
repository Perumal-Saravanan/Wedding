import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowDown } from 'lucide-react';
import config from '../config.json';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#couple-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 px-4 bg-gradient-to-b from-darkBg via-darkCard to-darkBg">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(128,0,32,0.15),transparent_50%)]" />
      </div>

      {/* Decorative SVG patterns */}
      <motion.img
        src="/img/mandala-pattern.svg"
        alt=""
        className="absolute top-20 left-10 w-32 h-32 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.img
        src="/img/lotus-flower.svg"
        alt=""
        className="absolute bottom-20 right-10 w-24 h-24 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-gold" />
          </motion.div>
          
          <motion.h2 
            className="font-sans text-xs sm:text-sm tracking-[0.4em] text-gold/70 uppercase mb-6 sm:mb-8"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            The Wedding of
          </motion.h2>
          
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6 leading-tight">
            <motion.span 
              className="gradient-text block"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {config.bride.name}
            </motion.span>
            <motion.span 
              className="text-gold text-5xl sm:text-7xl md:text-8xl my-4 block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            >
              &
            </motion.span>
            <motion.span 
              className="gradient-text block"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {config.groom.name}
            </motion.span>
          </h1>
          
          <motion.div 
            className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.1, type: "spring" }}
          >
            <div className="w-12 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="font-sans text-base sm:text-xl md:text-2xl text-white/90 px-2 whitespace-nowrap">
              {config.metadata.coverDateRange}
            </p>
            <div className="w-12 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
          </motion.div>
          
          <motion.p 
            className="font-sans text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-8 sm:mb-12 px-4 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Join us as we celebrate our love and the beginning of our journey together
          </motion.p>

          <motion.button
            onClick={scrollToNext}
            className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors group"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            aria-label="Scroll to couple details"
          >
            <span className="font-sans text-sm tracking-wider">Explore our story</span>
            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <img src="/img/floral-divider.svg" alt="" className="w-full opacity-30" />
      </div>
    </section>
  );
};

export default Hero;
