// Importation de Pinia, le store officiel de Vue.js
import { defineStore } from "pinia";

export const useMainStore = defineStore("Main", {
    state: () => ({
        account: {
            connected: false,
            nickname: null,
            mail: null,
            token: null,
        },
        modalData: {
            menu: false,
            open: false,
            type: null,
            loading: false,
            headerVisibility: true,
        },
    }),
});
