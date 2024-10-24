/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'translateX(0)' },   // En el inicio y fin, el elemento está en su posición original
          '50%': { transform: 'translateX(15px)' },     // En el medio, el elemento se desplaza 15px a la derecha
        }
      },
      animation: {
        sway: 'sway 1s ease-in-out infinite',           // Define la animación sway con 1s de duración, suavidad y repetición infinita
      },
    },
  },
  plugins: [],
}
