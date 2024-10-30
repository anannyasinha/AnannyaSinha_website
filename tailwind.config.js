/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                charcoal: '#2D3142',
                silver: '#BFC0C0',
                pearl: '#F7F7F7',
            },
        },
    },
    plugins: [],
};