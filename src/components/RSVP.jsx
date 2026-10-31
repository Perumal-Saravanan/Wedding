import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Loader2, Heart, MessageCircle } from 'lucide-react';

const Wishes = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const wishData = {
      name: formData.name.trim() || 'Anonymous',
      message: formData.message
    };

    try {
      // Save to CSV via Vercel serverless function
      const API_URL = '/api/wishes';
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(wishData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Wish saved successfully:', result);
        
        setLoading(false);
        setSubmitted(true);
        setShowConfetti(true);
        
        // Stop confetti after 3 seconds
        setTimeout(() => {
          setShowConfetti(false);
        }, 3000);
        
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            message: '',
          });
        }, 4000);
      } else {
        throw new Error('Failed to save wish');
      }
      
    } catch (error) {
      console.error('Error submitting wish:', error);
      setLoading(false);
      alert('There was an error submitting your wish. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="wishes-section" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-darkBg">
      {/* Heart Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: -50,
                scale: 0,
                rotate: 0,
              }}
              animate={{
                y: window.innerHeight + 100,
                scale: [0, 1, 1, 0],
                rotate: Math.random() * 720 - 360,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: "easeOut",
              }}
              className="absolute"
            >
              <svg
                width={20 + Math.random() * 20}
                height={20 + Math.random() * 20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  fill={Math.random() > 0.5 ? "#D4AF37" : "#FF69B4"}
                  stroke={Math.random() > 0.5 ? "#FFD700" : "#FF1493"}
                  strokeWidth="1"
                />
              </svg>
            </motion.div>
          ))}
          
          {/* Cupid's Arrow */}
          <motion.div
            initial={{ x: -100, y: window.innerHeight / 2, rotate: -45 }}
            animate={{ 
              x: window.innerWidth + 100, 
              y: window.innerHeight / 2 - 200,
              rotate: 45,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute"
          >
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
              {/* Arrow shaft */}
              <line x1="10" y1="50" x2="70" y2="50" stroke="#D4AF37" strokeWidth="3" />
              {/* Arrow head */}
              <polygon points="70,40 90,50 70,60" fill="#D4AF37" />
              {/* Arrow feathers */}
              <line x1="15" y1="45" x2="10" y2="40" stroke="#D4AF37" strokeWidth="2" />
              <line x1="15" y1="55" x2="10" y2="60" stroke="#D4AF37" strokeWidth="2" />
            </svg>
          </motion.div>
        </div>
      )}

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 -right-32 w-96 h-96 bg-gradient-to-tl from-gold/20 via-gold/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 9, repeat: Infinity, delay: 1.5 }}
        />
      </div>

      {/* Decorative SVG elements */}
      <div className="absolute top-10 right-4 w-24 h-24 opacity-10">
        <img src="/img/lotus-flower.svg" alt="" className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 left-4 w-20 h-20 opacity-10">
        <img src="/img/indian-paisley.svg" alt="" className="w-full h-full" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-gold animate-pulse" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold mb-4 sm:mb-6 px-4">
            Share Your Wishes
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-4 px-4 leading-relaxed">
            Your blessings mean the world to us. Leave your heartfelt wishes for our special day.
          </p>
          <div className="flex justify-center">
            <img src="/img/floral-divider.svg" alt="" className="w-32 sm:w-48 h-auto opacity-60" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Wishes Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative backdrop-blur-xl bg-darkCard/40 border border-gold/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
              {/* Corner ornaments */}
              <div className="absolute top-2 left-2 w-8 h-8 opacity-20">
                <img src="/img/corner-ornament.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute bottom-2 right-2 w-8 h-8 opacity-20 rotate-180">
                <img src="/img/corner-ornament.svg" alt="" className="w-full h-full" />
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
                <h3 className="font-display text-2xl sm:text-3xl text-white">Leave a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block font-sans text-sm sm:text-base text-gold/90 font-semibold mb-2">
                    Your Name{' '}
                    <span className="text-gray-400 font-normal text-xs">
                      (Optional - Leave blank for Anonymous)
                    </span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading || submitted}
                    className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border-2 border-gold/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-darkBg/60 backdrop-blur-sm font-sans text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all placeholder:text-gray-500"
                    placeholder="Your name (or leave blank)"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-sans text-sm sm:text-base text-gold/90 font-semibold mb-2">
                    Your Wishes *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    disabled={loading || submitted}
                    className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border-2 border-gold/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-darkBg/60 backdrop-blur-sm font-sans text-white resize-none disabled:opacity-50 disabled:cursor-not-allowed transition-all placeholder:text-gray-500"
                    placeholder="Share your heartfelt blessings and wishes for our journey together..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading || submitted}
                  whileHover={!loading && !submitted ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!loading && !submitted ? { scale: 0.98 } : {}}
                  className="w-full py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-gold via-gold to-gold/80 text-darkBg font-sans font-semibold tracking-wide rounded-xl hover:shadow-lg hover:shadow-gold/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Your Wishes
                    </>
                  )}
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-xl backdrop-blur-sm"
                  >
                    <p className="text-sm sm:text-base text-green-300 font-sans font-medium">
                      Thank you for your beautiful wishes!
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative backdrop-blur-xl bg-darkCard/40 border border-gold/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <h4 className="font-display text-xl sm:text-2xl text-white mb-4">
                  Why Your Wishes Matter
                </h4>
                <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  As we embark on this beautiful journey together, your words of love, wisdom, and encouragement will be cherished forever.
                </p>
                <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                  Every message becomes a part of our wedding story, a memory we will treasure for a lifetime.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-darkCard/30 border border-gold/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h5 className="font-display text-lg sm:text-xl text-white mb-2">
                    Blessings Welcome
                  </h5>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Share your prayers, advice, favorite memories, or simply say congratulations!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h5 className="font-display text-lg sm:text-xl text-white mb-2">
                    Anonymous Option
                  </h5>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Feel free to leave your name blank - your wishes will be posted as Anonymous.
                  </p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-darkCard/20 border border-gold/20 rounded-2xl p-6 text-center shadow-2xl">
              <p className="font-display text-base sm:text-lg italic text-gray-300 leading-relaxed">
                May your love story continue to inspire us all. Wishing you endless joy and happiness.
              </p>
              <p className="font-sans text-xs sm:text-sm text-gray-400 mt-3">
                — From friends and family
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Wishes;
