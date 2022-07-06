import { createBoard } from "./createBoard.js";
import { caseSelectionAndMoves } from "./caseSelectionAndMoves.js";

export const chessGame = {
  init: () => {
    createBoard.stepbystepConstruction().then(() => {
      caseSelectionAndMoves.firstStep();
    });
  }
};