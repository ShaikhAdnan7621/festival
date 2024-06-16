/** @type {import('tailwindcss').Config} */
module.exports = {
    //class based thame

    //class based thame
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                backgroundstars: "url('/eid/stars1.png')",
                herobackround: "url('/eid/heroimage1.jpg')",
            },
        },
    },
    plugins: [require("tailwindcss"), require("autoprefixer")],
};
