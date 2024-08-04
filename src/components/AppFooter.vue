<template>
  <v-footer height="80" class="bg-red">
    <p>{{ $t(`${this.translatePath}.developedBy`) }}<b>{{ $t(`${this.translatePath}.me`) }}</b></p>
    <p>
      <v-icon size="15" icon="mdi-copyright" /> {{ $t(`${this.translatePath}.rightsReserved`) }}
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

@media (max-width: 627px) {
  p {
    margin: 3px auto;
    font-size: 13px;
  }
}
</style>
