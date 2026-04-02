
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
        secondary: {
          light: '#f3f4f6',
          DEFAULT: '#d1d5db',
          dark: '#4b5563',
        },
        success: '#22c55e',
        danger: '#ef4444',
        warning: '#f97316',
        info: '#3b82f6',
        light: '#f8f9fa',
        dark: '#1f2937',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
