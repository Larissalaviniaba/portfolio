<template>
  <v-app>
    <v-row class="custom-row-header">
      <AppHeader />
    </v-row>

    <v-row class="custom-row-main">
      <v-main class="custom-container-main">
        <section id="#">
          <StartHere />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="projects">
          <MyProjects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </v-main>
    </v-row>
    <v-row>
      <AppFooter/>
    </v-row>
  </v-app>
</template>

<script>
//
</script>

<style scoped>
.custom-row-header {
  height: 97px;
  flex: 0 0 auto;
}

.custom-row-main {
  flex: 1 1 auto;
}

.custom-container-main {
  display: flex;
  flex-direction: column;
}

.custom-container-start,
.custom-container-about,
.custom-container-contact {
  min-height: calc(100vh - 97px);
}

.custom-container-about {
  padding: 20px;
}
.custom-container-projects {
  min-height: calc(100vh - 400px);
}

@media (max-width: 627px) {
  .custom-container-about {
    min-height: auto;
    padding: 0;
  }
}
</style>
