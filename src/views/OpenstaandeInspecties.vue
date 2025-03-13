<template>
  <base-layout :paginaTitel="paginaTitel" :paginaTerugLink="paginaTerugLink">
    <div class="content-container" v-if="userStore.isLoggedIn">
      <ion-loading
        :is-open="loadingStatus === 'loading'"
        message="Laden..."
      ></ion-loading>

      <!-- Tip voor u: trigger deze error door in de InspectieService.js de URL aan te passen -->
      <div v-if="error">
        <ion-card color="danger">
          <ion-card-header>
            <ion-card-title>Foutmelding</ion-card-title>
            <ion-card-subtitle
              >Fout bij het ophalen van uw rapportages. Probeer het later
              opnieuw.</ion-card-subtitle
            >
          </ion-card-header>
          <ion-card-content
            >Of meld deze melding aan de website beheerder:
            {{ error }}</ion-card-content
          >
        </ion-card>
        <ion-img src="/errors/404.png" alt="404 error illustratie"></ion-img>
      </div>

      <div v-else-if="!error">
        <ion-list>
          <ion-card
            button
            class="inspectie-card"
            v-for="inspectie in userInspecties"
            :key="inspectie.id"
            @click="selectInspectie(inspectie)"
            role="listitem"
          >
            <ion-card-header>
              <ion-card-title>
                {{ inspectie.name }}
                <ion-badge color="warning">Openstaande inspectie</ion-badge>
              </ion-card-title>
            </ion-card-header>
            <ion-card-content class="inspectie-card-content">
              <ion-label>{{ inspectie.location }}</ion-label>
            </ion-card-content>
          </ion-card>
        </ion-list>
      </div>
    </div>
    <div v-else class="content-container">
      <GoToLoginButton
        :message="parentMessage"
        @loginClicked="handleLoginClick"
      />
    </div>
    <ion-toast
      :is-open="showToast"
      :message="toastMessage"
      duration="2000"
      @didDismiss="showToast = false"
    ></ion-toast>
  </base-layout>
</template>

<script>
import {
  IonList,
  IonLoading,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonBadge,
  IonToast,
  IonImg,
} from "@ionic/vue";
import { useInspectieStore } from "../stores/inspectieStore";
import { useUserStore } from "../stores/userStore";
import mixins from "../mixins/mixins.js";
import GoToLoginButton from "../components/shared/GoToLoginButton.vue";

export default {
  name: "OpenstaandeInspecties",
  mixins: [mixins],
  components: {
    IonList,
    IonLoading,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonBadge,
    GoToLoginButton,
    IonToast,
    IonImg,
  },
  data() {
    return {
      paginaTitel: "Openstaande inspecties",
      paginaTerugLink: "/",
      store: useInspectieStore(),
      parentMessage:
        "Om uw openstaande inspecties te bekijken moet u eerst inloggen.",
    };
  },
  created() {
    this.store.fetchInspecties();
  },
  methods: {
    selectInspectie(inspectie) {
      this.store.geselecteerdeInspectie =
        this.getInspectieMetDefaults(inspectie);
      console.log(
        "Geselecteerde inspectie: ",
        this.store.geselecteerdeInspectie
      );
      this.$router.push(`/inspectiedetail/${inspectie.id}`);
    },
    handleLoginClick() {
      this.showToastMelding("U wordt doorgestuurd naar de login pagina...");
      // console.log("test");
    },
  },
  computed: {
    userStore() {
      return useUserStore();
    },
  },
};
</script>
