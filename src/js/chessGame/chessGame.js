import { createBoard } from "./createBoard.js";

export const chessGame = {
  init: () => {
    createBoard.stepbystepConstruction();
  }
};