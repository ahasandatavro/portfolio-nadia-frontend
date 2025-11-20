import animatedPlugin from 'tailwindcss-animated';
import intersect from 'tailwindcss-intersect';
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Your project files
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#007bff',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, #1b0e2f, #0d051a 60%, #000000 100%)',
        'radial-dual': `
          radial-gradient(circle at 70% 70%, rgba(91, 33, 182, 0.7), transparent 50%), 
          radial-gradient(circle at 30% 30%, rgba(33, 150, 243, 0.5), transparent 50%), 
          linear-gradient(to bottom, #000000, #0d051a 90%, #000000)`,

      },
      keyframes: {
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'letter-slide': 'slide-in 0.3s ease-in forwards',
        'border-spin': 'border-spin 7s linear infinite',
      },
    },
  },
  corePlugins: {
    preflight: true, // Ensure Tailwind's reset applies
  },
  plugins: [animatedPlugin, intersect],
};
