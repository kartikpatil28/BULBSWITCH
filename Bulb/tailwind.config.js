module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      keyframes: {
        currentFlow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        'current-flow': 'currentFlow 1s linear infinite'
      }
    }
  },
  plugins: [],
};
