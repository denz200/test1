<template>
  <base-layout :paginaTitel="paginaTitel" :paginaTerugLink="paginaTerugLink">
    <div class="content-container">
      <ion-alert
        :is-open="isAlertOpen"
        header="Validatiefout"
        message="Vul alle verplichte velden in voordat je opslaat."
        :buttons="['OK']"
        @didDismiss="isAlertOpen = false"
      ></ion-alert>

      <div v-if="userIdCheck">
        <ion-item>
          <ion-label>
            Inspectiegegevens invullen voor: {{ inspectionData.name }}
          </ion-label>
        </ion-item>

        <!-- Schade opnemen (damageCheck) -->
        <CollapsibleSection
          title="Schade opnemen"
          :headerColor="
            inspectionData.damageCheck.applicable ? 'primary' : 'light'
          "
          v-model:applicable="inspectionData.damageCheck.applicable"
        >
          <template #default="{ enabled }">
            <ion-item>
              <ion-label position="stacked">Locatie</ion-label>
              <ion-input
                v-model="inspectionData.damageCheck.location"
                placeholder="Locatie"
                :disabled="!enabled"
                required
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Nieuwe schade</ion-label>
              <ion-radio-group
                v-model="inspectionData.damageCheck.new"
                :disabled="!enabled"
                required
              >
                <ion-item>
                  <ion-label>Ja</ion-label>
                  <ion-radio slot="start" value="ja"></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>Nee</ion-label>
                  <ion-radio slot="start" value="nee"></ion-radio>
                </ion-item>
              </ion-radio-group>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Soort schade</ion-label>
              <ion-select
                v-model="inspectionData.damageCheck.type"
                placeholder="Selecteer"
                :disabled="!enabled"
                required
              >
                <ion-select-option value="moedwillig"
                  >Moedwillig</ion-select-option
                >
                <ion-select-option value="slijtage">Slijtage</ion-select-option>
                <ion-select-option value="geweld">Geweld</ion-select-option>
                <ion-select-option value="normaal"
                  >Normaal gebruik</ion-select-option
                >
                <ion-select-option value="calamiteit"
                  >Calamiteit</ion-select-option
                >
                <ion-select-option value="anders">Anders</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Datum</ion-label>
              <ion-datetime
                display-format="DD/MM/YYYY"
                v-model="inspectionData.damageCheck.date"
                :disabled="!enabled"
                required
              ></ion-datetime>
            </ion-item>
            <ion-item>
              <ion-label>Acute actie vereist</ion-label>
              <ion-radio-group
                v-model="inspectionData.damageCheck.urgent"
                :disabled="!enabled"
                required
              >
                <ion-item>
                  <ion-label>Ja</ion-label>
                  <ion-radio slot="start" value="ja"></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>Nee</ion-label>
                  <ion-radio slot="start" value="nee"></ion-radio>
                </ion-item>
              </ion-radio-group>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Omschrijving</ion-label>
              <ion-textarea
                v-model="inspectionData.damageCheck.description"
                placeholder="Omschrijving"
                :disabled="!enabled"
                required
              ></ion-textarea>
            </ion-item>
            <ion-item>
              <ion-button @click="fotoToevoegen('damageCheck')">
                Foto toevoegen
              </ion-button>
            </ion-item>
            <input
              type="file"
              :ref="'foto_damageCheck'"
              accept="image/*"
              style="display: none"
              @change="verwerkFoto('damageCheck', $event)"
            />
            <ion-item v-if="inspectionData.damageCheck.photo">
              <ion-img
                :src="inspectionData.damageCheck.photo"
                alt="Bewijsmateriaal schade opnemen"
              ></ion-img>
            </ion-item>
          </template>
        </CollapsibleSection>

        <!-- Achterstallig onderhoud opnemen (maintenanceCheck) -->
        <CollapsibleSection
          title="Achterstallig onderhoud opnemen"
          :headerColor="
            inspectionData.maintenanceCheck.applicable ? 'primary' : 'light'
          "
          v-model:applicable="inspectionData.maintenanceCheck.applicable"
        >
          <template #default="{ enabled }">
            <ion-item>
              <ion-label position="stacked">Locatie</ion-label>
              <ion-input
                v-model="inspectionData.maintenanceCheck.location"
                placeholder="Locatie"
                :disabled="!enabled"
                required
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Soort onderhoud</ion-label>
              <ion-select
                v-model="inspectionData.maintenanceCheck.type"
                placeholder="Selecteer"
                :disabled="!enabled"
                required
              >
                <ion-select-option value="schilderwerk"
                  >Schilderwerk</ion-select-option
                >
                <ion-select-option value="houtrot">Houtrot</ion-select-option>
                <ion-select-option value="elektra">Elektra</ion-select-option>
                <ion-select-option value="leidingwerk"
                  >Leidingwerk</ion-select-option
                >
                <ion-select-option value="beglazing"
                  >Beglazing</ion-select-option
                >
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-label>Acute actie vereist</ion-label>
              <ion-radio-group
                v-model="inspectionData.maintenanceCheck.urgent"
                :disabled="!enabled"
                required
              >
                <ion-item>
                  <ion-label>Ja</ion-label>
                  <ion-radio slot="start" value="ja"></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>Nee</ion-label>
                  <ion-radio slot="start" value="nee"></ion-radio>
                </ion-item>
              </ion-radio-group>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Kostenindicatie</ion-label>
              <ion-select
                v-model="inspectionData.maintenanceCheck.cost"
                placeholder="Selecteer"
                :disabled="!enabled"
                required
              >
                <ion-select-option value="0-500">0-500</ion-select-option>
                <ion-select-option value="500-1500"
                  >500-1.500</ion-select-option
                >
                <ion-select-option value="1500+">1.500+</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-button @click="fotoToevoegen('maintenanceCheck')">
                Foto toevoegen
              </ion-button>
            </ion-item>
            <input
              type="file"
              :ref="'foto_maintenanceCheck'"
              accept="image/*"
              style="display: none"
              @change="verwerkFoto('maintenanceCheck', $event)"
            />
            <ion-item v-if="inspectionData.maintenanceCheck.photo">
              <ion-img
                :src="inspectionData.maintenanceCheck.photo"
                alt="Bewijsmateriaal achterstallig onderhoud opnemen"
              ></ion-img>
            </ion-item>
          </template>
        </CollapsibleSection>

        <!-- Technische installaties inspecteren (technicalCheck) -->
        <CollapsibleSection
          title="Technische installaties inspecteren"
          :headerColor="
            inspectionData.technicalCheck.applicable ? 'primary' : 'light'
          "
          v-model:applicable="inspectionData.technicalCheck.applicable"
        >
          <template #default="{ enabled }">
            <ion-item>
              <ion-label position="stacked">Locatie</ion-label>
              <ion-input
                v-model="inspectionData.technicalCheck.location"
                placeholder="Locatie"
                :disabled="!enabled"
                required
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Soort installatie</ion-label>
              <ion-select
                v-model="inspectionData.technicalCheck.type"
                placeholder="Selecteer"
                :disabled="!enabled"
                required
              >
                <ion-select-option value="koeling">Koeling</ion-select-option>
                <ion-select-option value="verwarming"
                  >Verwarming</ion-select-option
                >
                <ion-select-option value="luchtverversing"
                  >Luchtverversing</ion-select-option
                >
                <ion-select-option value="elektra">Elektra</ion-select-option>
                <ion-select-option value="beveiliging"
                  >Beveiliging</ion-select-option
                >
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Gemelde storingen</ion-label>
              <ion-input
                v-model="inspectionData.technicalCheck.issues"
                placeholder="Storingen"
                :disabled="!enabled"
                required
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Testprocedure</ion-label>
              <ion-input
                v-model="inspectionData.technicalCheck.testProcedure"
                placeholder="Link naar pdf-bestand"
                :disabled="!enabled"
                required
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Goedgekeurd</ion-label>
              <ion-radio-group
                v-model="inspectionData.technicalCheck.approved"
                :disabled="!enabled"
                required
              >
                <ion-item>
                  <ion-label>Ja</ion-label>
                  <ion-radio slot="start" value="ja"></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>Nee</ion-label>
                  <ion-radio slot="start" value="nee"></ion-radio>
                </ion-item>
              </ion-radio-group>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Opmerkingen</ion-label>
              <ion-textarea
                v-model="inspectionData.technicalCheck.notes"
                placeholder="Opmerkingen"
                :disabled="!enabled"
                required
              ></ion-textarea>
            </ion-item>
            <ion-item>
              <ion-button @click="fotoToevoegen('technicalCheck')">
                Foto toevoegen
              </ion-button>
            </ion-item>
            <input
              type="file"
              :ref="'foto_technicalCheck'"
              accept="image/*"
              style="display: none"
              @change="verwerkFoto('technicalCheck', $event)"
            />
            <ion-item v-if="inspectionData.technicalCheck.photo">
              <ion-img
                :src="inspectionData.technicalCheck.photo"
                alt="Bewijsmateriaal technische installaties inspecteren"
              ></ion-img>
            </ion-item>
          </template>
        </CollapsibleSection>

        <!-- Modificaties inventariseren (modificationsCheck) -->
        <CollapsibleSection
          title="Modificaties inventariseren"
          :headerColor="
            inspectionData.modificationsCheck.applicable ? 'primary' : 'light'
          "
          v-model:applicable="inspectionData.modificationsCheck.applicable"
        >
          <template #default="{ enabled }">
            <ion-item>
              <ion-label position="stacked">
                Bestaande situatie en reeds gedocumenteerde modificaties
              </ion-label>
              <ion-input
                v-model="inspectionData.modificationsCheck.existing"
                placeholder="Link naar pdf-bestand"
                :disabled="!enabled"
                required
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">
                Locatie aangetroffen modificatie
              </ion-label>
              <ion-input
                v-model="inspectionData.modificationsCheck.location"
                placeholder="Locatie"
                :disabled="!enabled"
                required
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Uitgevoerd door</ion-label>
              <ion-radio-group
                v-model="inspectionData.modificationsCheck.performedBy"
                :disabled="!enabled"
                required
              >
                <ion-item>
                  <ion-label>Huurder</ion-label>
                  <ion-radio slot="start" value="huurder"></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>Aannemer</ion-label>
                  <ion-radio slot="start" value="aannemer"></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>Onbekend</ion-label>
                  <ion-radio slot="start" value="onbekend"></ion-radio>
                </ion-item>
              </ion-radio-group>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Beschrijving modificatie</ion-label>
              <ion-textarea
                v-model="inspectionData.modificationsCheck.description"
                placeholder="Beschrijving"
                :disabled="!enabled"
                required
              ></ion-textarea>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Te ondernemen actie</ion-label>
              <ion-select
                v-model="inspectionData.modificationsCheck.action"
                placeholder="Selecteer"
                :disabled="!enabled"
                required
              >
                <ion-select-option value="accepteren"
                  >Accepteren</ion-select-option
                >
                <ion-select-option value="laten keuren"
                  >Laten keuren</ion-select-option
                >
                <ion-select-option value="laten verwijderen"
                  >Laten verwijderen</ion-select-option
                >
                <ion-select-option value="laten aanpassen en keuren">
                  Laten aanpassen en keuren
                </ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Opmerkingen</ion-label>
              <ion-textarea
                v-model="inspectionData.modificationsCheck.notes"
                placeholder="Opmerkingen"
                :disabled="!enabled"
                required
              ></ion-textarea>
            </ion-item>
            <ion-item>
              <ion-button @click="fotoToevoegen('modificationsCheck')">
                Foto toevoegen
              </ion-button>
            </ion-item>
            <input
              type="file"
              :ref="'foto_modificationsCheck'"
              accept="image/*"
              style="display: none"
              @change="verwerkFoto('modificationsCheck', $event)"
            />
            <ion-item v-if="inspectionData.modificationsCheck.photo">
              <ion-img
                :src="inspectionData.modificationsCheck.photo"
                alt="Bewijsmateriaal modificaties inventariseren"
              ></ion-img>
            </ion-item>
          </template>
        </CollapsibleSection>

        <ion-button expand="block" @click="slaInspectieOp">
          Opslaan
        </ion-button>
      </div>
      <ion-card v-else color="danger">
        <ion-card-header>
          <ion-card-title>Geen toegang</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Deze inspectie behoort niet toe aan uw account.
        </ion-card-content>
      </ion-card>
    </div>
  </base-layout>
