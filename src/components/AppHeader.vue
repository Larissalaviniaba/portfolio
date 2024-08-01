<template>
  <v-app-bar class="custom-container-header bg-background">
    <v-bottom-navigation 
      class="custom-container-navigation bg-background"
      density="compact"
    >
      <img 
        v-if="this.theme.global.name == 'dark'"
        src="../assets/myLogoDark.png" 
      />

      <img 
        v-else
        src="../assets/myLogoLight.png" 
      />

      <v-tabs
        align-tabs="center" 
        color="menu" 
        class="custom-tabs"
      >

        <v-tab>
          <a href="#">Inicio</a>
        </v-tab>

        <v-tab>
          <a href="#about">Sobre</a>
        </v-tab>

        <v-tab>
          <a href="#projects">Projetos</a>
        </v-tab>

        <v-tab>
          <a href="#contact">Contato</a>
        </v-tab>
      </v-tabs>

      <v-btn @click="toggleTheme">
        <v-icon icon="mdi-theme-light-dark" size="30"></v-icon>
      </v-btn>

      <v-btn value="translation">
        <v-icon icon="mdi-translate" size="30"></v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app-bar>
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
      this.theme.global.name = this.theme.global.current.dark ? "light" : "dark";
      localStorage.setItem("theme", this.theme.global.name);
    },
  },
};
</script>

<style scoped>
.custom-container-header {
  height: inherit;
  display: flex;
  box-shadow: none !important;
}

.custom-container-navigation {
  display: flex;
  height: 100% !important;
  gap: 10px;
  box-shadow: none !important;
}

.custom-container-navigation .v-btn {
  margin: 0 15px;
}

img {
  margin-right: 100px;
}

a {
  all: unset;
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
}

.v-tab {
  display: block;
  
}

.custom-tabs {
  display: flex;
  justify-content: center;
  --v-tabs-height: 90px;
}
</style>
