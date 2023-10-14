/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#00fcb9",
        
"secondary": "#8465ce",
        
"accent": "#1bc464",
        
"neutral": "#212028",
        
"base-100": "#eae8ed",
        
"info": "#8a9fe5",
        
"success": "#218754",
        
"warning": "#cf880c",
        
"error": "#ea758b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}

