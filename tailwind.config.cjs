/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#111445",
        secondary: "#0DBBF8",
        secondary2: "#0C91C933",
        navlinks: "#F3FCFF33",
        paragraph: "#52525B",
        video: "#232DAD",
        gradient: "#0FB7F847",
        footerbg: "#E7F8FF",
        footerbg2: "#0C91C9",
      },
      text_shadow: {
        shadow: "linear-gradient(90deg, #44BCFF -0.55%, #44B0FF 22.86%, #772DF0 48.36%, #4A41BA 73.33%, #84B5FF 99.34%)",
        shadow2: "linear-gradient(90deg, #5BA7FF -0.55%, #6171FA 22.86%, #252EFF 48.36%, #96FF44 73.33%, #5ACDFE 99.34%)"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem', // 2px
        DEFAULT: '0.25rem', // 4px
        lg: '0.375rem', // 6px
        lg: '0.5rem', // 8px
        xl: '0.75rem', // 12px
        '2xl': '1rem', // 16px
        '3xl': '1.5rem', // 24px
        '4xl': '2rem', // 32px
        '5xl': '3rem', // 48px
        '6xl': '4rem', // 64px
        '7xl': '6rem', // 96px
        '8xl': '8rem', // 128px
        '9xl': '12rem', // 192px
        '10xl': '16rem'
    },

    fonts: {
      body: "Plus Jakarta Sans",
    },
    screens: {
      xs: '340px', // Extra small screens
      sm: '640px', // Small screens
      md: '768px', // Medium screens
      lg: '1024px', // Large screens
    },
  },
  plugins: [],
},

}
