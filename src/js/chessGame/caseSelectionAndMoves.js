import {
  base_Url
} from "./baseUrl.js";
import {
  chessGame
} from "./chessGame.js";

export const caseSelectionAndMoves = {
  gameData: {},
  isSelectedCase: false,

  async movesAndEventHandling(gameData) {
    console.log(gameData);
    caseSelectionAndMoves.gameData = gameData;
    caseSelectionAndMoves.isSelectedCase = false;
    caseSelectionAndMoves.enableSelectPiece();
  },

  getCaseWithCurrentColorPieces: () => {
    return document.querySelectorAll(`.pc--${caseSelectionAndMoves.gameData.currentPlayerColor}`);
  },

  enableSelectPiece: () => {
    caseSelectionAndMoves.getCaseWithCurrentColorPieces().forEach(element => element.addEventListener("click", caseSelectionAndMoves.selection, false));
  },

  selection: (event) => {
    const selectedCase = event.target;
    caseSelectionAndMoves.isSelectedCase = true;
    caseSelectionAndMoves.highlightPiecesCanMove();
    selectedCase.classList.add("selectedCase");
    caseSelectionAndMoves.getCaseWithCurrentColorPieces().forEach(element => element.removeEventListener("click", caseSelectionAndMoves.selection, false));
    caseSelectionAndMoves.showPossibleMoves(selectedCase);
    selectedCase.addEventListener("click", caseSelectionAndMoves.deselectPiece, false);
  },

  deselectPiece: (event) => {
    const deselectedCase = event.target;
    deselectedCase.classList.remove("selectedCase");
    caseSelectionAndMoves.isSelectedCase = false;
    caseSelectionAndMoves.highlightPiecesCanMove();
    deselectedCase.removeEventListener("click", caseSelectionAndMoves.deselectPiece, false);
    const showMove = document.querySelectorAll(".possibleMove");
    if (showMove) {
      showMove.forEach(element => {
        element.classList.remove("possibleMove");
        element.removeEventListener("click", caseSelectionAndMoves.sendMoveToVerif, false);
      });
    }
    caseSelectionAndMoves.enableSelectPiece();
  },

  highlightPiecesCanMove: () => {
    for (let [key, value] of Object.entries(caseSelectionAndMoves.gameData.currentColorMovesData.moves)) {
      if (value !== null) {
        const x = document.querySelector(`[piece_id=${key}]`);
        if (caseSelectionAndMoves.isSelectedCase === false && document.querySelector(".checkShows-input").checked === true) {
          x.classList.add("piece-can-moves");
        } else {
          x.classList.remove("piece-can-moves");
        }
      }
    }
  },

  showPossibleMoves: (selectedCase) => {
    const piece_id = selectedCase.getAttribute("piece_id");
    const selectedCasePossiblesMoves = caseSelectionAndMoves.gameData.currentColorMovesData.moves[piece_id];
    if (selectedCasePossiblesMoves) {
      for (let [, value] of Object.entries(selectedCasePossiblesMoves)) {
        const oneMove = document.querySelector(`[case_name=${value.destinationCase}]`);
        oneMove.classList.add("possibleMove");
        oneMove.addEventListener("click", caseSelectionAndMoves.sendMoveToVerif, false);
      }
    }
  },

  async sendMoveToVerif(event) {
    let move = {};
    const piece_id = document.querySelector(".selectedCase").getAttribute("piece_id");
    const ourPieceMoves = caseSelectionAndMoves.gameData.currentColorMovesData.moves[piece_id];

    for (let [key, value] of Object.entries(ourPieceMoves)) {
      if (value.destinationCase === event.target.getAttribute("case_name")) {
        move = {
          order: key,
          piece_id: piece_id,
          originCase: ourPieceMoves[key].originCase,
          destinationCase: ourPieceMoves[key].destinationCase,
          killingMove: ourPieceMoves[key].killingMove,
          killCase: ourPieceMoves[key].killCase,
        };
      }
    }
    try {
      const response = await fetch(base_Url.api_url + "/chess/move/verif", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(move),

      });
      if (response.ok) {
        chessGame.init();
      }
    } catch (error) {
      console.trace(error);
    }
  }
};