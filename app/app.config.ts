export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
      secondary: 'secondary',
      accent: 'accent',
      white: 'white',
      gray: 'gray',
      black: 'black'
    },
    button: {
      slots: {
        base: 'cursor-pointer rounded-[10px]'
      },
      variants: {
        color: {
          'white-50': 'hover:!text-white',
          'accent': '!text-white'
        },
        size: {
          '2xl': 'py-4.5 px-6'
        }
      }
    }
  }
})
