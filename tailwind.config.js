module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        'xs':'475px',
        'sm': '640px',
        'md': '768px',
        'lg': '992px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      letterSpacing: {
        '1': '0em',
        '2': '0.025em',
        '3': '0.05em',
        '4': '0.1em',
        '5': '0.19em'
      },
      extend: {
        colors: {
          'main': ' #E5E5E5;',
          'primary': '#232536',
          'footer':'#2e3040',
          'yellow':'#FFD050',
          'hover':'#EDC14A',
          'purple':'#592EA9',
          'darkGrey':'#4C4C4C',
          'mediumGrey':'#6D6E76',
          'lightGrey':'#F4F4F4',
          'lavendar':'#F4F0F8',
          'lightYellow':'#FBF6EA'
          },
        fontFamily: {
          'inter':['Inter', 'sans-serif'],
          'sen':['Sen', 'sans-serif']
        },
      },
    },
    plugins: [],
  }