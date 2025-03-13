import { useUserStore } from "../stores/userStore";

export default {
  data() {
    return {
      showToast: false,
      toastMessage: "",
    };
  },
  methods: {
    // Standaard waardes voor alle data
    getInspectieMetDefaults(inspectie) {
      const standaardInspectie = {
        id: null,
        name: "",
        location: "",
        date: "",
        damageCheck: {
          location: "",
          new: "",
          type: "",
          date: "",
          urgent: "",
          description: "",
          isDefault: false,
          applicable: false,
        },
        maintenanceCheck: {
          location: "",
          type: "",
          urgent: "",
          cost: "",
          isDefault: false,
          applicable: false,
        },
        technicalCheck: {
          location: "",
          type: "",
          issues: "",
          testProcedure: "",
          approved: "",
          notes: "",
          isDefault: false,
          applicable: false,
        },
        modificationsCheck: {
          existing: "",
          location: "",
          performedBy: "",
          description: "",
          action: "",
          notes: "",
          isDefault: false,
          applicable: false,
        },
      };
      return {
        ...standaardInspectie,
        ...inspectie,
      };
    },
    showToastMelding(message) {
      this.toastMessage = message;
      this.showToast = true;
    },
  },
  computed: {
    loadingStatus() {
      return this.store.loadingStatus;
    },
    error() {
      return this.store.error;
    },
    // Laat alleen de inspecties zien die bij de user horen
    userInspecties() {
      const userStore = useUserStore();
      return this.store.gebruikerInspecties(userStore.id);
    },
  },
};
