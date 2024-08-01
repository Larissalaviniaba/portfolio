<template>
  <v-row class="custom-container-row">
    <v-col class="custom-col-info" cols="12" md="8" xs="9">
      <div class="custom-info">
        <h2>Oi 👋,</h2>
        <h2>Eu sou <span>Larissa Lavínia</span>,</h2>
        <h2>Desenvolvedora Full-Stack <span>.</span></h2>
        <p>
          Sou apaixonada por tecnologia e acredito fielmente no seu potencial
          transformador.
        </p>
      </div>
      <div class="custom-buttons">
        <v-btn color="red">
          <v-icon icon="mdi-linkedin" size="20" />
          <a
            href="https://www.linkedin.com/in/larissalaviniaba"
            target="_blank"
          >
            Linkedin
          </a>
        </v-btn>
        <v-btn color="red">
          <v-icon icon="mdi-github" size="20" />
          <a href="https://github.com/Larissalaviniaba" target="_blank">
            Github
          </a>
        </v-btn>
      </div>
    </v-col>
    <v-col class="custom-col-image" cols="12" md="4" xs="3">
      <div class="image-container">
        <img src="../../assets/icon-1.png" alt="Icon" class="icon-image" />
        <img
          src="../../assets/me.jpg"
          alt="Larissa Lavínia"
          class="main-image"
        />
      </div>
    </v-col>
  </v-row>
</template>
    
  <script>
export default {};
</script>
    
  <style scoped>
a {
  all: unset;
}

.custom-container-row {
  width: 80%; /* Ajustado para uma maior largura em dispositivos maiores */
  margin: auto;
  margin-top: 50px;
}

.custom-col-info,
.custom-col-image {
  padding: 0 10px; /* Ajusta o espaçamento interno das colunas */
}

.custom-info {
  padding: 20px;
}

.custom-info h2 {
  font-size: 2.2rem; /* Tamanho da fonte padrão */
}

.custom-buttons .v-btn {
  margin-left: 10px; /* Espaçamento entre botões */
}

.image-container {
  position: relative;
  margin-top: 28px;
}

.main-image {
  width: 80%;
  height: auto; /* Mantém a proporção da imagem */
  border-radius: 50px;
}

.icon-image {
  position: absolute;
  top: -4%;
  right: 12%;
  width: 70%; /* Ajuste o tamanho conforme necessário */
  height: auto; /* Mantém a proporção da imagem */
  z-index: 1; /* Garante que o ícone fique sobre a imagem principal */
}

span {
  color: var(--red);
}

/* Media Query para telas maiores */
@media (min-width: 1280px) {
  .custom-info h2 {
    font-size: 3.5rem; /* Aumenta o tamanho da fonte em telas maiores */
  }
}
</style>
  