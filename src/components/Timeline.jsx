import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-darkBg via-burgundy/10 to-darkBg relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-gold/15 via-gold/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-burgundy/15 via-burgundy/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-10 right-8 w-16 h-16 opacity-10">
        <img src="/img/lotus-flower.svg" alt="" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 left-8 w-20 h-20 opacity-10">
        <img src="/img/rangoli-pattern.svg" alt="" className="w-full h-full" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="font-sans text-xs sm:text-sm tracking-[0.3em] text-gold/70 uppercase mb-4">
            Our Journey
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold mb-6">
            Timeline & Events
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/70 italic max-w-xl mx-auto">
            Every moment leading to forever
          </p>
          <div className="flex justify-center mt-6">
            <img src="/img/floral-divider.svg" alt="" className="w-32 sm:w-40 h-auto opacity-50" />
          </div>
        </motion.div>

        {/* Beautiful Memory Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-darkCard/50 to-darkCard/30 border border-gold/30 rounded-3xl p-12 sm:p-16 md:p-20 shadow-2xl overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-3 left-3 w-12 h-12 opacity-20">
                <img src="/img/corner-ornament.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute bottom-3 right-3 w-12 h-12 opacity-20 rotate-180">
                <img src="/img/corner-ornament.svg" alt="" className="w-full h-full" />
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center"
              >
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold mb-6 leading-tight">
                  A Beautiful Memory ✨
                </h3>
                <div className="flex justify-center">
                  <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
