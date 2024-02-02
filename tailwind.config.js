/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#40128B',
        secondary: '#9336B4',
        tertiary:'#DD58D6',
        accent: '#FFE79B',
      },
    },
  },
  plugins: [],
}


