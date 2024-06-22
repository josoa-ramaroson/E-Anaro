/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',      // Custom height
        '144': '36rem',      // Custom height
        'screen-92': '92vh',
        'screen-70': '70vh',
        'screen-50': '90vh',
      },

      width: {
        'screen-w-40': '40vw', // Custom viewport height
        'screen-w-50': '50vw', // Custom viewport height
        'screen-w-70': '70vw', // Custom viewport height
      },
      backgroundImage: {
        "linear": "linear-gradient(90deg, #7F31FF 20%, #2BB2FF)",
        'login': "url('../../public/login-bg.png')",
        'register': "url('../../public/register-bg.png')",
      },
      "colors": {
        primary: "#FA2FB5",
        secondary: "#100720",
        contrast: "#0B1228",
        "landing": "#07090D",
        features: "#10151E",

        error: "#B60909",
        warning: "#FF9A15",
        success: "#084F20"
      },
      boxShadow: {
        'right-lg': '-10px 0px 18px -3px rgba(0, 0, 0, 0.1), 10px 0px 8px -2px rgba(0, 0, 0, 0.05)',
        'hover-right-lg': '-15px 0px 18px -3px rgba(0, 0, 0, 0.2), 15px 0px 8px -2px rgba(0, 0, 0, 0.2)',
      },
      fontSize: {
        'title': '2.375rem', 
        'title-cours': '1.5rem', // Custom font size example
        // Custom font size example
      },
    },
  },
  plugins: [],
}