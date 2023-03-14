/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        ...colors,
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#8A4FFF",
                    200: "#F7F6FF",
                    400: "#C3BEF7",
                },
                secundary: {
                    DEFAULT: "#FB4FFF",
                },
                dark: {
                    DEFAULT: "#070600",
                    400: "#B5B4C2",
                    500: "#505050",
                },
                gray: {
                    DEFAULT: "#F5F5F5",
                },
                pink: {
                    DEFAULT: "#FF4FD8",
                },
            },
        },
        fontFamily: {
            sans: ["Work Sans", "sans-serif"],
        },
    },
    plugins: [],
};
