<template>
  <v-btn icon class="bg-background">
    <v-icon size="30" icon="mdi-translate"></v-icon>

    <v-menu activator="parent" location="bottom end" transition="fade-transition">
      <v-list class="bg-background" density="compact" min-width="250" rounded="lg" slim>
        <v-list-item @click="changeLanguage('en')" :title="$t(`${translatePath}.en`)" link></v-list-item>
        <v-list-item @click="changeLanguage('pt')" :title="$t(`${translatePath}.pt`)" link></v-list-item>
        <v-list-item @click="changeLanguage('es')" :title="$t(`${translatePath}.es`)" link></v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      translatePath: 'buttonTranslate',
    };
  },
  created() {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      this.$i18n.locale = savedLocale
    }
  },
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language;
      localStorage.setItem("locale", language);
    },
  },
};
</script>