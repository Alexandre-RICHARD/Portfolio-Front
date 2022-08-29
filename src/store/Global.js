// Importation de Pinia, le store officiel de Vue.js
import { defineStore } from "pinia";

// On nomme notre Store "Portfolio" et on l'exporte sous le nom UsePortfolioStore
export const useGlobalStore = defineStore("Global", {
    // Le state de ce Store sert à créé nos liens de navigations dans la page d'accueil de notre portfolio
    state: () => ({
        modalData: {
            open: false,
            type: null,
        }
    }),
});
