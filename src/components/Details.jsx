import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, ExternalLink } from 'lucide-react';
import config from '../config.json';

const Details = () => {
  const handleAddToCalendar = (eventType) => {
    let event;
    
    if (eventType === 'reception') {
      event = {
        text: `${config.bride.name} & ${config.groom.name} - Wedding Reception`,
        dates: '20261119T183000Z/20261119T203000Z', // UTC time for 6:00 PM IST
        details: 'Join us for the wedding reception celebration',
        location: config.venue.fullAddress,
      };
    } else if (eventType === 'muhurtham') {
      event = {
        text: `${config.bride.name} & ${config.groom.name} - Muhurtham Ceremony`,
        dates: '20261120T020000Z/20261120T033000Z', // UTC time for 7:30 AM - 9:00 AM IST
        details: 'Join us for the auspicious Muhurtham ceremony',
        location: config.venue.fullAddress,
      };
    }
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="details-section" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-darkBg relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-tl from-gold/20 via-gold/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Decorative SVG patterns */}
      <div className="absolute top-10 left-4 w-20 h-20 opacity-10">
        <img src="/img/rangoli-pattern.svg" alt="" className="w-full h-full" />
      </div>
      <div className="absolute top-1/3 right-4 w-24 h-24 opacity-10">
        <img src="/img/lotus-flower.svg" alt="" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 left-10 w-20 h-20 opacity-10">
        <img src="/img/mandala-pattern.svg" alt="" className="w-full h-full" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold mb-4 sm:mb-6 px-4">
            Celebration Details
          </h2>
          <div className="flex justify-center">
            <img src="/img/floral-divider.svg" alt="" className="w-32 sm:w-48 h-auto opacity-60" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative backdrop-blur-xl bg-darkCard/40 border border-gold/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
              {/* Decorative corner */}
              <div className="absolute top-2 left-2 w-10 h-10 opacity-20">
                <img src="/img/corner-ornament.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute bottom-2 right-2 w-10 h-10 opacity-20 rotate-180">
                <img src="/img/corner-ornament.svg" alt="" className="w-full h-full" />
              </div>
              
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-6 sm:mb-8 text-center">
                Reception
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-sans font-semibold text-sm sm:text-base text-gold/90">Date</p>
                    <p className="font-sans text-sm sm:text-base text-gray-300">{config.events.reception.displayDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-sans font-semibold text-sm sm:text-base text-gold/90">Time</p>
                    <p className="font-sans text-sm sm:text-base text-gray-300">{config.events.reception.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-sans font-semibold text-sm sm:text-base text-gold/90">Venue</p>
                    <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                      {config.venue.name}<br />
                      {config.venue.address}<br />
                      {config.venue.city}, {config.venue.state} {config.venue.pincode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Add to Calendar Button */}
              <div className="mt-6 text-center">
                <motion.button
                  onClick={() => handleAddToCalendar('reception')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold via-yellow-500 to-gold text-darkBg rounded-full font-sans font-bold text-sm shadow-lg hover:shadow-gold/50 transition-all duration-300"
                >
                  <Calendar className="w-4 h-4" />
                  <span>+ CALENDAR</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative backdrop-blur-xl bg-darkCard/40 border border-gold/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
              {/* Decorative corner */}
              <div className="absolute top-2 left-2 w-10 h-10 opacity-20">
                <img src="/img/corner-ornament.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute bottom-2 right-2 w-10 h-10 opacity-20 rotate-180">
                <img src="/img/corner-ornament.svg" alt="" className="w-full h-full" />
              </div>
              
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-6 sm:mb-8 text-center">
                Muhurtham
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-sans font-semibold text-sm sm:text-base text-gold/90">Date</p>
                    <p className="font-sans text-sm sm:text-base text-gray-300">{config.events.muhurtham.displayDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-sans font-semibold text-sm sm:text-base text-gold/90">Time</p>
                    <p className="font-sans text-sm sm:text-base text-gray-300">{config.events.muhurtham.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-sans font-semibold text-sm sm:text-base text-gold/90">Venue</p>
                    <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                      {config.venue.name}<br />
                      {config.venue.address}<br />
                      {config.venue.city}, {config.venue.state} {config.venue.pincode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Add to Calendar Button */}
              <div className="mt-6 text-center">
                <motion.button
                  onClick={() => handleAddToCalendar('muhurtham')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold via-yellow-500 to-gold text-darkBg rounded-full font-sans font-bold text-sm shadow-lg hover:shadow-gold/50 transition-all duration-300"
                >
                  <Calendar className="w-4 h-4" />
                  <span>+ CALENDAR</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3 }}
          className="mt-8 sm:mt-12 text-center relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative backdrop-blur-xl bg-darkCard/30 border border-gold/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <MapPin className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-gold" />
            <h4 className="font-display text-xl sm:text-2xl text-white mb-3 sm:mb-4">Location</h4>
            <p className="font-sans text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              {config.venue.landmark},<br />
              {config.venue.address}, {config.venue.city},<br />
              {config.venue.state} {config.venue.pincode}
            </p>
            <a 
              href={config.venue.mapUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold via-gold to-gold/80 text-darkBg rounded-lg hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 text-sm sm:text-base font-sans font-semibold"
              aria-label="Open venue location in Google Maps"
            >
              <MapPin size={18} />
              <span>View on Google Maps</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Details;
