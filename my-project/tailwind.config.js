/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                width: 1200,
            },
            backgroundImage: {
                "hero-back": "url('../../assets/promotional.png')",
            },
        },
    },
    plugins: [],
};
