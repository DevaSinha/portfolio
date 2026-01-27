/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a", // Nearly black
                surface: "#111111", // Slightly lighter for cards
                primary: "#22d3ee", // Cyan-400
                secondary: "#64ffda", // Teal-accent
                muted: "#8892b0", // Greyish text
                text: "#ccd6f6", // Off-white text
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
