<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" aria-label="Navigatiebalk beneden">
        <ion-tab-button
          tab="dashboard"
          href="/dashboard"
          :class="{ actief: $route.path === '/dashboard' }"
        >
          <ion-icon :icon="homeIcon" aria-label="Homepagina icoon" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button
          tab="openstaande-inspecties"
          href="/openstaande-inspecties"
          :class="{ actief: $route.path === '/openstaande-inspecties' }"
        >
          <ion-icon
            :icon="openstaandIcon"
            aria-label="Openstaande inspecties icoon"
          />
          <ion-label>Openstaand</ion-label>
        </ion-tab-button>
        <ion-tab-button
          tab="uitgevoerde-inspecties"
          href="/uitgevoerde-inspecties"
          :class="{ actief: $route.path === '/uitgevoerde-inspecties' }"
        >
          <ion-icon
            :icon="uitgevoerdIcon"
            aria-label="Uitgevoerde inspecties icoon"
          />
          <ion-label>Uitgevoerd</ion-label>
        </ion-tab-button>
        <ion-tab-button
          tab="knowledge-base"
          href="/knowledge-base"
          :class="{ actief: $route.path === '/knowledge-base' }"
        >
          <ion-icon :icon="documentatieIcon" aria-label="Documentatie icoon" />
          <ion-label>Documentatie</ion-label>
        </ion-tab-button>
        <ion-tab-button
          tab="instellingen"
          href="/instellingen"
          :class="{ actief: $route.path === '/instellingen' }"
        >
          <ion-icon :icon="instellingenIcon" aria-label="Instellingen icoon" />
          <ion-label>Instellingen</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/vue";
import {
  home,
  bookmarkOutline,
  checkmarkCircleSharp,
  settings,
  book,
} from "ionicons/icons";

export default {
  name: "NavigationTabs",
  components: {
    IonPage,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
  },
  data() {
    return {
      homeIcon: home,
      openstaandIcon: bookmarkOutline,
      uitgevoerdIcon: checkmarkCircleSharp,
      documentatieIcon: book,
      instellingenIcon: settings,
    };
  },
};
</script>
