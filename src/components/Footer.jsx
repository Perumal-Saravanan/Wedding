import React from 'react';
import { Heart } from 'lucide-react';
import config from '../config.json';

const Footer = () => {
  return (
    <footer className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-darkBg to-black relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto text-center max-w-5xl relative z-10">
        {/* Couple Names - Modern & Bold */}
        <div className="mb-8">
          <Heart className="w-10 h-10 mx-auto mb-6 text-gold/80" />
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-3 text-white tracking-wide">
            {config.bride.name} & {config.groom.name}
          </h2>
          <p className="font-sans text-sm sm:text-base text-gold/70 tracking-widest uppercase">
            {config.metadata.coverDateRange}
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto my-10" />

        {/* Invitation Message - Clean & Readable */}
        <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
          {config.footer.invitationMessage}
        </p>

        {/* Best Wishes From - Modern Typography */}
        <div className="mb-12">
          <p className="font-display text-xl sm:text-2xl text-gold/60 italic mb-4 tracking-wide">
            Best wishes from
          </p>
          <div className="space-y-2">
            {config.footer.wishesFrom.map((name, index) => (
              <p key={index} className="font-sans text-lg sm:text-xl text-white/90">
                {name}
              </p>
            ))}
          </div>
        </div>

        {/* Copyright - Minimal */}
        <div className="pt-8 border-t border-white/5">
          <p className="font-sans text-xs text-gray-600">
            © 2026 · Designed with love
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
