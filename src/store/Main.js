// Importation de Pinia, le store officiel de Vue.js
import { defineStore } from "pinia";

// On nomme notre Store "Portfolio" et on l'exporte sous le nom UsePortfolioStore
export const useMainStore = defineStore("Main", {
    // Le state de ce Store sert à créé nos liens de navigations dans la page d'accueil de notre portfolio
    state: () => ({
        theme: {
            selected: "classic",
            classic: {
                backgroundColor: "#0f0e17",
                smoothBackgroundColor: "#242230",
                titleColor: "#fffffe",
                textColor: "#a7a9be",
                textShadowColor: "#0f0e178e",
                headerColor: "#f25f4c",
                buttonColorOne: "#ff8906",
                buttonColorTwo: "#e53170",
            },
            modern: {
                backgroundColor: "#16161a",
                smoothBackgroundColor: "#28282e",
                titleColor: "#fffffe",
                textColor: "#94a1b2",
                textShadowColor: "#16161a8e",
                headerColor: "#5a8ef0",
                buttonColorOne: "#825af0",
                buttonColorTwo: "#72757e",
            },
            light: {
                backgroundColor: "#fffffe",
                smoothBackgroundColor: "#d1d1d1",
                titleColor: "#00214d",
                textColor: "#1b2d45",
                textShadowColor: "#fffffe8e",
                headerColor: "#ff5470",
                buttonColorOne: "#26d6c7",
                buttonColorTwo: "#d6bc26",
            },
            dark: {
                backgroundColor: "#16161a",
                smoothBackgroundColor: "#232325",
                titleColor: "#fffffe",
                textColor: "#a7a9be",
                textShadowColor: "#16161a8e",
                headerColor: "#7f5af0",
                buttonColorOne: "#2cb67d",
                buttonColorTwo: "#72757e",
            },
        },
        headerLinks: {
            currentSection: null,
            Home: [
                {
                    id: 0,
                    type: "link",
                    content: "Portfolio",
                    link: "PortfolioHome",
                    section: "Portfolio",
                },
                {
                    id: 1,
                    type: "link",
                    content: "TryHard but SlowRun",
                    link: "TryHardHome",
                    section: "TryHard",
                },
            ],
            Portfolio: [
                {
                    id: 0,
                    type: "link",
                    content: "Accueil",
                    link: "PortfolioHome",
                    section: "Portfolio",
                },
                {
                    id: 1,
                    type: "link",
                    content: "Curriculum",
                    link: "PortfolioCurriculum",
                    section: "Portfolio",
                },
                {
                    id: 2,
                    type: "link",
                    content: "Projets",
                    link: "PortfolioProject",
                    section: "Portfolio",
                },
                {
                    id: 3,
                    type: "link",
                    content: "Contact",
                    link: "PortfolioContact",
                    section: "Portfolio",
                },
            ],
            TryHard: [
                {
                    id: 0,
                    type: "link",
                    content: "Accueil",
                    link: "TryHardHome",
                    section: "TryHard",
                },
            ],
        },
        headerModals: [
            // Un ID pour différencier dans le for in, le contenu indiqué sur le lien et le lien
            { id: 0, type: "modal", content: "Connexion", link: "login" },
            { id: 1, type: "modal", content: "Inscription", link: "register" },
        ],
        modalData: {
            open: false,
            type: null,
        },
    }),
});
