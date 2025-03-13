<template>
  <ion-item button class="item-balk" :color="headerColor" @click="toggleOpen">
    <ion-label>
      {{ title }}
      <span v-if="open"> &#x25B2; Inklappen </span>
      <span v-else> &#x25BC; Uitklappen </span>
      <!-- Nvt als de goal niet applicable is -->
      <ion-badge v-if="!toggleApplicable" class="nvt-badge">
        Niet van toepassing
      </ion-badge>
    </ion-label>
  </ion-item>
  <ion-list v-if="open">
    <ion-item>
      <ion-checkbox v-model="toggleApplicable" />
      <ion-label>
        {{
          toggleApplicable
            ? "Markeer als niet van toepassing"
            : "Markeer als van toepassing"
        }}
      </ion-label>
    </ion-item>
    <slot :enabled="toggleApplicable"></slot>
  </ion-list>
</template>

<script>
import { IonItem, IonLabel, IonList, IonBadge, IonCheckbox } from "@ionic/vue";

export default {
  name: "CollapsibleSection",
  components: { IonItem, IonLabel, IonList, IonBadge, IonCheckbox },
  props: {
    title: { type: String, required: true },
    defaultOpen: { type: Boolean, default: false },
    headerColor: { type: String, default: "light" },
    applicable: { type: Boolean, required: true },
  },
  data() {
    return {
      open: this.defaultOpen,
      toggleApplicable: this.applicable,
    };
  },
  // Checkbox toggled de applicable
  watch: {
    toggleApplicable(value) {
      this.$emit("update:applicable", value);
    },
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
.nvt-badge {
  --background: var(--kleur-grijs-1);
}
</style>
