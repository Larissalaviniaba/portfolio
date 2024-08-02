<template>
  <v-row class="custom-container-row">
    <h2 color="red">Projetos</h2>
    <v-carousel
    height="400"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  </v-row>
</template>
    
<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>
    
<style scoped>
.custom-container-row {
  margin: auto;
  width: 80%;
}

h2 {
  margin: auto;
  font-size: 3rem;
  color: var(--red);
  margin-bottom: 30px;
}

</style>
  