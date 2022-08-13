import {
    defineStore
} from "pinia";
export const usePortfolioStore = defineStore("Portfolio", {
    state: () => ({
        headerLinks: [
            {id: 0, content: "Accueil", link: "/"},
            {id: 1, content: "Curriculum", link: "curriculum"},
            {id: 2, content: "Projets", link: "project"},
            {id: 3, content: "Contact", link: "contact"}
        ],
    }),
});