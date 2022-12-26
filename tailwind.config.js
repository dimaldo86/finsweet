module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'main': ' #E5E5E5;',
          'primary': '#232536',
          'yellow':'#FFD050',
          'purple':'#592EA9',
          'darkGrey':'#4C4C4C',
          'mediumGrey':'#6D6E76',
          'lightGrey':'#F4F4F4',
          'lavendar':'#F4F0F8',
          'lightYellow':'#FBF6EA'
          },
        fontFamily: {
          'sen':['Sen', 'sans-serif']
        },
      },
    },
    plugins: [],
  }