import { type Config } from 'tailwindcss';

export default {
  content: ['src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // CMU-inspired red
          DEFAULT: '#D72631',
          dark: '#B01F28',
        },
      },
      fontFamily: {
        sans: ['Inter', 'var(--font-sans)'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
