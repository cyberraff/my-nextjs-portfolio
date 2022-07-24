/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'

    theme: {
        extend: {
            fontFamily: {
                // Josefin: ['Josefin Sans'],
                aviera: [' Comic Neue'],
            },
            backgroundImage: {
                'hm-bg':
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/hm-bg.jpeg')",
                'blog-bg':
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/blog-bg-sm.jpg')",
            },
        },
    },
    plugins: [require('daisyui')],
}
