import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import config from '../config.json';

const Story = () => {
  return (
    <section id="couple-section" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-darkBg">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-gold/20 via-gold/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Decorative SVG elements */}
      <div className="absolute top-10 left-4 w-16 h-16 opacity-10">
        <img src="/img/lotus-flower.svg" alt="" className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-4 w-20 h-20 opacity-10">
        <img src="/img/indian-paisley.svg" alt="" className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 left-10 w-24 h-24 opacity-10">
        <img src="/img/rangoli-pattern.svg" alt="" className="w-full h-full" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 text-gold animate-pulse" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold mb-4 px-4">
            The Couple
          </h2>
          
          {/* Decorative divider */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <img src="/img/floral-divider.svg" alt="" className="w-32 sm:w-48 h-auto opacity-60" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative backdrop-blur-xl bg-darkCard/40 border border-gold/20 rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-gold/20 transition-all duration-500">
                {/* Corner ornament */}
                <div className="absolute top-2 left-2 w-8 h-8 opacity-30">
                  <img src="/img/corner-ornament.svg" alt="" className="w-full h-full" />
                </div>
                <div className="absolute bottom-2 right-2 w-8 h-8 opacity-30 rotate-180">
                  <img src="/img/corner-ornament.svg" alt="" className="w-full h-full" />
                </div>
                
                <h3 className="font-sans font-semibold text-xl sm:text-2xl text-gold/90 mb-3">
                  Groom
                </h3>
                <div className="text-2xl sm:text-3xl md:text-4xl font-display text-white mb-3 sm:mb-4">{config.groom.name}</div>
                <p className="font-sans text-xs sm:text-sm text-gray-400 mb-2">Son of</p>
                <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                  {config.groom.father} & {config.groom.mother}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative backdrop-blur-xl bg-darkCard/40 border border-gold/20 rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-gold/20 transition-all duration-500">
                {/* Corner ornament */}
                <div className="absolute top-2 left-2 w-8 h-8 opacity-30">
                  <img src="/img/corner-ornament.svg" alt="" className="w-full h-full" />
                </div>
                <div className="absolute bottom-2 right-2 w-8 h-8 opacity-30 rotate-180">
                  <img src="/img/corner-ornament.svg" alt="" className="w-full h-full" />
                </div>
                
                <h3 className="font-sans font-semibold text-xl sm:text-2xl text-gold/90 mb-3">
                  Bride
                </h3>
                <div className="text-2xl sm:text-3xl md:text-4xl font-display text-white mb-3 sm:mb-4">{config.bride.name}</div>
                <p className="font-sans text-xs sm:text-sm text-gray-400 mb-2">Daughter of</p>
                <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                  {config.bride.father} & {config.bride.mother}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 sm:mt-12 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative backdrop-blur-xl bg-darkCard/30 border border-gold/20 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
              <p className="font-sans text-sm sm:text-base md:text-lg text-gray-300 italic leading-relaxed">
                "{config.metadata.welcomeMessage}"
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
