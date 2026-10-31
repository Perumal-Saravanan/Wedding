import React from 'react';
import { Heart } from 'lucide-react';
import config from '../config.json';

const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 bg-darkBg border-t border-gold/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <Heart className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-gold animate-pulse" />
        <p className="font-display text-xl sm:text-2xl md:text-3xl mb-2 text-white">
          {config.groom.name} & {config.bride.name}
        </p>
        <p className="font-sans text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
          {config.metadata.coverDateRange}
        </p>
        <div className="flex justify-center mb-3 sm:mb-4">
          <img src="/img/floral-divider.svg" alt="" className="w-20 sm:w-24 h-auto opacity-40" />
        </div>
        <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-4 mb-6">
          With hearts full of joy, we cordially invite you to grace our wedding celebrations and bless us as we begin our new chapter together.
        </p>
        <div className="font-display text-burgundy/80">
          <p className="text-2xl sm:text-3xl md:text-4xl mb-2 italic" style={{ color: '#8B4C5C' }}>
            Best wishes from
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
            Mr. Sai Sagar & Mrs. Manjula,
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
            S. Perumal (a) Shakthi
          </p>
        </div>
        <p className="font-sans text-xs text-gray-500 mt-6 sm:mt-8">
          © 2026 | Designed with love
        </p>
      </div>
    </footer>
  );
};

export default Footer;
