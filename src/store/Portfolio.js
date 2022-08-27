// Importation de Pinia, le store officiel de Vue.js
import { defineStore } from "pinia";

// On nomme notre Store "Portfolio" et on l'exporte sous le nom UsePortfolioStore
export const usePortfolioStore = defineStore("Portfolio", {
    // Le state de ce Store sert à créé nos liens de navigations dans la page d'accueil de notre portfolio
    state: () => ({
        headerLinks: [
            // Un ID pour différencier dans le for in, le contenu indiqué sur le lien et le lien
            { id: 0, type: "link", content: "Accueil", link: "PortfolioHome" },
            { id: 1, type: "link", content: "Curriculum", link: "PortfolioCurriculum" },
            { id: 2, type: "link", content: "Projets", link: "PortfolioProject" },
            { id: 3, type: "link", content: "Contact", link: "PortfolioContact" },
        ],
        headerModals: [
            // Un ID pour différencier dans le for in, le contenu indiqué sur le lien et le lien
            { id: 4, type: "modal", content: "Connexion", link: "loginModal" },
            { id: 5, type: "modal", content: "Inscription", link: "registerModal" },
        ],
    }),
});
