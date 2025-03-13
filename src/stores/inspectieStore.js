import { defineStore } from "pinia";
import InspectieService from "../services/InspectieService";

export const useInspectieStore = defineStore("inspecties", {
  state: () => ({
    inspecties: [],
    geselecteerdeInspectie: null,
    loadingStatus: "notloading",
    error: null,
  }),
  actions: {
    // Fetch de inspecties uit de API via de InspectieService
    async fetchInspecties() {
      this.loadingStatus = "loading";
      this.error = null;
      try {
        const response = await InspectieService.fetchInspectiesUitAPI();
        this.inspecties = response.data.inspections;
      } catch (err) {
        this.error = err;
      } finally {
        this.loadingStatus = "notloading";
      }
    },
    selecteerInspectie(inspectie) {
      this.geselecteerdeInspectie = inspectie;
    },
    updateInspectie(inspectie) {
      this.inspecties = this.inspecties.map((i) =>
        i.id === inspectie.id ? inspectie : i
      );
    },
  },
  getters: {
    // Een getter om alleen de inspecties te tonen die bij de user horen en nog niet uitgevoerd zijn.
    gebruikerInspecties: (state) => {
      return (userId) =>
        state.inspecties.filter(
          (inspectie) =>
            inspectie.assignedToUserId === userId && !inspectie.isCompleted
        );
    },
  },
});
