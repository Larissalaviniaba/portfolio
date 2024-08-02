<template>
  <transition name="fade" @after-leave="onAfterLeave">
    <v-alert 
      v-if="showAlert" 
      class="custom-alert" 
      :text="text" 
      :title="title" 
      :type="type"
    ></v-alert>
  </transition>
</template>

<script>
export default {
  props: {
    title: String,
    type: String,
    text: String,
    showAlert: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onAfterLeave() {
      // Aqui você pode adicionar lógica para lidar com o alerta após ele desaparecer
      console.log("Alerta desapareceu");
    }
  }
};
</script>

<style scoped>
.custom-alert {
  position: absolute;
  bottom: 150px; /* Ajuste conforme necessário */
  right: 20px;
  width: 300px; /* Ajuste a largura conforme necessário */
  z-index: 1000;
}

/* Transição de entrada e saída */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em <2.1.8 */ {
  opacity: 0;
}
</style>
