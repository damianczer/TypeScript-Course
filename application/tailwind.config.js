/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3178C6',
                    hover: '#4C9AFF',
                    dark: '#235A97',
                },
            },
        },
    },
    plugins: [],
};