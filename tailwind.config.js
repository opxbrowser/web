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
		screens: {
			customsize: { raw: "(max-height: 768px)" },
			customsize2: { raw: "(min-height: 769px)" },
			"r-1440": { max: "1500px" },
			"r-1400": { max: "1400px" },
			"r-1200": { max: "1200px" },
			"r-1100": { max: "1100px" },
			"r-1040": { max: "1040px" },
			"r-1000": { max: "1000px" },
			"r-950": { max: "950px" },
			"r-900": { max: "900px" },
			"r-800": { max: "800px" },
			"r-680": { max: "680px" },
			"r-600": { max: "600px" },
			"r-500": { max: "500px" },
			"r-440": { max: "440px" },
			"r-400": { max: "400px" },
			"r-100": { max: "400px" },
		},
	},
	plugins: [],
};
