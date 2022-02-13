module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Montserrat', 'Open Sans', 'sans-serif'],
        'heading': ['Bebas Neue', 'New Times Roman', 'new'],
        'basic': ['Open Sans'],
      },
      screens: {
        '3xl': '1537px',
        '4k': '2470px',
        '8k': '3000px',
      },
      animation: {
        bounce: 'bounce 2s ease-in-out infinite',
        wiggle: 'wiggle 4s ease-in-out infinite',
        wiggle2: 'wiggle 4s infinite',
        wiggle3: 'wiggle 2.5s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'scale(0.9) rotate(2deg)',
          },
          '50%': {
            transform: 'scale(0.8) rotate(1deg)',
          }
        },
        wiggle2: {
          '0%, 100%': {
            transform: 'scale(0.9) rotate(0deg)',
          },
          '50%': {
            transform: 'scale(1) rotate(-2deg)',
          }
        },
        wiggle3: {
          '0%, 100%': {
            width: '2',
          },
          '50%': {
            transform: 'scale(0.8) rotate(4deg)',
          }
        }
      }
    },
  },
  plugins: [],
}
