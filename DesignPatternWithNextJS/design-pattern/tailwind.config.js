/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/ui/**/**/*.{ts, tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
    // './src/components/**/**/*.{ts, tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: "#E55E2C",
      },
      fontSize: {
        h1: ["80px", { lineHeight: "80px", letterSpacing: "-0.032em" }],
      },
      fontFamily: {
        kaushan: ["Kaushan Script", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
