<template>
  <transition name="fade">
    <v-alert 
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
  },
};
</script>

<style scoped>
.custom-alert {
  position: absolute;
  bottom: 150px;
  right: 20px;
  width: 300px;
  z-index: 1000;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
