import { createI18n } from 'vue-i18n';
async function loadLocaleMessages() {

  // Carregue os arquivos de tradução correspondentes para cada idioma
  const enMessages = import.meta.glob('/src/data/I18n/locales/en/**/*.json', { eager: true });
  const ptMessages = import.meta.glob('/src/data/I18n/locales/pt/**/*.json', { eager: true });
  const esMessages = import.meta.glob('/src/data/I18n/locales/es/**/*.json', { eager: true });

  // Função auxiliar para processar os arquivos e extrair o nome do arquivo
  function processMessages(messages) {
    const processedMessages = {};
    for (const path in messages) {
      const key = path.split("/")[5]
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

// Crie uma instância do i18n após o carregamento das mensagens
async function createI18nInstance() {
  const messages = await loadLocaleMessages();

  return createI18n({
    locale: 'pt',
    fallbackLocale: 'pt',
    messages,
  });
}

export default createI18nInstance();
