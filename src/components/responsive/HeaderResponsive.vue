<template>
  <v-app-bar class="bg-background">
    <v-app-bar-nav-icon variant="text" size="60" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <img v-if="this.theme.global.name == 'dark'" width="90" src="../../assets/myLogoDark.png" />

    <img v-else width="90" src="../../assets/myLogoLight.png" />

    <template v-slot:append>
      <ButtonTheme />
      <ButtonTranslate />
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" class="custom-navigation-drawer bg-background">
    <v-list v-for="item in menus" :key="item.href">
      <a :href="item.href" @click.stop="drawer = !drawer">{{ $t(item.title) }}</a>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useTheme } from "vuetify";
export default {
  props: {
    menus: {
      type: Array,
    },
  },
  data() {
    return {
      drawer: false,
      theme: useTheme(),
    };
  },
};
</script>

<style scoped>
a {
  font-size: 18px;
  margin: 30px;
}

.v-navigation-drawer {
  width: 300px !important;
  height: 250px !important;
}
</style>