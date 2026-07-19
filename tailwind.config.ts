import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Assuming Inter from Google Fonts
      },
      colors: {
        brand: {
          primary: '#0B3D9B',
          container: '#0052CC',
        },
        surface: {
          highest: '#D7E2FF',
          low: '#F1F3FF',
          bg: '#F9F9FF',
        },
        slate: {
          900: '#041B3C',
          600: '#4F5F7B',
          300: '#C3C6D6',
        },
        semantic: {
          success: '#69F0AE',
          error: '#D32F2F',
          warning: '#FFB300',
        }
      },
    },
  },
  plugins: [],
};
export default config;