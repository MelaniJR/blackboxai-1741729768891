/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(118, 255, 237)',
        secondary: 'rgb(90, 200, 201)',
        tertiary: 'rgb(79, 151, 165)',
      },
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
      },
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-pattern': `
          linear-gradient(45deg, rgb(118, 255, 237) 1px, transparent 1px),
          linear-gradient(-45deg, rgb(90, 200, 201) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'pattern': '40px 40px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
