import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeartClickEffect = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newHearts = [];
      const heartCount = 8; // Number of hearts per click
      
      for (let i = 0; i < heartCount; i++) {
        newHearts.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          angle: (360 / heartCount) * i,
          delay: i * 0.02,
        });
      }
      
      setHearts(prev => [...prev, ...newHearts]);
      
      // Remove hearts after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(h => !newHearts.find(nh => nh.id === h.id)));
      }, 1500);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              x: heart.x,
              y: heart.y,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              x: heart.x + Math.cos((heart.angle * Math.PI) / 180) * 100,
              y: heart.y + Math.sin((heart.angle * Math.PI) / 180) * 100 - 50,
              scale: [0, 1.2, 0],
              opacity: [1, 1, 0],
              rotate: [0, 360],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              delay: heart.delay,
              ease: "easeOut",
            }}
            className="absolute"
            style={{
              left: 0,
              top: 0,
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                fill="#D4AF37"
                stroke="#FFD700"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default HeartClickEffect;
