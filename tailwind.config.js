/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes:{
        wiggle:{
          "0%,100%":{
            transform:"rotate(-10deg)", background:"rgb(74 222 128)", color:"black"
          },
          "50%":{
            transform:"rotate(10deg)"
          }
        }

      },
      animation:{
        wiggle:"wiggle 300ms ease-in-out"
      }
 
    },
  },
  plugins: [],
}
// animation name animation duaration
