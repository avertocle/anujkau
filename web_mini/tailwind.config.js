/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#00ffd6',
                    200: '#00debb',
                    600: '#005d4e',
                },
            },
        },
    },
    plugins: [],
}


