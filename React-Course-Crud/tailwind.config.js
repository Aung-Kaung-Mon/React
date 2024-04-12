/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
 
  ],
  theme: {
    fontFamily: {
      sans : ['Poppins', "Padauk" ] , 
      mono : ['PT Mono' ] , 
      serif :['Lora' , 'Padauk']
    },
    extend: {
      fontFamily : {
        heading : ['PT Sans' , 'Padauk']
      }
    },
  },
  plugins: [  require('flowbite/plugin')],
}

