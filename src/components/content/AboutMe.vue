<template>
  <v-row class="custom-container-row">
    <v-col class="custom-col-image" cols="12" md="" xs="3">
      <div class="image-container">
        <img src="../../assets/icon-2.png" alt="Icon" class="icon-image" />
        <img src="../../assets/me-2.jpg" alt="Larissa Lavínia" class="main-image" />
      </div>
    </v-col>
    <v-col class="custom-col-info" cols="12" md="7" xs="9">
      <div class="custom-info">
        <h2><span>{{ $t(`${this.translatePath}.title`) }}</span></h2>
        <p>
          {{ $t(`${this.translatePath}.content.0`) }}
        </p>
        <br>
        <p>
          {{ $t(`${this.translatePath}.content.1`) }}
        </p>
        <p>
          {{ $t(`${this.translatePath}.content.2`) }}
        </p>
        <br>
        <p>
          {{ $t(`${this.translatePath}.content.3`) }}
        </p>
      </div>
      <div class="custom-buttons">
        <v-btn color="red">
          <a :href="cvTranslated()" download="larissa-lavinia.pdf" target="_blank">
            {{ $t(`${this.translatePath}.downloadCv`) }}
          </a>
          <v-icon icon="mdi-cloud-download-outline" size="20" />
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import cvPt from '@/assets/CV/cvPt.pdf'
import cvEn from '@/assets/CV/cvEn.pdf'
import cvEs from '@/assets/CV/cvEs.pdf'

export default {
  data() {
    return {
      translatePath: 'aboutMe',
      cvPt,
      cvEn,
      cvEs
    }
  },
  methods: {
    cvTranslated() {
      if(localStorage.getItem("locale") == 'pt'){
        return cvPt
      } else if (localStorage.getItem("locale") == 'en') {
        return cvEn
      } else {
        return cvEs
      }
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
}

.custom-col-info,
.custom-col-image {
  padding: 0 10px;
}

.custom-info h2 {
  font-size: 1.8rem;
}

.custom-buttons {
  margin: 20px 0;
}

.image-container {
  width: 330px;
  position: relative;
}

.main-image {
  max-width: 280px;
  height: auto;
  border-radius: 50px;
}

.icon-image {
  position: absolute;
  top: -4%;
  left: -8%;
  max-width: 250px;
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

@media (max-width: 957px) {
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
