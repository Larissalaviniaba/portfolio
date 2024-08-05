<template>
  <v-footer height="80" class="bg-red">
    <p>{{ $t(`${this.translatePath}.developedBy`) }}<b>{{ $t(`${this.translatePath}.me`) }}</b></p>
    <p>
      <v-icon size="15" icon="mdi-copyright" /> {{ $t(`${this.translatePath}.year`) + " | " + $t(`${this.translatePath}.me`) + " | " + $t(`${this.translatePath}.protect`) }}
    </p>

  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      translatePath: 'footer',
    }
  }
}
</script>

<style scoped>
.v-footer {
  display: flex;
  flex-direction: column;
}

p {
  color: black;
}

@media (max-width: 957px) {
  p {
    margin: 3px auto;
    font-size: 13px;
  }
}
</style>
