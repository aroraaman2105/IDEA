/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0e17',
          card: '#0f1623',
          border: '#1a2332',
          hover: '#151d2e',
        },
        neon: {
          green: '#00ff88',
          greenDim: '#00cc6a',
          blue: '#00d4ff',
          blueDim: '#0099cc',
          purple: '#8b5cf6',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 255, 136, 0.15), 0 0 40px rgba(0, 212, 255, 0.1)',
        glowGreen: '0 0 30px rgba(0, 255, 136, 0.2)',
        glowBlue: '0 0 30px rgba(0, 212, 255, 0.2)',
        card: '0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.03)',
      },
      backgroundImage: {
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 255, 136, 0.15)' },
          '50%': { opacity: '0.9', boxShadow: '0 0 30px rgba(0, 255, 136, 0.25)' },
        },
      },
    },
  },
  plugins: [],
};
