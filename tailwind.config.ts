import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      gridTemplateColumns: {
        // added new 4 column grid as new4
        'max2': 'repeat(2, max-content)',
        'max3': 'repeat(3, max-content)',
        'max4': 'repeat(4, max-content)',
        'a': 'repeat(2, 350px)',
        'b': "460px 340px"
      },
      colors: {
        "primary-1": "hsl(84, 36%, 42%)",
        "primary-2": "hsl(84, 35%, 31%)",
        "primary-3": "hsl(83, 35%, 20%)",
        "background": "hsl(0, 0%, 95%)",
        "foreground": "hsl(222.2, 47.4%, 11.2%)",
        "container": "hsl(0, 0%, 10%)",
        "container-foreground": "hsl(0, 0%, 70%)",
        "muted": "hsl(210, 40%, 96.1%)",
        "muted-foreground": "hsl(215.4, 16.3%, 46.9%)",
        "error": "hsl(0, 100%, 50%)",
        "success": "hsl(120, 60%, 50%)",
        "alert": "hsl(30, 100%, 50%)",
        "info": "hsl(200, 80%, 50%)",
        "transparent": "hsla(0, 0%, 100%, .2)",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineHeight: {
        'extra-tight': '1.2',
        'extra-loose': '2.5',
      },
      keyframes: {
        ripples: {
          '0%': { width: '0', height: '0', opacity: '0.5' },
          '100%': { width: '500px', height: '500px', opacity: '0'},
        }
      },
      animation: {
        ripples: 'ripples 0.6s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;