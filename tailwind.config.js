/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
        screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'tw-pink':'#ec4899',
      'tw-violet':'#d946ef',
      'tw-brown':'#713f12',
      'tw-orange':'#ea580c',
      'tw-magenta':'#881337',
      'tw-purple':'#9333ea',
      'tw-white':'#ffffff',
      'tw-green':'#84cc16',
      'tw-red':'#ef4444',
      'tw-bluishGreen':'#0f766e'
    },
    extend: {},
  },
  plugins: [],
}
