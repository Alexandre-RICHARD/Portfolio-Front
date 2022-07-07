import { base_Url } from "./baseUrl.js";

export const caseSelectionAndMoves = {

  possibleMovesData: {},

  movesAndEventHandling: () => {
    caseSelectionAndMoves.getPossibleMovesData();
    // caseSelectionAndMoves.enableSelectPiece();
    // caseSelectionAndMoves.showPossibleMoves();
    // caseSelectionAndMoves.deselectPiece();
  },

  async getPossibleMovesData () {
    try {
      let data = await fetch(base_Url.api_url + "/moves/data");
      caseSelectionAndMoves.possibleMovesData = await data.json();
      console.log(caseSelectionAndMoves.possibleMovesData);
    }
    catch (error) {
      console.trace(error);
    }
  },
  
  enableSelectPiece: () => {
  },

  showPossibleMoves: () => {

  },

  deselectPiece: () => {

  },
};