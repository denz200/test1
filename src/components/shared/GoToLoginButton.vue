<template>
  <div>
    <p>{{ message }}</p>
    <ion-button router-link="/login" @click="onClick">
      <ion-label class="login-btn">
        <ion-text>Inloggen</ion-text>
      </ion-label>
    </ion-button>
  </div>
</template>

<script>
import { IonButton, IonLabel, IonText } from "@ionic/vue";

export default {
  name: "GoToLoginButton",
  components: {
    IonButton,
    IonLabel,
    IonText,
  },
  props: {
    message: {
      type: String,
      required: true,
      default: "U moet eerst inloggen.",
    },
  },
  methods: {
    onClick() {
      this.$emit("loginClicked");
    },
  },
};
</script>

<style scoped>
.login-btn {
  padding: 0.5em;
  font-weight: bold;
}
</style>
