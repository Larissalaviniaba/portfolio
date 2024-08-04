<template>
  <v-btn @click="toggleTheme">
    <v-icon icon="mdi-brightness-6" size="30"></v-icon>
  </v-btn>
</template>

<script>
import { useTheme } from "vuetify";

export default {
  data() {
    return {
      theme: useTheme(),
    };
  },
  created() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      this.theme.global.name = savedTheme;
    }
  },
  methods: {
    toggleTheme() {
      this.theme.global.name = this.theme.global.current.dark
        ? "light"
        : "dark";
      localStorage.setItem("theme", this.theme.global.name);
    },
  },
};
</script>