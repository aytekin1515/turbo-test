/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'sm': '500px',
     
      'md': '768px',
      
      'lg': '1024px',
     
      'xl': '1280px',

      '2xl': '1536px',
    },
    theme: {
      container: {
        padding:'2 rem',
          screens: {
            sm: '100%',  
            md: '80%',   
            lg: '1024px',  
            xl: '1200px',  
        },
      },
    },
    extend: {},
  },
  plugins: [],
}

