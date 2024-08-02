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
    <v-row class="custom-container-row-2">
      <p>
        <i
          >"Seja o autor da sua própria história, escreva cada capítulo com
          coragem e determinação, e transforme desafios em oportunidades para
          criar um enredo de sucesso. — Desconhecido"</i
        >
      </p>
    </v-row>
  </v-row>
</template>
    
<script>
export default {
  computed: {
    isMobile() {
      return this.$vuetify.display.width < 600 ? true : false;
    },
  },
};
</script>
    
  <style scoped>
a {
  all: unset;
}

.custom-container-row {
  width: 80%;
  min-height: calc(100vh - 97px);
  margin: auto;
  margin-top: 50px;
}

.custom-col-info,
.custom-col-image {
  padding: 0 10px;
}

.custom-info {
  padding: 20px 70px;
}

.custom-info h2 {
  font-size: 2rem;
}

.custom-buttons {
  margin-left: 80px;
}

.custom-buttons .v-btn {
  margin: 30px 0 0 10px;
}

.image-container {
  position: relative;
}

.main-image {
  width: 75%;
  height: auto;
  border-radius: 50px;
}

.icon-image {
  position: absolute;
  top: -4%;
  right: 17%;
  width: 70%;
  height: auto;
  z-index: 1;
}

span {
  color: var(--red);
}

.custom-container-row-2 {
  width: 65%;
  height: 3.5%;
  background-color: var(--yellow);
  position: absolute;
  top: 21%;
  left: 15%;
  z-index: 2;
  padding: 20px;
  border-radius: 20px;
}

.custom-container-row-2 p {
  padding: 5px;
  font-size: 15px;
}

@media (max-width: 627px) {
  .custom-container-row {
    margin-top: 0;
  }
  .custom-info {
    padding: 0 20px;
  }
  .custom-buttons {
    display: flex;
    margin: 0;
  }

  .image-container {
    margin-top: 40px;
    margin-left: 20px;
  }

  .custom-container-row-2 {
    width: 100%;
    height: 18%;
    position: static;
    margin-top: 20px;
  }

  .custom-container-row-2 p {
    font-size: 15px;
    padding: 10px;
  }
}

/* Media Query para telas maiores */
@media (min-width: 1400px) {
  .custom-container-row-1 {
    margin-top: 40px;
  }
  .image-container {
    position: relative;
    margin-top: 28px;
  }

  .custom-info h2 {
    font-size: 3.8rem;
  }

  .custom-container-row-2 {
    width: 65%;
    height: 4%;
    top:21.6%;
    left: 15%;
    z-index: 2;
    padding: 20px;
    border-radius: 20px;
  }

  .custom-container-row-2 p {
    padding: 20px;
    font-size: 20px;
  }
}
</style>
  