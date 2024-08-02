<template>
  <v-footer height="80" class="bg-red">
  <P>Desenvolvido com 💛 por <b>Larissa Lavínia</b></P>
  <p>
    <v-icon size="15" icon="mdi-copyright"/> 2024 | Larissa Lavínia | todos osdireitos reservados
  </p>
    
  </v-footer>
</template>

<script setup>
  
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
