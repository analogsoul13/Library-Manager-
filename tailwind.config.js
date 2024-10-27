/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        bgImg:"url('/bg-background.jpg')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
}

