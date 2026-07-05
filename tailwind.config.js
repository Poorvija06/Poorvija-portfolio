/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#07090A',
          soft: '#0C100E',
          surface: '#121613',
          border: '#1E2622',
        },
        emerald: {
          glow: '#34D399',
          DEFAULT: '#12B886',
          deep: '#0A6E4F',
          dim: '#0F4A38',
        },
        gold: {
          DEFAULT: '#D4AF37',
          soft: '#E8C766',
          dim: '#8A6E24',
        },
        ivory: {
          DEFAULT: '#F3F1EA',
          dim: '#C9C7BE',
        },
        sage: {
          DEFAULT: '#8A9690',
          dim: '#5C6662',
        },
        pearl: {
          DEFAULT: '#F6F5F0',
          surface: '#FFFFFF',
          border: '#E4E2D8',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'circuit-grid':
          'linear-gradient(rgba(18,184,134,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(18,184,134,0.06) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(18,184,134,0.18), transparent 60%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        glow: '0 0 40px rgba(18,184,134,0.25)',
        'glow-gold': '0 0 40px rgba(212,175,55,0.25)',
        glass: '0 8px 32px rgba(0,0,0,0.35)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-node': 'pulseNode 2.4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        marquee: 'marquee 28s linear infinite',
        'signal-travel': 'signalTravel 3.2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseNode: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(18,184,134,0.55)' },
          '50%': { boxShadow: '0 0 0 10px rgba(18,184,134,0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        signalTravel: {
          '0%': { transform: 'translateY(-10%)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { transform: 'translateY(110%)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
