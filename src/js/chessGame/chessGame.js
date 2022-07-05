import { createBoard } from "./createBoard.js";
// import { placePiecesonBoard } from "./placePiecesonBoard.js";
// import { caseSelectionAndMoves } from "./caseSelectionAndMoves.js";

export const chessGame = {
  init: () => {
    createBoard.stepbystepConstruction();
  }
};