const {guessProductionMode} = require("@ngneat/tailwind");
const colors = require('tailwindcss/colors');

module.exports = {
  prefix: '',
  purge: {
    enabled: guessProductionMode(),
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'media',
  theme: {
    extend: {
      animation: {
        'typing-with-caret': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        'button': 'button 1s ease-in-out'
      },
      keyframes: {
        typing: {
          from: {width: '0'},
          to: {width: '100%'}
        },
        'blink-caret': {
          from: {'border-color': 'transparent'},
          to: {'border-color': 'transparent'},
          '50%': {'border-color': colors.red['400']}
        },
        button: {
          from: {}
        }
      },
      fontFamily: {
        'title': ['Comfortaa']
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')],
};
