/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#00AF91',
                secondary: '#32E0C4',
                tertiary: '#C7FFD8',
                accent: '#0e0eaf',
                content: '#555555',
            },
        },
    },
    plugins: [],
}


