/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  assets:[
    './public/assets/fonts/*.{tff}'
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT:"#F8A129",
          70: "rgba(250, 180,82,0.7)"
        },
        secondary:{
          DEFAULT:"#8A5700",
        },
        accent:{
          DEFAULT:"#625078",
        },
        white:{
          DEFAULT:"#FFFFFF",
        },
        black:{
          DEFAULT:"#311D02",
        },
      },
      fontFamily:{
        'futura': ['Futura', 'sans-serif'],
        'futura-bold' : ['FuturaBold', 'sans-serif'],
        'futura-italic-bold': ['FuturaBoldItalic', 'sans-serif']
      } 
    }
  },
  plugins: [],
};
