import { chessGame } from "./js/chessGame/chessGame.js";

const app = () => {
    chessGame.init();
};

document.addEventListener("DOMContentLoaded", app);
