// styles
import '@/styles/main.css'

// main.js
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import { createI18nInstance } from '@/plugins/i18n'

async function registerPlugins(app) {
  const vueI18n = await createI18nInstance();
  
  app.use(vuetify);
  app.use(vueI18n);
}

async function bootstrap() {
  const app = createApp(App);
  
  await registerPlugins(app);

  app.mount('#app');
}

bootstrap();
