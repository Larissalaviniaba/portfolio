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
          <i>{{ $t(`${this.translatePath}.phrase`) }}</i>
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
  min-height: 70vh;
  margin: auto;
  margin-top: 50px;
}

.custom-info {
  max-height: 500px !important;
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

p {
  padding: 15px;
  font-size: 14px;
  background-color: var(--yellow);
  border-radius: 5px;
  margin: 10px 0;
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

}

/* Media Query para telas maiores */
@media (min-width: 1299px) {
  .custom-container-row-1 {
    margin-top: 40px;
  }

  .image-container {
    width: 400px;
  }

  .main-image {
    max-width: 350px;
  }

  .icon-image {
    top: -4%;
    right: 10px;
    max-width: 380px;
  }

  .custom-info h2 {
    font-size: 3.2rem;
  }
}

</style>
