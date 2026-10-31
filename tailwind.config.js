/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        display: ['Cinzel', 'serif'],
      },
      colors: {
        cream: '#FFF8F0',
        gold: '#D4AF37',
        sage: '#9CAF88',
        burgundy: '#800020',
        darkBg: '#0a0a0a',
        darkCard: '#1a1a1a',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fadeInUp': 'fadeInUp 1s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)',
        'gradient-burgundy': 'linear-gradient(135deg, #800020 0%, #a00028 50%, #800020 100%)',
      },
    },
  },
  plugins: [],
}
