<template>
  <v-row class="custom-container-row">
    <v-tabs fixed-tabs v-model="selectedTab" centered>
      <v-tab class="custom-tab">{{ $t(`${translatePath}.academicBackground`) }}</v-tab>
      <v-tab class="custom-tab">{{ $t(`${translatePath}.professionalExperience`) }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="selectedTab" class="custom-tabs-items">
      <!-- Formação Acadêmica -->
      <v-tab-item v-if="selectedTab == 0">
        <!-- Verifica se a tela é menor que 957px -->
        <div v-if="isSmallScreen" class="timeline-container">
          <v-card v-for="(item, index) in education" :key="index" class="bg-bgCard custom-card timeline-item">
            <v-card-title>{{ $t(item.title) }}</v-card-title>
            <v-card-subtitle>{{ $t(item.institution) }} | {{ $t(item.date) }}</v-card-subtitle>
            <v-card-text>{{ $t(item.description) }}</v-card-text>
          </v-card>
        </div>
        <!-- Verifica se a tela é maior ou igual a 957px -->
        <div v-else class="timeline-container">
          <v-timeline dense align="center">
            <v-timeline-item v-for="(item, index) in education" :key="index" class="custom-timeline-item" color="red">
              <v-card class="bg-bgCard custom-card">
                <v-card-title>{{ $t(item.title) }}</v-card-title>
                <v-card-subtitle>{{ $t(item.institution) }} | {{ $t(item.date) }}</v-card-subtitle>
                <v-card-text>{{ $t(item.description) }}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-tab-item>

      <!-- Experiência Profissional -->
      <v-tab-item v-else>
        <!-- Verifica se a tela é menor que 957px -->
        <div v-if="isSmallScreen" class="timeline-container">
          <v-card v-for="(item, index) in experience" :key="index" class="bg-bgCard custom-card timeline-item">
            <v-card-title>{{ $t(item.title) }}</v-card-title>
            <v-card-subtitle>{{ $t(item.company) }} | {{ item.date }}</v-card-subtitle>
            <v-card-text>{{ $t(item.description) }}</v-card-text>
          </v-card>
        </div>
        <!-- Verifica se a tela é maior ou igual a 957px -->
        <div v-else class="timeline-container">
          <v-timeline dense align="center">
            <v-timeline-item v-for="(item, index) in experience" :key="index" class="custom-timeline-item" color="red">
              <v-card class="bg-bgCard custom-card">
                <v-card-title>{{ $t(item.title) }}</v-card-title>
                <v-card-subtitle>{{ $t(item.company) }} | {{ item.date }}</v-card-subtitle>
                <v-card-text>{{ $t(item.description) }}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </v-row>
</template>

<script>
import { education, experience } from '@/data/experienceAndEducation'
export default {
  data() {
    return {
      translatePath: 'experienceAndEducation',
      selectedTab: 0, // Índice do tab selecionado (0 para Formação, 1 para Experiência)
      education,
      experience,
      isSmallScreen: false // Variável para controle da largura da tela
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 957;
    }
  }
};
</script>

<style scoped>
.custom-container-row {
  width: 90%;
  max-width: 1200px;
  /* Defina um tamanho máximo */
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.v-tabs {
  width: 100%;
  margin-bottom: 30px;
}

.custom-tab {
  min-width: 200px;
  margin-bottom: 20px;
  padding: 20px;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: var(--red);
}

.custom-tabs-items {
  width: 100%;
  display: flex;
  justify-content: center;
}

.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.custom-card {
  max-width: 350px;
  /* Defina um tamanho máximo para os cartões */
  text-align: left;
  /* Alinhe o texto à esquerda */
}

.timeline-item {
  margin-bottom: 20px;
  /* Espaçamento entre os cards */
}

@media (max-width: 957px) {
  .custom-container-row {
    margin-top: 0;
    padding: 0;
  }

  .custom-tabs-items {
    flex-direction: column;
    align-items: stretch;
  }

  .custom-card {
    margin: auto !important;
    margin-bottom: 10px !important;
    max-width: 90%;
    /* Deixe o card ocupar toda a largura em telas menores */
  }

  .timeline-container {
    display: block;
  }

  .timeline-item {
    margin: 10px 0;
    /* Adicione algum espaçamento entre os cards */
  }
}

@media (min-width: 1400px) {
  .custom-info h2 {
    font-size: 3rem;
  }
}
</style>
