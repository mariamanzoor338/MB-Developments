/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            roboto: ["Roboto", "sans-serif"],
            inter: ["Inter", "sans-serif"],
        },
        extend: {
            aspectRatio: {
                "4/3": "4 / 3",
            },
        },
    },
    plugins: [],
};
