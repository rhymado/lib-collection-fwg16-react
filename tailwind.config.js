/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        courier: '"Courier New", Courier, monospace',
      },
      colors: {
        beige: "beige",
        burly: "burlywood",
      },
    },
  },
  plugins: [],
};
