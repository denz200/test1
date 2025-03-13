<template>
  <base-layout :paginaTitel="paginaTitel">
    <div class="content-container">
      <ion-grid class="dashboard-tegels">
        <ion-row>
          <ion-col size="6">
            <ion-button
              router-link="/openstaande-inspecties"
              fill="clear"
              class="dashboard-item"
            >
              <ion-label class="dashboard-item-label">
                <ion-icon
                  class="dashboard-item-icon"
                  :icon="badgeIcon"
                  aria-hidden="true"
                />
                <ion-text class="dashboard-item-text"
                  >Openstaande Inspecties</ion-text
                >
              </ion-label>
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button
              router-link="/uitgevoerde-inspecties"
              fill="clear"
              class="dashboard-item"
            >
              <ion-label class="dashboard-item-label">
                <ion-icon
                  class="dashboard-item-icon"
                  :icon="checkmarkCircleIcon"
                  aria-hidden="true"
                />
                <ion-text class="dashboard-item-text"
                  >Uitgevoerde Inspecties</ion-text
                >
              </ion-label>
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-button
              router-link="/knowledge-base"
              fill="clear"
              class="dashboard-item"
            >
              <ion-label class="dashboard-item-label">
                <ion-icon
                  class="dashboard-item-icon"
                  :icon="documentatieIcon"
                  aria-hidden="true"
                />
                <ion-text class="dashboard-item-text">Documentatie</ion-text>
              </ion-label>
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button
              router-link="/instellingen"
              fill="clear"
              class="dashboard-item"
            >
              <ion-label class="dashboard-item-label">
                <ion-icon
                  class="dashboard-item-icon"
                  :icon="settingsIcon"
                  aria-hidden="true"
                />
                <ion-text class="dashboard-item-text">Instellingen</ion-text>
              </ion-label>
            </ion-button>
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
  IonButton,
  IonIcon,
  IonLabel,
  IonText,
} from "@ionic/vue";
import {
  bookmarkOutline,
  checkmarkCircleSharp,
  settingsSharp,
  bookOutline,
} from "ionicons/icons";

export default {
  name: "DashboardPagina",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    IonLabel,
    IonText,
  },
  data() {
    return {
      paginaTitel: "Dashboard",
      badgeIcon: bookmarkOutline,
      checkmarkCircleIcon: checkmarkCircleSharp,
      settingsIcon: settingsSharp,
      documentatieIcon: bookOutline,
    };
  },
};
</script>

<style scoped>
.dashboard-tegels {
  background-color: white;
}

.dashboard-item {
  aspect-ratio: 1;
  display: flex;
}

@media (min-width: 768px) {
  .dashboard-item {
    max-width: 250px;
    margin-block: auto;
    margin-inline: auto;
  }
}

.dashboard-item-label {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dashboard-item-icon {
  font-size: 7rem;
  color: var(--kleur-grijs-2);
}

.dashboard-item-text {
  margin-block-start: 0.5rem;
  color: var(--kleur-grijs-2);
}
</style>
