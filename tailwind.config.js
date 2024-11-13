/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./App.tsx",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#FFFFFF',
        menu: '#1C1917',
        border: '#18181B',
        card: '#09090B',
        muted: {
          DEFAULT: '#71717A',
          foreground: '#A1A19A',
        },
      },
      fontFamily: {
        'poppins-regular': ['Poppins_400Regular'],
        'poppins-bold': ['Poppins_700Bold'],
        'roboto-regular': ['Roboto_400Regular'],
        'roboto-bold': ['Roboto_700Bold'],
        'open-sans-regular': ['OpenSans_400Regular'],
        'open-sans-bold': ['OpenSans_700Bold'],
        'manrope-regular': ['Manrope_400Regular'],
        'manrope-bold': ['Manrope_700Bold'],
      },
    },
  },
  plugins: [],
}