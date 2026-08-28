/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7', // Primary Electric Ocean Blue
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
          },
          saffron: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316', // Primary Indian Saffron Orange
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
          },
          maroon: {
            400: '#fb7185',
            500: '#f43f5e',
            600: '#e11d48',
            700: '#be123c',
            800: '#9f1239', // Traditional Motif Maroon/Ruby
            900: '#881337',
            950: '#4c0519',
          },
          emerald: {
            400: '#34d399',
            500: '#10b981', // Tricolor Weave Green
            600: '#059669',
            700: '#047857',
            800: '#065f46',
          },
          navy: {
            800: '#0d1836',
            900: '#091124',
            950: '#050a18', // Deep luxury cosmic navy
          }
        },
        slate: {
          950: '#050a18',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(2, 132, 199, 0.18), rgba(249, 115, 22, 0.12), transparent 70%)',
      }
    },
  },
  plugins: [],
}

