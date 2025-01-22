/**  @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        xs: "400px"
      },
      transitionProperty: {
        "transition-smooth": { "transition-property":"transition-all", "transition-timing-function":"ease-in-out", "transition-duration":"300ms"}
        
      },
      boxShadow: {
        "shadow-new": "box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;"
      },
     
    }
  },
  plugins: [],
}
