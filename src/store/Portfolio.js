// Importation de Pinia, le store officiel de Vue.js
import { defineStore } from "pinia";

// On nomme notre Store "Portfolio" et on l'exporte sous le nom UsePortfolioStore
export const usePortfolioStore = defineStore("Portfolio", {
    // Le state de ce Store sert à créé nos liens de navigations dans la page d'accueil de notre portfolio
    state: () => ({
        headerLinks: [
            // Un ID pour différencier dans le for in, le contenu indiqué sur le lien et le lien
            {id: 0, content: "Accueil", link: ""},
            {id: 1, content: "Curriculum", link: "curriculum"},
            {id: 2, content: "Projets", link: "project"},
            {id: 3, content: "Contact", link: "contact"}
        ],
    }),
});