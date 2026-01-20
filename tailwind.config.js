/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./main.tsx",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: '#588157',        // Fern
        secondary: '#A3B18A',      // Dry Sage
        accent: '#344E41',         // Pine Teal
        
        // New natural earthy palette
        'bg-light': '#F9FAFB',     // Light grey main background
        'bg-alt': '#DAD7CD',       // Dust grey alternative background
        'bg-card': 'rgba(255, 255, 255, 0.8)',  // Card background
        'bg-hover': '#DAD7CD',     // Hover background
        
        'text-dark': '#2D3436',    // Dark text
        'text-muted': '#636E72',   // Muted text
        'text-light': '#F9FAFB',   // Light text
        
        'accent-fern': '#588157',  // Fern (primary)
        'accent-hunter': '#3A5A40',// Hunter Green (hover)
        'accent-pine': '#344E41',  // Pine Teal (emphasis)
        'accent-sage': '#A3B18A',  // Dry Sage (secondary)
        
        // Legacy colors (for compatibility)
        'slate-grey': '#3A5A40',
        'vanilla-custard': '#DAD7CD',
        'honey-bronze': '#588157',
        'brown-red': '#344E41',
        'night-bordeaux': '#2D3436',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(88, 129, 87, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(52, 78, 65, 0.3)' }
        }
      }
    },
  },
  plugins: [],
}