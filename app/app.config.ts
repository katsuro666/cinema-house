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
        base: 'cursor-pointer'
      },
      variants: {
        color: {
          'white-50': 'hover:!text-white'
        }
      }
    }
  }
})