</template>

<script>
import {
  IonItem,
  IonInput,
  IonLabel,
  IonButton,
  IonRadio,
  IonSelect,
  IonSelectOption,
  IonRadioGroup,
  IonDatetime,
  IonTextarea,
  IonAlert,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/vue";
import CollapsibleSection from "../components/shared/CollapsibleSection.vue";
import { useInspectieStore } from "../stores/inspectieStore";
import { useUserStore } from "../stores/userStore";
import mixins from "../mixins/mixins.js";

export default {
  name: "InspectieDetail",
  components: {
    IonAlert,
    IonItem,
    IonLabel,
    CollapsibleSection,
    IonInput,
    IonButton,
    IonRadio,
    IonRadioGroup,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonImg,
    IonDatetime,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  },
  mixins: [mixins],
  data() {
    return {
      paginaTitel: "Inspectiegegevens invullen",
      paginaTerugLink: "/openstaande-inspecties",
      store: useInspectieStore(),
      isAlertOpen: false,
    };
  },
  computed: {
    inspectionData: {
      get() {
        return this.store.geselecteerdeInspectie;
      },
      set(nieuweWaarde) {
        this.store.geselecteerdeInspectie = nieuweWaarde;
      },
    },
    userIdCheck() {
      const userStore = useUserStore();
      return (
        this.inspectionData &&
        this.inspectionData.assignedToUserId === userStore.id
      );
    },
  },
  async created() {
    const inspectieId = Number(this.$route.params.id);
    if (
      !this.store.geselecteerdeInspectie ||
      this.store.geselecteerdeInspectie.id !== inspectieId
    ) {
      if (!this.store.inspecties.length) {
        await this.store.fetchInspecties();
      }
      const inspectie = this.store.inspecties.find(
        (item) => item.id === inspectieId
      );
      if (inspectie) {
        this.store.selecteerInspectie({
          ...inspectie,
          damageCheck: inspectie.damageCheck || {
            location: "",
            new: "",
            type: "",
            date: "",
            urgent: "",
            description: "",
            isDefault: false,
            applicable: false,
            photo: "",
          },
          maintenanceCheck: inspectie.maintenanceCheck || {
            location: "",
            type: "",
            urgent: "",
            cost: "",
            isDefault: false,
            applicable: false,
            photo: "",
          },
          technicalCheck: inspectie.technicalCheck || {
            location: "",
            type: "",
            issues: "",
            testProcedure: "",
            approved: "",
            notes: "",
            isDefault: false,
            applicable: false,
            photo: "",
          },
          modificationsCheck: inspectie.modificationsCheck || {
            existing: "",
            location: "",
            performedBy: "",
            description: "",
            action: "",
            notes: "",
            isDefault: false,
            applicable: false,
            photo: "",
          },
        });
      }
    }
  },
  methods: {
    fotoToevoegen(sectie) {
      this.$refs[`foto_${sectie}`].click();
    },
    verwerkFoto(sectie, event) {
      const foto = event.target.files[0];
      if (foto) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.inspectionData[sectie].photo = e.target.result;
        };
        reader.readAsDataURL(foto);
      }
    },
    valideerInspectieGegevens() {
      const d = this.inspectionData.damageCheck;
      const m = this.inspectionData.maintenanceCheck;
      const t = this.inspectionData.technicalCheck;
      const mod = this.inspectionData.modificationsCheck;

      if (d.applicable) {
        if (
          !d.location ||
          !d.new ||
          !d.type ||
          !d.date ||
          !d.urgent ||
          !d.description
        ) {
          return false;
        }
      }
      if (m.applicable) {
        if (!m.location || !m.type || !m.urgent || !m.cost) {
          return false;
        }
      }
      if (t.applicable) {
        if (
          !t.location ||
          !t.type ||
          !t.issues ||
          !t.testProcedure ||
          !t.approved ||
          !t.notes
        ) {
          return false;
        }
      }
      if (mod.applicable) {
        if (
          !mod.existing ||
          !mod.location ||
          !mod.performedBy ||
          !mod.description ||
          !mod.action ||
          !mod.notes
        ) {
          return false;
        }
      }
      return true;
    },
    slaInspectieOp() {
      if (!this.valideerInspectieGegevens()) {
        this.isAlertOpen = true;
        return;
      }
      this.inspectionData.isCompleted = true;
      const isoDatum = new Date().toISOString().slice(0, 10);
      this.inspectionData.completedAt = isoDatum;
      this.store.updateInspectie(this.inspectionData);
      this.$router.push("/uitgevoerde-inspecties");
    },
  },
};
</script>

<style scoped>
.header-color-applicable {
  background-color: var(--kleur-primary);
}

.header-color-normal {
  background-color: var(--kleur-wit);
}
</style>
