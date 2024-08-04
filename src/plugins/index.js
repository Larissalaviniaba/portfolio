// Plugins
import vuetify from './vuetify'
import VueI18n from './i18n'

const vueI18n = await VueI18n

export function registerPlugins (app) {
  app.use(vuetify)
  app.use(vueI18n)
}