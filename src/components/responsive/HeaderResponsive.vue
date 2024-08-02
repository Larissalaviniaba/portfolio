<template>
  <v-app-bar class="bg-background">
    <v-app-bar-nav-icon
      variant="text"
      size="60"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <img
      v-if="this.theme.global.name == 'dark'"
      width="90"
      src="../../assets/myLogoDark.png"
    />

    <img v-else width="90" src="../../assets/myLogoLight.png" />

    <template v-slot:append>
      <ButtonTheme />
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" class="custom-navigation-drawer">
    <v-list v-for="item in menus" :key="item.href">
      <a :href="item.href" @click.stop="drawer = !drawer">{{ item.title }}</a>
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
.custom-navigation-drawer {
  width: 200px !important;
  height: 200px !important;
  background-color: var(--yellow);
  border-radius: 5px 50px 10px 50px;
}
.v-list {
  padding: 10px 20px;
}
a {
  all: unset;
  color: black;
  font-weight: 500;
}
a:hover {
  border-bottom: 2px solid black;
}
</style>
  