

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // Active le mode sombre
  theme: {
    extend: {
      // Ajoute tes personnalisations ici, si nécessaire
      fontFamily: { inter: ['"Inter Tight"', 'sans-serif'],
        
      },
    },
  },
  plugins: [
    
  ],
};


