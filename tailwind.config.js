/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: '#131313',
        'surface-dim': '#131313',
        'surface-bright': '#393939',
        'surface-container-lowest': '#0e0e0e',
        'surface-container-low': '#1b1b1b',
        'surface-container': '#1f1f1f',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#353535',
        'on-surface': '#e2e2e2',
        'on-surface-variant': '#c1c6d6',
        primary: '#428CFC', // From Brand & Style text
        'primary-light': '#acc7ff', // From colors section
        secondary: '#bcc7de',
        'secondary-container': '#3e495d',
        navy: '#1E293B',
        cyan: '#06B6D4',
      },
      fontSize: {
        'display-xl': ['96px', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        'headline-lg': ['64px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'soft': '4px',
        'container': '12px',
      },
      spacing: {
        'unit': '4px',
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '48px',
        'xxl': '96px',
      }
    },
  },
  plugins: [],
}
