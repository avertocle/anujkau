/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#00947b',
                secondary: '#636900',
                tertiary: '#C7FFD8',
                accent: '#000000',
                content: '#555555',
            },
        },
    },
    plugins: [],
}


