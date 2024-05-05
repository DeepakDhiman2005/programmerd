/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        boton: {
          "0%, 100%": { borderColor: "auto" },
          "50%": { borderColor: "transparent" },
        },
        bottonDown: {
          "0%, 30%": { transform: "translateY(5%) rotate(6deg)", color: "auto" },
          "30%, 60%": { transform: "translateY(10%) rotate(-6deg)", color: "#ff8d8d" },
          "60%, 90%": { transform: "translateY(25%) rotate(6deg)", color: "#f1dcdc" },
          "100%": { transform: "translateY(0) rotate(0deg)", color: "auto" }
        }
      },
      animation: {
        "bottom-line": "boton 1s linear infinite",
        "bottom-down": "bottonDown 1s linear infinite"
      }
    },
  },
  plugins: [],
}
