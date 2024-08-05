<template id="contact">
  <v-row class="custom-container-row">
    <v-col cols="12" md="7" class="custom-col-card">
      <v-card class="contact-card bg-background">
        <v-card-title class="text-h5">{{ $t(`${this.translatePath}.title`) }}</v-card-title>
        <v-card-text>

          <v-form ref="form" v-model="valid">
            <v-text-field v-model="name" :rules="nameRules" :label="$t(`${this.translatePath}.form.fields.name.label`)"
              required color="red"></v-text-field>
            <v-text-field v-model="email" :rules="emailRules"
              :label="$t(`${this.translatePath}.form.fields.email.label`)" type="email" required
              color="red"></v-text-field>
            <v-textarea v-model="message" :rules="messageRules"
              :label="$t(`${this.translatePath}.form.fields.message.label`)" required color="red"></v-textarea>
          </v-form>

        </v-card-text>
        <v-card-actions>
          <v-btn @click="formSubmit" color="red">{{
            $t(loadind ? `${this.translatePath}.form.btn.sending` : `${this.translatePath}.form.btn.send`)
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" md="5" class="custom-col-btn margin">
      <div @click="teste">
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

  <Alert v-if="emailSent" :title="$t(`${this.translatePath}.alert.title`)"
    :text="$t(`${this.translatePath}.alert.text`)" type="success" />
</template>

<script>
export default {
  data() {
    return {
      translatePath: 'contact',
      valid: false,
      emailSent: false,
      loadind: false,
      name: "",
      email: "",
      message: "",
    };
  },
  computed: {
    nameRules() {
      return [
        (value) => !!value || this.$t(`${this.translatePath}.form.fields.name.validation.required`),
        (value) => value.length <= 50 || this.$t(`${this.translatePath}.form.fields.name.validation.length`),
      ]
    },
    emailRules() {
      return [
        (value) => !!value || this.$t(`${this.translatePath}.form.fields.email.validation.required`),
        (value) => /.+@.+\..+/.test(value) || this.$t(`${this.translatePath}.form.fields.email.validation.invalid`),
      ]
    },
    messageRules() {
      return [
        (value) => !!value || this.$t(`${this.translatePath}.form.fields.message.validation.required`),
        (value) =>
          value.length >= 10 || this.$t(`${this.translatePath}.form.fields.message.validation.length`),
      ]
    },
  },
  methods: {
    formSubmit() {
      this.loadind = true;
      if (this.$refs.form.validate()) {
        const data = {
          name: this.name.trim(),
          email: this.email.trim(),
          message: this.message.trim(),
        };

        fetch(`https://formsubmit.co/ajax/${process.env.EMAIL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        })
          .then(() => {
            this.emailSent = true;
            this.loadind = false;
            this.resetForm();
            setTimeout(() => {
              this.emailSent = false;
            }, 3000);
          })
          .catch((error) => console.log(error));
      }
    },
    resetForm() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.custom-container-row {
  margin: auto;
  display: flex;
  justify-content: center;
  width: 80%;
  min-height: 60vh;
  padding: 20px;
}

.contact-card {
  width: 90%;
  margin-left: 20px;
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

.custom-col-card {
  width: 50%;
}

div {
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

@media (max-width: 957px) {
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
