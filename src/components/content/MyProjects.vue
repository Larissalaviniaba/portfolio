<template id="projects">
  <v-sheet class="custom-container-sheet bg-background">

    <h2>{{ $t(`${this.translatePath}.title`) }}</h2>

    <v-slide-group show-arrows class="custom-container-slide-group">
      <v-slide-group-item v-for="project in projects" :key="project.link">
        <v-card class="project-card bg-bgCard">
          <v-img :src="project.image" class="project-image"></v-img>

          <v-card-title class="project-title">{{ $t(project.title) }}</v-card-title>

          <v-card-subtitle class="project-description">
            {{ $t(project.description) }}
          </v-card-subtitle>

          <v-card-actions class="action-buttons">
            <v-btn icon @click="project.liked = !project.liked">
              <v-icon :color="project.liked ? 'red' : 'grey'">
                mdi-heart
              </v-icon>
            </v-btn>

            <v-btn @click="openGithub(project.link)">{{ $t(`${this.translatePath}.btn.viewOnGithub`) }}</v-btn>

          </v-card-actions>

          <v-divider></v-divider>

          <v-card-actions class="tags">
            <v-chip v-for="(tag, index) in project.tags" :key="index" class="tag" outlined color="red">
              {{ tag }}
            </v-chip>
          </v-card-actions>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import projects from "@/data/projects";
export default {
  data() {
    return {
      translatePath: 'myProjects',
      projects,
    };
  },
  methods: {
    shareProject(index) {
      // Implementar funcionalidade de compartilhar
    },
    openGithub(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style scoped>
.custom-container-sheet {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
  font-size: 2rem;
  text-transform: uppercase;
  color: var(--red);
}

.custom-container-slide-group {
  width: 90% !important;
  height: 70vh;
  margin-bottom: 10px;
}

.project-card {
  width: 290px;
  margin: auto 20px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: scale(1.05);
}

.project-image {
  height: 210px;
  object-fit: cover;
  width: 100%;
}

.project-title {
  font-weight: bold;
  font-size: 1.5rem;
}

.project-description {
  font-size: 1rem;
  color: black;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
}

.tags {
  flex-wrap: wrap;
  gap: 5px;
}

.tag {
  margin: 5px;
}

@media (max-width: 957px) {
  .custom-container-sheet {
    width: 100%;
    padding: 0;
  }

  .custom-container-slide-group {
    width: 100% !important;
    height: 65vh;
  }

  .project-card {
    width: 290px !important;
  }
}
</style>
