// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const customColors = {
  veryDarkGrey: '#20212C',
  linesLight: '#E4EBFA',
  lightGrey: '#F4F7FD',
  white: '#FFFCF8',
  red: '#D62828',
  yellow: 'rgba(252, 191, 73, 0.5)',
}

export default createVuetify({
  theme: {
    themes: {
      light:{
        dark: false,
        colors: {
          background: customColors.white,
          yellow: customColors.yellow,
          bgCard: customColors.lightGrey
        },
      },
      dark:{
        dark: true,
        colors: {
          background: customColors.veryDarkGrey,
          yellow: customColors.yellow,
          bgCard: customColors.linesLight
        },
      }
    }
  },
})
