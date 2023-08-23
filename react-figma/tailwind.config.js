/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'icon': "url('assets/icon.svg')"
      }
    },
  },
  plugins: [],

}

