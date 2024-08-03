<template>
  <v-row class="custom-container-row">
    <v-col class="custom-col-image" cols="12" md="" xs="3">
      <div class="image-container">
        <img src="../../assets/icon-2.png" alt="Icon" class="icon-image" />
        <img
          src="../../assets/me-2.jpg"
          alt="Larissa Lavínia"
          class="main-image"
        />
      </div>
    </v-col>
    <v-col class="custom-col-info" cols="12" md="7" xs="9">
      <div class="custom-info">
        <h2><span>Um pouco sobre mim</span></h2>
        <p>
          Soteropolitana, aficionada por quebra-cabeças e The Big Bang Theory.
          Sou apaixonada por tecnologia e acredito fielmente no seu potencial
          transformador.
        </p>
        <br>
        <p>
          Como Desenvolvedora de Software full-stack já acumulo algumas
          experiências em front-end (Vue.js e React) e em back-end (Node.js), e
          estou constantemente buscando formas de aprimorar os meus
          conhecimentos.
        </p>
        <p>
          Tenho como objetivo profissional elevar o nível do meu conhecimento e
          continuar atuando como Desenvolvedora de Software Back-end e/ou
          Front-end.
        </p>
        <br>
        <p>
          Gosto de ser desafiada, pois os desafios impulsionam meu crescimento
          profissional. Autonomia e disciplina foram habilidades que desenvolvi
          estudando remotamente, tenho facilidade para trabalhar em equipe e
          comprometimento com os meus objetivos.
        </p>
      </div>
      <div class="custom-buttons">
        <v-btn color="red">
          <a
            :href="cv" download="curriculo-larissa-lavinia.pdf"
            target="_blank"
          >
            Baixar CV
          </a>
          <v-icon icon="mdi-cloud-download-outline" size="20" />
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import cv from '@/assets/CV/curriculo-larissa-lavinia.pdf'
export default {
  data() {
    return {
      cv
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.display.width < 600;
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
  padding: 20px 0;
}

.custom-info h2 {
  font-size: 2rem;
}

.custom-buttons {
  margin: 20px 0;
}

.image-container {
  position: relative;
}

.main-image {
  width: 80%;
  height: auto;
  border-radius: 50px;
}

.icon-image {
  position: absolute;
  top: -4%;
  left: -8%;
  width: 70%;
  height: auto;
  z-index: 1;
}

span {
  color: var(--red);
  text-transform: uppercase;
}

p {
  text-align: justify;
}

@media (max-width: 627px) {
  .custom-container-row {
    margin-top: 0;
    padding: 0;
  }
  .custom-buttons {
    display: flex;
    justify-content: center;
    margin: 30px 0;
  }
  .image-container {
    margin-top: 40px;
    margin-left: 20px;
  }
}

@media (min-width: 1400px) {
  .custom-info h2 {
    font-size: 3rem;
  }
}
</style>
