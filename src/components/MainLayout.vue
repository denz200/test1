<template>
  <ion-page>
    <ion-header aria-label="Dashboard header">
      <ion-toolbar class="top-toolbar">
        <ion-buttons slot="start">
          <ion-button
            router-link="/dashboard"
            fill="clear"
            aria-label="Ga naar dashboard"
          >
            <ion-img
              src="/logo-realestatecare.png"
              class="logo"
              alt="Logo RealEstateCare"
            />
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button @click="gaNaarLogin">
            <ion-text class="user-text">
              {{ userStore.isLoggedIn ? userStore.weergaveNaam : "Inloggen" }}
            </ion-text>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>

      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :defaultHref="paginaTerugLink" />
        </ion-buttons>
        <ion-title
          ><h1 class="heading1">{{ paginaTitel }}</h1></ion-title
        >
      </ion-toolbar>
    </ion-header>

    <ion-content :color="contentColor">
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonImg,
  IonText,
  IonBackButton,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { useUserStore } from "../stores/userStore";

export default {
  name: "MainLayout",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonImg,
    IonText,
    IonBackButton,
    IonTitle,
    IonContent,
  },
  props: {
    paginaTitel: {
      type: String,
      default: "RealEstateCare",
    },
    paginaTerugLink: {
      type: String,
      default: "/",
    },
  },
  computed: {
    userStore() {
      return useUserStore();
    },
    contentColor() {
      return this.userStore.darkMode ? "dark" : "";
    },
  },
  methods: {
    gaNaarLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.user-text {
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.heading1 {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  margin: 0;
}
</style>
