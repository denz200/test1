<template>
  <base-layout :paginaTitel="paginaTitel" :paginaTerugLink="paginaTerugLink">
    <div class="content-container" v-if="userStore.isLoggedIn">
      <ion-list>
        <template v-if="uitgevoerdeInspecties.length > 0">
          <ion-card
            button
            class="inspectie-card"
            v-for="inspectie in uitgevoerdeInspecties"
            :key="inspectie.id"
            @click="selectInspectie(inspectie)"
            role="listitem"
          >
            <ion-card-header>
              <ion-card-title>
                {{ inspectie.name }}
                <ion-badge color="success">
                  Uitgevoerd op {{ inspectie.completedAt }}
                </ion-badge>
              </ion-card-title>
            </ion-card-header>
            <ion-card-content class="inspectie-card-content">
              <ion-label>{{ inspectie.location }}</ion-label>
            </ion-card-content>
          </ion-card>
        </template>

        <template v-else>
          <ion-card role="listitem">
            <ion-card-header>
              <ion-card-title>
                Er zijn momenteel geen uitgevoerde inspecties.
              </ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-label>Voer eerst een inspectie uit.</ion-label>
            </ion-card-content>
          </ion-card>
        </template>
      </ion-list>
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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonBadge,
  IonLabel,
  IonToast,
} from "@ionic/vue";
import { useInspectieStore } from "../stores/inspectieStore";
import { useUserStore } from "../stores/userStore";
import mixins from "../mixins/mixins.js";
import GoToLoginButton from "../components/shared/GoToLoginButton.vue";

export default {
  name: "UitgevoerdeInspecties",
  components: {
    IonList,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonBadge,
    IonLabel,
    GoToLoginButton,
    IonToast,
  },
  mixins: [mixins],
  data() {
    return {
      paginaTitel: "Uitgevoerde inspecties",
      paginaTerugLink: "/",
      parentMessage:
        "Om uw uitgevoerde inspecties te bekijken moet u eerst inloggen.",
    };
  },
  computed: {
    uitgevoerdeInspecties() {
      const userStore = useUserStore();
      const store = useInspectieStore();
      return store.inspecties.filter(
        (inspectie) =>
          inspectie.assignedToUserId === userStore.id && inspectie.isCompleted
      );
    },
    userStore() {
      return useUserStore();
    },
  },
  methods: {
    selectInspectie(inspectie) {
      const store = useInspectieStore();
      store.geselecteerdeInspectie = inspectie;
      this.$router.push(`/inspectiedetail/${inspectie.id}`);
    },
    handleLoginClick() {
      this.showToastMelding("U wordt doorgestuurd naar de login pagina...");
      // console.log("test");
    },
  },
};
</script>
