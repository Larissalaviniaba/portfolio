<template id="contact">
  <v-row class="custom-container-row">
    <v-col cols="12" md="7" class="custom-col-card">
      <v-card class="contact-card bg-background">
        <v-card-title class="text-h5">Entre em contato</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Nome"
              required
              color="red"
            ></v-text-field>
            <v-text-field
              label="E-mail"
              type="email"
              required
              color="red"
            ></v-text-field>
            <v-textarea
              label="Mensagem"
              required
              color="red"
            ></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="red">Enviar</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" md="5" class="custom-col-btn margin">
      <div>
        <v-btn color="red" density="comfortable" icon="mdi-linkedin"></v-btn>
        <span class="maring-left">/larissalaviniaba</span>
      </div>
      <div>
        <v-btn color="red" density="comfortable" icon="mdi-github"></v-btn>
        <span class="maring-left">/larissalaviniaba</span>
      </div>
      <div>
        <v-btn color="red" density="comfortable" icon="mdi-at"></v-btn>
        <span class="maring-left">larissa11.cedaspy@gmail.com</span>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.custom-container-row {
  margin: auto;
  display: flex;
  justify-content: center;
  width: 80%;
  min-height: 60vh;
  padding: 20px;
  /* background-color: brown; */
}

.contact-card {
  width: 90%;
  margin-left: 20px; /* Ajusta o alinhamento à esquerda */
  box-shadow: none;
}

.v-btn {
  margin-right: auto;
  color: var(--yellow);
}
.v-card-title {
  font-size: 2.5rem !important;
  text-transform: uppercase;
  color: var(--red);
}
.custom-col-card{
  width: 50%;
}
.custom-group-btn{
  width: 100px;
}
div{
  padding: 10px;
}
span {
  font-weight: 600;
}
.maring-left {
  margin-left: 20px;
}
.margin {
  margin-top: 100px;
}

@media (max-width: 627px) {
  .custom-container-row {
    width: 100%;
  }
  .v-card-title {
    font-size: 1.7rem !important;
    margin-left: 9px;
  }
  .margin {
    margin-top: 0;
    margin-left: 55px;

  }
}
</style>
