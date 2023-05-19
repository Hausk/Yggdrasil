/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'darkblue': '#0B3861',
        'darkpurple': '#6F2DA8',
        'darkgray': '#333333',
        'prestigegold': '#FFD700',
        'dangerred': '#FF0000',
      }
    },
  },
  plugins: [],
}

