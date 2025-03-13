<template>
  <base-layout :paginaTitel="paginaTitel">
    <div class="content-container">
      <ion-grid>
        <ion-alert
          :is-open="showAlert"
          header="Foutmelding"
          :message="alertMessage"
          :buttons="['Oké']"
          @didDismiss="showAlert = false"
        ></ion-alert>

        <ion-row>
          <ion-col>
            <ion-button
              class="dashboard-btn"
              expand="block"
              @click="gaNaarDashboard"
            >
              <ion-icon slot="start" :icon="arrowBack" role="none"></ion-icon>
              Ga terug naar dashboard
            </ion-button>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-content>
                <!-- Als de gebruiker al ingelogd is -->
                <template v-if="userStore.isLoggedIn">
                  <ion-item lines="none">
                    <ion-label>
                      U bent al ingelogd als:
                      <strong>{{ userStore.name }}</strong>
                    </ion-label>
                  </ion-item>
                  <ion-button expand="block" @click="uitloggen">
                    Uitloggen
                  </ion-button>
                </template>

                <!-- Als de gebruiker niet is ingelogd -->
                <template v-else>
                  <!-- Fase 1: Gebruikersnaam en wachtwoord -->
                  <template v-if="inlogFase === 'login'">
                    <ion-item lines="none">
                      <ion-label>
                        Gebruik <strong>user1</strong> of
                        <strong>user2</strong> als gebruikersnaam. Voer een
                        willekeurig wachtwoord in. <br />De authenticatiecode is
                        <strong>{{ twoFactorCode }}</strong
                        >.
                      </ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-label position="stacked">Gebruikersnaam</ion-label>
                      <ion-input
                        type="text"
                        v-model="gebruikersnaam"
                        placeholder="Voer uw gebruikersnaam in"
                      ></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label position="stacked">Wachtwoord</ion-label>
                      <ion-input
                        type="password"
                        v-model="wachtwoord"
                        placeholder="Voer uw wachtwoord in"
                      >
                        <ion-input-password-toggle
                          slot="end"
                        ></ion-input-password-toggle
                      ></ion-input>
                    </ion-item>
                    <ion-button
                      expand="block"
                      @click="startInloggen"
                      class="ion-margin-top"
                    >
                      Inloggen
                    </ion-button>
                  </template>

                  <!-- Fase 2: Two factor -->
                  <template v-else-if="inlogFase === 'twoFactor'">
                    <ion-item lines="none">
                      <ion-label>
                        Er is een authenticatiecode verzonden naar uw telefoon.
                        (Voer <strong>{{ twoFactorCode }}</strong> in)
                      </ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-label position="stacked">Bevestigingscode</ion-label>
                      <ion-input
                        v-model="bevestigingscode"
                        placeholder="Voer de code in"
                      ></ion-input>
                    </ion-item>
                    <ion-button
                      expand="block"
                      @click="voltooiInloggen"
                      class="ion-margin-top"
                    >
                      Verifiëren
                    </ion-button>
                  </template>
                </template>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </base-layout>
</template>

<script>
import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonIcon,
  IonCard,
  IonCardContent,
  IonAlert,
  IonInputPasswordToggle,
} from "@ionic/vue";
import { arrowBackOutline } from "ionicons/icons";
import { useUserStore } from "../stores/userStore";

export default {
  name: "UserLogin",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonButton,
    IonInput,
    IonIcon,
    IonCard,
    IonCardContent,
    IonAlert,
    IonInputPasswordToggle,
  },
  data() {
    return {
      paginaTitel: "Inloggen",
      gebruikersnaam: "",
      wachtwoord: "",
      bevestigingscode: "",
      inlogFase: "login", // login of twoFactor
      twoFactorCode: "123456",
      arrowBack: arrowBackOutline,
      showAlert: false,
      alertMessage: "",
    };
  },
  computed: {
    userStore() {
      return useUserStore();
    },
  },
  methods: {
    gaNaarDashboard() {
      this.$router.push("/dashboard");
    },
    startInloggen() {
      if (this.gebruikersnaam && this.wachtwoord) {
        const naam = this.gebruikersnaam.toLowerCase();
        if (naam !== "user1" && naam !== "user2") {
          this.alertMessage =
            "Onbekende gebruiker. Gebruik 'user1' of 'user2'.";
          this.showAlert = true;
        } else {
          this.inlogFase = "twoFactor";
        }
      } else {
        this.alertMessage = "Voer zowel gebruikersnaam als wachtwoord in.";
        this.showAlert = true;
      }
    },
    voltooiInloggen() {
      if (this.bevestigingscode === this.twoFactorCode) {
        // user id geven
        const userId = this.gebruikersnaam.toLowerCase() === "user1" ? 1 : 2;
        const gebruiker = {
          id: userId,
          name: this.gebruikersnaam,
        };
        this.userStore.setUser(gebruiker);
        localStorage.setItem("ingelogdeGebruiker", JSON.stringify(gebruiker));
        this.$router.push("/dashboard");
      } else {
        this.alertMessage = "De ingevoerde code is onjuist. Gebruik: 123456";
        this.showAlert = true;
      }
    },
    uitloggen() {
      this.userStore.logout();
      localStorage.removeItem("ingelogdeGebruiker");
      this.gebruikersnaam = "";
      this.wachtwoord = "";
      this.bevestigingscode = "";
      this.inlogFase = "login";
    },
  },
};
</script>

<style scoped>
.content-container {
  max-width: 800px;
}

.dashboard-btn {
  --background: var(--kleur-grijs-1);
}
</style>
