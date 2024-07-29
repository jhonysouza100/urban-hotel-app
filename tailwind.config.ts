import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '321px',
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
        "primary": "rgb(23, 204, 87)",
        "secondary": "hsl(0, 0%, 95%)",
        "body": "hsl(0, 0%, 95%)",
        "container": "hsl(0, 0%, 10%)",
        "light": "hsl(0, 0%, 70%)",
        "dark": "hsl(24, 3%, 28%)",
        "transparent": "hsla(0, 0%, 100%, .2)",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineHeight: {
        'extra-tight': '1.2',
        'extra-loose': '2.5',
      },
    },
  },
  plugins: [],
};
export default config;
