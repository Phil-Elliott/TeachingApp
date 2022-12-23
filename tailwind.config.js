/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        Primary: "#0f4189",
        Secondary: "#ff793f",
        Tertiary: "#666a7b",
        LightBg: "#f2f8ff",
      },
    },
  },
  plugins: [],
};
