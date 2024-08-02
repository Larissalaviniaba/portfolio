<template>
  <!-- Header responsivo -->
  <HeaderResponsive v-if="isMobile" :menus="items" />

  <v-app-bar v-else class="custom-container-header bg-background">
    <v-bottom-navigation class="custom-container-navigation bg-background" density="compact">
      <img
        v-if="this.theme.global.name == 'dark'"
        src="../assets/myLogoDark.png"
      />

      <img v-else src="../assets/myLogoLight.png" />

      <v-tabs align-tabs="center" color="menu" class="custom-tabs">
        <v-tab v-for="item in items" :key="item.href">
          <a :href="item.href">{{ item.title }}</a>
        </v-tab>
      </v-tabs>

      <ButtonTheme />

      <v-btn value="translation">
        <v-icon icon="mdi-translate" size="30"></v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app-bar>
</template>

<script>
import HeaderResponsive from "@/components/responsive/HeaderResponsive";
import { useTheme } from "vuetify";

export default {
  data() {
    return {
      theme: useTheme(),
      drawer: false,
      group: null,
      items: [
        {
          title: "Inicio",
          href: "#",
        },
        {
          title: "Sobre",
          href: "#about",
        },
        {
          title: "Projetos",
          href: "#projects",
        },
        {
          title: "Contato",
          href: "#contact",
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.display.width < 600 ? true : false;
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
