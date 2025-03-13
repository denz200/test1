import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: null,
    name: "",

    weergaveNaam: "",
    avatar: "",
    darkMode: false,
    meldingenIngeschakeld: true,
    geluidenIngeschakeld: true,
  }),
  actions: {
    setUser(userData) {
      this.id = userData.id;
      this.name = userData.name;
      this.weergaveNaam = userData.weergaveNaam || userData.name;
      this.avatar = userData.avatar;
      this.darkMode = userData.darkMode || false;
      this.meldingenIngeschakeld = userData.meldingenIngeschakeld ?? true;
      this.geluidenIngeschakeld = userData.geluidenIngeschakeld ?? true;
    },
    updateWeergaveNaam(nieuweNaam) {
      this.weergaveNaam = nieuweNaam;
    },
    updateAvatar(nieuweAvatar) {
      this.avatar = nieuweAvatar;
    },
    updateDarkMode(isDark) {
      this.darkMode = isDark;
    },
    updateMeldingen(isIngeschakeld) {
      this.meldingenIngeschakeld = isIngeschakeld;
    },
    updateGeluiden(isIngeschakeld) {
      this.geluidenIngeschakeld = isIngeschakeld;
    },
    logout() {
      this.id = null;
      this.name = "";
      this.weergaveNaam = "";
      this.avatar = "";
      this.darkMode = false;
      this.meldingenIngeschakeld = true;
      this.geluidenIngeschakeld = true;
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.id,
  },
});
