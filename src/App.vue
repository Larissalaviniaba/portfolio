<template>
  <v-app class="bg-background">
    <v-row class="custom-row-header">
      <AppHeader class="bg-bgHeader"/>
    </v-row>

    <v-row class="custom-row-main">
      <v-main class="custom-container-main">

        <StartHere 
          id="start"
          class="custom-container-start" 
        />

        <AboutMe 
          id="about"
          class="custom-container-about"
        />

        <MyProjects 
          id="projects"
          class="custom-container-projects"
        />

        <Contact 
          id="contact"
          class="custom-container-contact"
        />

      </v-main>
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
  height: 100%;
  /* padding: 12px 12px 0 12px; */
}
.custom-container-start,
.custom-container-about,
.custom-container-projects,
.custom-container-contact {
  height: calc(100vh - 97px);
}

.custom-container-start{
  /* background-color: green; */
}
.custom-container-about{
  background-color: blue;
}
.custom-container-projects{
  background-color: red;
}
.custom-container-contact{
  background-color: rgb(128, 26, 0);
}
</style>
