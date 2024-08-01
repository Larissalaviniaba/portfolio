// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const customColors = {
  black: '#000112',
  veryDarkGrey: '#20212C',
  darkGrey: '#2B2C37',
  linesDark: '#3E3F4E',
  mediumGrey: '#828FA3',
  linesLight: '#E4EBFA',
  lightGrey: '#F4F7FD',
  white: '#FFFCF8',
  mainPurple: '#635FC7',
  mainPurpleHover: '#A8A4FF',
  purpleLight: 'rgba(99, 95, 199, 0.3)',
  purpleLightHover: 'rgba(99, 95, 199, 0.5)',
  red: '#D62828',
  redHover: '#FF9898',
  green: '#67E2AE',
  yellow: '#F1C40F',
}

export default createVuetify({
  theme: {
    themes: {
      light:{
        dark: false,
        colors: {
          background: customColors.white,
          textPrimary: customColors.black,
          textSecondary: customColors.mediumGrey,
          menu: customColors.red,
        },
      },
      dark:{
        dark: true,
        colors: {
          background: customColors.veryDarkGrey,
          textPrimary: customColors.white,
          textSecondary: customColors.mediumGrey,
          menu: customColors.white,
        },
      }
    }
  },
})
