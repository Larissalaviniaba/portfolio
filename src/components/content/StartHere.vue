<template>
  <v-row class="custom-container-row">
    <!-- Conteúdo existente -->
    <v-col class="custom-col-info" cols="12" md="8" xs="9">
      <div class="custom-info">
        <h2>{{ $t(`${this.translatePath}.salutation.0`) }}</h2>
        <h2>{{ $t(`${this.translatePath}.salutation.1`) }}<span>{{ $t(`${this.translatePath}.salutation.2`) }}</span>,
        </h2>
        <h2>{{ $t(`${this.translatePath}.salutation.3`) }}<span>.</span></h2>
        <p>
          {{ $t(`${this.translatePath}.salutation.4`) }}
        </p>
      </div>
      <div class="custom-buttons">
        <v-btn>
          <v-icon icon="mdi-linkedin" size="20" />
          <a href="https://www.linkedin.com/in/larissalaviniaba" target="_blank">
            {{ $t(`${this.translatePath}.contacts.linkedin`) }}
          </a>
        </v-btn>
        <v-btn>
          <v-icon icon="mdi-github" size="20" />
          <a href="https://github.com/Larissalaviniaba" target="_blank">
            {{ $t(`${this.translatePath}.contacts.github`) }}
          </a>
        </v-btn>
      </div>
    </v-col>
    <v-col class="custom-col-image" cols="12" md="4" xs="3">
      <div class="image-container">
        <img src="../../assets/icon-1.png" alt="Icon" class="icon-image" />
        <img src="../../assets/me.jpg" alt="Larissa Lavínia" class="main-image" />
      </div>
    </v-col>
    <v-row class="custom-container-row-2">
      <p>
        <i>{{ $t(`${this.translatePath}.phrase`) }}</i>
      </p>
    </v-row>

    <!-- Ícones flutuantes -->
    <v-icon class="floating-icon floating-icon-1" icon="mdi-triangle" size="110" />
    <v-icon class="floating-icon floating-icon-2" icon="mdi-triangle" size="74" />
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      translatePath: 'startHere'
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.display.width < 600 ? true : false;
    },
  },
};
</script>

<style scoped>
.custom-container-row {
  width: 80%;
  min-height: calc(100vh - 97px);
  margin: auto;
  margin-top: 50px;
}

.custom-info {
  padding: 0px 70px;
}

h2 {
  font-size: 2rem;
}

span {
  color: var(--red);
}

.custom-buttons {
  margin-left: 80px;
}

.v-btn {
  margin: 30px 0 0 10px;
  background-color: var(--red);
  color: white;
}

.custom-col-image {
  padding: 0 10px;
}

.image-container {
  width: 330px;
  position: relative;
}

.main-image {
  max-width: 250px;
  height: auto;
  border-radius: 50px;
}

.icon-image {
  position: absolute;
  top: -4%;
  right: 50px;
  max-width: 250px;
  height: auto;
  z-index: 1;
}

.custom-container-row-2 {
  width: 55%;
  height: 2.7%;
  background-color: var(--yellow);
  position: absolute;
  top: 18.5%;
  left: 25%;
  z-index: 2;
  padding: 17px;
  border-radius: 20px;
}

.custom-container-row-2 p {
  padding: 5px;
  font-size: 14px;
}

/* Ícones flutuantes e giratórios */
.floating-icon {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  opacity: 0.5;
  animation: float 5s infinite, rotate 6s infinite linear;
}

.floating-icon-1 {
  top: 16.3%;
  left: 19%;
  animation-direction: normal;
  color: var(--red);
  font-size: 70px !important;
}

.floating-icon-2 {
  top: 18.5%;
  left: 15%;
  animation-direction: reverse;
  font-size: 40px !important;
}

/* Animação de flutuação */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Animação de rotação */
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Media Query para mobile */
@media (max-width: 957px) {
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

  .floating-icon {
    display: none; /* Ocultar ícones flutuantes em dispositivos móveis */
  }
}

/* Media Query para telas maiores */
@media (min-width: 1319px) {
  .custom-container-row-1 {
    margin-top: 40px;
  }

  .image-container {
    width: 400px;
  }

  .main-image {
    max-width: 350px;
    height: auto;
    border-radius: 50px;
  }

  .icon-image {
    position: absolute;
    top: -4%;
    right: 10px;
    max-width: 380px;
    height: auto;
    z-index: 1;
  }

  .custom-info h2 {
    font-size: 3.8rem;
  }

  .custom-container-row-2 {
    height: 3%;
    top: 18.3%;
  }

  .custom-container-row-2 p {
    padding: 20px;
    font-size: 19px;
  }

  .floating-icon-1 {
    top: 16%;
    left: 21%;
    font-size: 110px !important;
  }

  .floating-icon-2 {
    top: 19%;
    left: 16%;
    animation-direction: reverse;
    font-size: 80px !important;
  }
}
</style>
