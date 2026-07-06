/** @type {import('tailwindcss').Config} */
module.exports = {
  // Fichiers scannés pour détecter les classes utilisées.
  content: ['./index.html'],
  // Classes générées dynamiquement en JS (chiffres du compte à rebours) :
  // on les met en safelist pour garantir leur présence dans le CSS final.
  safelist: ['inline-block', 'text-center', 'text-right', 'text-left', 'w-[.64em]', 'w-[.30em]'],
  theme: {
    extend: {
      colors: {
        mikado: { red: '#d33d24', ink: '#121214' },
      },
      fontFamily: {
        circe: ['circe', 'sans-serif'],
        sans: ['"Helvetica Neue"', 'Arial', 'Helvetica', 'sans-serif'],
      },
      keyframes: {
        lockNo: {
          '0%,100%': { transform: 'rotate(0)' },
          '15%': { transform: 'rotate(18deg)' },
          '32%': { transform: 'rotate(-18deg)' },
          '49%': { transform: 'rotate(14deg)' },
          '66%': { transform: 'rotate(-11deg)' },
          '83%': { transform: 'rotate(6deg)' },
        },
      },
      animation: {
        lockNo: 'lockNo .6s ease-in-out',
      },
    },
  },
  plugins: [],
};
