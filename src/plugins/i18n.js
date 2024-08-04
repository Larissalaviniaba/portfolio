// i18n.js
import { createI18n } from 'vue-i18n';

async function loadLocaleMessages() {
  const enMessages = import.meta.glob('/src/data/I18n/locales/en/**/*.json', { eager: true });
  const ptMessages = import.meta.glob('/src/data/I18n/locales/pt/**/*.json', { eager: true });
  const esMessages = import.meta.glob('/src/data/I18n/locales/es/**/*.json', { eager: true });

  function processMessages(messages) {
    const processedMessages = {};
    for (const path in messages) {
      const key = path.split("/")[5];
      const fileName = path.split(`${key}/`).pop().replace('.json', '');
      processedMessages[fileName] = messages[path];
    }
    return processedMessages;
  }

  const messages = {
    en: processMessages(enMessages),
    pt: processMessages(ptMessages),
    es: processMessages(esMessages)
  };
  return messages;
}

export async function createI18nInstance() {
  const messages = await loadLocaleMessages();

  return createI18n({
    locale: 'pt',
    fallbackLocale: 'pt',
    messages,
  });
}
