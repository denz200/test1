<template>
  <base-layout :paginaTitel="paginaTitel" :paginaTerugLink="paginaTerugLink">
    <div class="content-container" v-if="userStore.isLoggedIn">
      <ion-alert
        :is-open="showAlert"
        header="Melding"
        :message="alertMessage"
        :buttons="['Oké']"
        @didDismiss="showAlert = false"
      ></ion-alert>
      <ion-list>
        <ion-item-divider mode="ios">
          <ion-label>Accountgegevens</ion-label>
        </ion-item-divider>
        <ion-item>
          <ion-label>Gebruikersnaam</ion-label>
          <ion-label>{{ userStore.name }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Weergavenaam</ion-label>
          <ion-input
            v-model="weergaveNaam"
            placeholder="Voer uw weergavenaam in"
          ></ion-input>
        </ion-item>
        <ion-item-divider mode="ios">
          <ion-label>Avatar</ion-label>
        </ion-item-divider>
        <ion-item>
          <ion-label position="stacked">Selecteer Avatar</ion-label>
          <ion-select v-model="avatar">
            <ion-select-option value="/avatars/avatar1.jpg">
              Avatar 1
            </ion-select-option>
            <ion-select-option value="/avatars/avatar2.jpg">
              Avatar 2
            </ion-select-option>
            <ion-select-option value="/avatars/avatar3.jpg">
              Avatar 3
            </ion-select-option>
          </ion-select>
        </ion-item>
        <div v-if="avatar" class="avatar-img">
          <img :src="avatar" alt="Avatar afbeelding" />
        </div>
        <ion-item-divider mode="ios">
          <ion-label>Wachtwoord</ion-label>
        </ion-item-divider>
        <ion-item>
          <ion-label position="stacked">Nieuw wachtwoord</ion-label>
          <ion-input
            v-model="nieuwWachtwoord"
            type="password"
            placeholder="Voer nieuw wachtwoord in"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Herhaal wachtwoord</ion-label>
          <ion-input
            v-model="herhaalWachtwoord"
            type="password"
            placeholder="Herhaal nieuw wachtwoord"
          ></ion-input>
        </ion-item>
        <ion-item-divider mode="ios">
          <ion-label>Interface voorkeuren</ion-label>
        </ion-item-divider>
        <ion-item>
          <ion-label>Dark mode</ion-label>
          <ion-toggle v-model="darkMode"></ion-toggle>
        </ion-item>
        <ion-item-divider mode="ios">
          <ion-label>Meldingen en geluiden</ion-label>
        </ion-item-divider>
        <ion-item>
          <ion-label>Meldingen</ion-label>
          <ion-toggle v-model="meldingenIngeschakeld"></ion-toggle>
        </ion-item>
        <ion-item>
          <ion-label>Geluiden</ion-label>
          <ion-toggle v-model="geluidenIngeschakeld"></ion-toggle>
        </ion-item>
      </ion-list>
      <ion-button expand="block" @click="opslaan">
        Instellingen opslaan
      </ion-button>
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
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonAlert,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonItemDivider,
  IonToast,
} from "@ionic/vue";
import { useUserStore } from "../stores/userStore";
import mixins from "../mixins/mixins.js";
import GoToLoginButton from "../components/shared/GoToLoginButton.vue";

export default {
  name: "InstellingenPagina",
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonAlert,
    IonSelect,
    IonSelectOption,
    IonToggle,
    IonItemDivider,
    GoToLoginButton,
    IonToast,
  },
  mixins: [mixins],
  data() {
    return {
      paginaTitel: "Instellingen",
      paginaTerugLink: "/",
      weergaveNaam: "",
      avatar: "",
      nieuwWachtwoord: "",
      herhaalWachtwoord: "",
      darkMode: false,
      meldingenIngeschakeld: true,
      geluidenIngeschakeld: true,
      showAlert: false,
      alertMessage: "",
      parentMessage: "Om uw instellingen te bekijken moet u eerst inloggen.",
    };
  },
  computed: {
    userStore() {
      return useUserStore();
    },
  },
  created() {
    // standaard values uit user store
    this.weergaveNaam = this.userStore.weergaveNaam;
    this.avatar = this.userStore.avatar;
    this.darkMode = this.userStore.darkMode;
    this.meldingenIngeschakeld = this.userStore.meldingenIngeschakeld;
    this.geluidenIngeschakeld = this.userStore.geluidenIngeschakeld;
  },

  methods: {
    opslaan() {
      if (!this.weergaveNaam) {
        this.alertMessage = "Voer een weergavenaam in.";
        this.showAlert = true;
        return;
      }
      this.userStore.updateWeergaveNaam(this.weergaveNaam);
      this.userStore.updateAvatar(this.avatar);
      // Wachtwoord check
      if (this.nieuwWachtwoord || this.herhaalWachtwoord) {
        if (this.nieuwWachtwoord !== this.herhaalWachtwoord) {
          this.alertMessage = "De wachtwoorden komen niet overeen.";
          this.showAlert = true;
          return;
        }
      }
      this.userStore.updateDarkMode(this.darkMode);
      this.userStore.updateMeldingen(this.meldingenIngeschakeld);
      this.userStore.updateGeluiden(this.geluidenIngeschakeld);

      // Sla values op in localStorage
      localStorage.setItem(
        "ingelogdeGebruiker",
        JSON.stringify({
          id: this.userStore.id,
          name: this.userStore.name,
          weergaveNaam: this.userStore.weergaveNaam,
          avatar: this.userStore.avatar,
          darkMode: this.userStore.darkMode,
          meldingenIngeschakeld: this.userStore.meldingenIngeschakeld,
          geluidenIngeschakeld: this.userStore.geluidenIngeschakeld,
        })
      );

      // console.log({
      //   id: this.userStore.id,
      //   name: this.userStore.name,
      //   weergaveNaam: this.userStore.weergaveNaam,
      //   avatar: this.userStore.avatar,
      //   darkMode: this.userStore.darkMode,
      //   meldingenIngeschakeld: this.userStore.meldingenIngeschakeld,
      //   geluidenIngeschakeld: this.userStore.geluidenIngeschakeld,
      // });

      // Leeg maken na opslaan
      this.nieuwWachtwoord = "";
      this.herhaalWachtwoord = "";
      this.alertMessage = "Instellingen opgeslagen.";
      this.showAlert = true;
    },
    handleLoginClick() {
      this.showToastMelding("U wordt doorgestuurd naar de login pagina...");
      // console.log("test");
    },
  },
};
</script>

<style scoped>
/* Compacter voor instellingen*/
.content-container {
  max-width: 800px;
}

.avatar-img {
  margin: 1em 0;
  width: 100px;
  height: 100px;
}
</style>
