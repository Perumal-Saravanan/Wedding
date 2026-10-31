import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pause, Play, SkipForward } from 'lucide-react';
import config from '../config.json';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [hasAttemptedAutoplay, setHasAttemptedAutoplay] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Get playlist from config
  const playlist = config.music?.playlist || [];

  // Select random song on mount (page load)
  useEffect(() => {
    if (playlist.length > 0) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentTrackIndex(randomIndex);
    }
  }, []);

  // Update audio source when track changes
  useEffect(() => {
    if (audioRef.current && playlist.length > 0) {
      audioRef.current.src = playlist[currentTrackIndex].file;
      audioRef.current.volume = 0.5;
      
      if (isPlaying) {
        audioRef.current.play().catch(err => {
          console.log('Play error:', err);
        });
      }
    }
  }, [currentTrackIndex, playlist, isPlaying]);

  // Auto-play on load
  useEffect(() => {
    if (audioRef.current && playlist.length > 0 && !hasAttemptedAutoplay) {
      setHasAttemptedAutoplay(true);
      
      const attemptAutoplay = () => {
        if (audioRef.current) {
          audioRef.current.volume = 0.5;
          audioRef.current.play()
            .then(() => {
              setIsPlaying(true);
              console.log('✅ Autoplay successful');
            })
            .catch(err => {
              console.log('⚠️ Autoplay prevented');
              setIsPlaying(false);
            });
        }
      };

      attemptAutoplay();
      setTimeout(attemptAutoplay, 500);
      
      const startOnInteraction = () => {
        if (!isPlaying && audioRef.current) {
          audioRef.current.volume = 0.5;
          audioRef.current.play()
            .then(() => {
              setIsPlaying(true);
              console.log('✅ Music started after interaction');
            })
            .catch(() => {});
        }
      };

      document.addEventListener('click', startOnInteraction, { once: true });
      document.addEventListener('touchstart', startOnInteraction, { once: true });

      return () => {
        document.removeEventListener('click', startOnInteraction);
        document.removeEventListener('touchstart', startOnInteraction);
      };
    }
  }, [playlist, hasAttemptedAutoplay, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.volume = 0.5;
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => {
            console.log('Play error:', err);
            setIsPlaying(false);
          });
      }
    }
  };

  const handleNext = () => {
    if (playlist.length > 0) {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * playlist.length);
      } while (nextIndex === currentTrackIndex && playlist.length > 1);
      
      setCurrentTrackIndex(nextIndex);
    }
  };

  const handleEnded = () => {
    handleNext();
  };

  if (!playlist || playlist.length === 0) {
    return null;
  }

  const currentTrack = playlist[currentTrackIndex];

  return (
    <>
      <audio
        ref={audioRef}
        onEnded={handleEnded}
        preload="metadata"
      />

      {/* Horizontal Music Player Bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy/40 via-burgundy/60 to-burgundy/40 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Main player bar */}
          <motion.div
            animate={{ 
              width: isExpanded ? 'auto' : 'auto',
              minWidth: isExpanded ? '240px' : '130px'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative backdrop-blur-xl bg-gradient-to-r from-burgundy/90 via-burgundy/95 to-burgundy/90 border border-gold/30 rounded-full px-3 py-2 shadow-2xl flex items-center gap-2"
          >
            
            {/* Animated equalizer bars (clickable to expand) */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-0.5 cursor-pointer"
            >
              {[1, 2, 3, 4].map((bar) => (
                <motion.div
                  key={bar}
                  className="w-0.5 bg-gold rounded-full"
                  animate={isPlaying ? {
                    height: ['4px', '12px', '4px'],
                  } : {
                    height: '4px'
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: isPlaying ? Infinity : 0,
                    delay: bar * 0.1,
                    ease: "easeInOut"
                  }}
                  style={{ height: '4px' }}
                />
              ))}
            </motion.button>

            {/* Song title - Only show when expanded */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="min-w-[100px] max-w-[120px] overflow-hidden"
                >
                  <p className="font-sans text-[10px] text-gold font-semibold truncate leading-tight">
                    {currentTrack.title}
                  </p>
                  {currentTrack.artist && (
                    <p className="font-sans text-[8px] text-gold/60 truncate leading-tight">
                      {currentTrack.artist}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Play/Pause button */}
            <motion.button
              onClick={togglePlay}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-gold/50 transition-all relative overflow-hidden flex-shrink-0"
            >
              {/* Animated ring */}
              {isPlaying && (
                <motion.div
                  className="absolute inset-0 border-2 border-white rounded-full"
                  animate={{
                    scale: [1, 1.3],
                    opacity: [0.8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              )}
              
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 text-darkBg fill-darkBg" />
              ) : (
                <Play className="w-3.5 h-3.5 text-darkBg fill-darkBg ml-0.5" />
              )}
            </motion.button>

            {/* Next button */}
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-6 h-6 flex items-center justify-center text-gold hover:text-white transition-colors flex-shrink-0"
            >
              <SkipForward className="w-3.5 h-3.5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default MusicPlayer;
