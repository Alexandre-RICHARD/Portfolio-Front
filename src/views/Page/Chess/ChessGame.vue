<script setup>
import { onMounted } from "vue";

import PieceBishop from "./PieceBishop.vue";
import PieceKing from "./PieceKing.vue";
import PieceKnight from "./PieceKnight.vue";
import PiecePawn from "./PiecePawn.vue";
import PieceQueen from "./PieceQueen.vue";
import PieceRook from "./PieceRook.vue";

const API_URL = process.env.API_URL;

const createBoard = {
    async stepbystepConstruction() {
        const gameData = await createBoard.getChessGameData();
        console.log(gameData); //! TEMPORAIRE DE OUF
        document.querySelector("#chessGame").innerHTML = "";
        createBoard.createLayout();
        createBoard.createPawnModal();
        createBoard.createLetters();
        createBoard.createNumbers();
        createBoard.temporaryParts1(gameData); //! TEMPORAIRE DE OUF
        if (typeof gameData === "object") {
            createBoard.createCases(gameData);
            caseSelectionAndMoves.movesAndEventHandling(gameData);
            createBoard.temporaryParts2(gameData); //! TEMPORAIRE DE OUF
        }
    },

    async getChessGameData() {
        try {
            let gameData = await fetch(API_URL + "/chess/game/data");
            return gameData.json();
        } catch (error) {
            console.trace(error);
        }
    },

    async resetBoardData() {
        try {
            await fetch(API_URL + "/chess/board/reset");
            createBoard.stepbystepConstruction();
            return;
        } catch (error) {
            console.trace(error);
        }
    },

    createLayout: () => {
        const chessGame = document.querySelector("#chessGame");

        const settingsBox = document.createElement("div"); //! TEMPORAIRE DE OUF
        settingsBox.classList.add("settingsBox"); //! TEMPORAIRE DE OUF
        const board = document.createElement("div");
        board.classList.add("board-container");
        const tableBox = document.createElement("div"); //! TEMPORAIRE DE OUF
        tableBox.classList.add("tableBox"); //! TEMPORAIRE DE OUF

        const cornerBox = document.createElement("div");
        cornerBox.classList.add("corner");

        const lettersUp = document.createElement("div");
        const numbersLeft = document.createElement("div");
        const numbersRight = document.createElement("div");
        const lettersDown = document.createElement("div");

        lettersUp.classList.add("lettersBox");
        lettersUp.id = "lettersBox1";
        numbersLeft.classList.add("numbersBox");
        numbersLeft.id = "numbersBox1";
        numbersRight.classList.add("numbersBox");
        numbersRight.id = "numbersBox2";
        lettersDown.classList.add("lettersBox");
        lettersDown.id = "lettersBox2";

        const piecesBox = document.createElement("div");
        piecesBox.classList.add("piecesBox");

        board.appendChild(cornerBox.cloneNode(true));
        board.appendChild(lettersUp);
        board.appendChild(cornerBox.cloneNode(true));
        board.appendChild(numbersLeft);
        board.appendChild(piecesBox);
        board.appendChild(numbersRight);
        board.appendChild(cornerBox.cloneNode(true));
        board.appendChild(lettersDown);
        board.appendChild(cornerBox.cloneNode(true));

        chessGame.appendChild(settingsBox); //! TEMPORAIRE DE OUF
        chessGame.appendChild(board);
        chessGame.appendChild(tableBox); //! TEMPORAIRE DE OUF
    },

    createPawnModal: () => {
        const pawnTransformationModal = document.createElement("div");
        pawnTransformationModal.id = "pawnTransformationModal";
        pawnTransformationModal.classList.add("invisible");

        const pawnChoiceBoxTL = document.createElement("div");
        pawnChoiceBoxTL.classList.add("pawnChoiceBoxTL", "piecechoiceBox");
        pawnChoiceBoxTL.addEventListener(
            "click",
            caseSelectionAndMoves.testBeforeSendMove,
            false
        );
        pawnChoiceBoxTL.setAttribute("pieceType", "knight");
        const knightSVG = document.importNode(
            document.querySelector("#knightSVG").content,
            true
        );
        pawnChoiceBoxTL.appendChild(knightSVG);
        pawnTransformationModal.appendChild(pawnChoiceBoxTL);

        const pawnChoiceBoxTR = document.createElement("div");
        pawnChoiceBoxTR.classList.add("pawnChoiceBoxTR", "piecechoiceBox");
        pawnChoiceBoxTR.addEventListener(
            "click",
            caseSelectionAndMoves.testBeforeSendMove,
            false
        );
        pawnChoiceBoxTR.setAttribute("pieceType", "bishop");
        const bishopSVG = document.importNode(
            document.querySelector("#bishopSVG").content,
            true
        );
        pawnChoiceBoxTR.appendChild(bishopSVG);
        pawnTransformationModal.appendChild(pawnChoiceBoxTR);

        const pawnChoiceBoxBL = document.createElement("div");
        pawnChoiceBoxBL.classList.add("pawnChoiceBoxBL", "piecechoiceBox");
        pawnChoiceBoxBL.addEventListener(
            "click",
            caseSelectionAndMoves.testBeforeSendMove,
            false
        );
        pawnChoiceBoxBL.setAttribute("pieceType", "rook");
        const rookSVG = document.importNode(
            document.querySelector("#rookSVG").content,
            true
        );
        pawnChoiceBoxBL.appendChild(rookSVG);
        pawnTransformationModal.appendChild(pawnChoiceBoxBL);

        const pawnChoiceBoxBR = document.createElement("div");
        pawnChoiceBoxBR.classList.add("pawnChoiceBoxBR", "piecechoiceBox");
        pawnChoiceBoxBR.addEventListener(
            "click",
            caseSelectionAndMoves.testBeforeSendMove,
            false
        );
        pawnChoiceBoxBR.setAttribute("pieceType", "queen");
        const queenSVG = document.importNode(
            document.querySelector("#queenSVG").content,
            true
        );
        pawnChoiceBoxBR.appendChild(queenSVG);
        pawnTransformationModal.appendChild(pawnChoiceBoxBR);

        document
            .querySelector(".board-container")
            .appendChild(pawnTransformationModal);
    },

    createLetters: () => {
        const lettersStock = ["A", "B", "C", "D", "E", "F", "G", "H"];
        for (let x = 1; x < 3; x++) {
            for (let y = 0; y < 8; y++) {
                const letter = document.createElement("div");
                letter.classList.add("letter");
                const p = document.createElement("p");
                p.classList.add("board-text");
                p.textContent = lettersStock[y];
                letter.appendChild(p);
                document.querySelector(`#lettersBox${x}`).appendChild(letter);
            }
        }
    },

    createNumbers: () => {
        for (let x = 1; x < 3; x++) {
            for (let y = 0; y < 8; y++) {
                const number = document.createElement("div");
                number.classList.add("number");
                number.setAttribute("y", 8 - y);
                const p = document.createElement("p");
                p.classList.add("board-text");
                p.textContent = 8 - y;
                number.appendChild(p);
                document.querySelector(`#numbersBox${x}`).appendChild(number);
            }
        }
    },

    createCases: (gameData) => {
        let z = 0;
        for (let y = 8; y > 0; y--) {
            for (let x = 1; x < 9; x++) {
                const currentCase = gameData.boardData.find(
                    (element) => element.x === x && element.y === y
                );
                const boardCase = document.createElement("div");
                boardCase.classList.add(
                    "case",
                    z % 2 === 0 ? "case--white" : "case--black"
                );
                boardCase.id = `${currentCase.x}${currentCase.y}`;
                boardCase.setAttribute("case_name", currentCase.case_name);
                z++;
                if (currentCase.piece_name !== null) {
                    boardCase.classList.add(
                        `pc--${currentCase.piece_color}`,
                        `${currentCase.piece_name}`
                    );
                    const clone = document.importNode(
                        document.querySelector(`#${currentCase.piece_name}SVG`)
                            .content,
                        true
                    );
                    boardCase.appendChild(clone);
                    boardCase.setAttribute("piece_id", currentCase.piece_id);
                }
                document.querySelector(".piecesBox").appendChild(boardCase);
            }
            z++;
        }
    },

    //! TEMPORAIRE DE OUF
    temporaryParts1: (gameData) => {
        const settingsBox = document.querySelector(".settingsBox");

        const resetButton = document.createElement("button");
        resetButton.classList.add("resetButton");
        resetButton.textContent = "Reset le board";
        resetButton.addEventListener("click", createBoard.resetBoardData);

        const movesCounter = document.createElement("p");
        movesCounter.classList.add("movesCounter");

        const checkShowsLabel = document.createElement("label");
        checkShowsLabel.textContent = "Surligner les pièces pouvant bouger";
        checkShowsLabel.classList.add("checkShows-label");

        const checkShowsInput = document.createElement("input");
        checkShowsInput.classList.add("checkShows-input");
        checkShowsInput.addEventListener(
            "change",
            caseSelectionAndMoves.highlightPiecesCanMove
        );
        checkShowsInput.setAttribute("type", "checkbox");
        checkShowsInput.setAttribute("checked", "");
        checkShowsLabel.appendChild(checkShowsInput);

        settingsBox.appendChild(resetButton);
        if (typeof gameData === "object") {
            movesCounter.textContent = `Tour des ${
                gameData.currentPlayerColor === "white" ? "blancs" : "noirs"
            } : ${
                gameData.currentColorMovesData.totalNumberPossibleMoves
            } coups possibles`;
            settingsBox.appendChild(movesCounter);
            settingsBox.appendChild(checkShowsLabel);
        }
    },

    temporaryParts2: (gameData) => {
        const tableBox = document.querySelector(".tableBox");
        const thead = document.createElement("thead");
        const tr1 = document.createElement("tr");
        for (const property in gameData.boardData[0]) {
            const prop = document.createElement("th");
            prop.textContent = property;
            tr1.appendChild(prop);
        }
        thead.appendChild(tr1);
        tableBox.appendChild(thead);
        const tbody = document.createElement("thead");
        gameData.boardData.forEach((element) => {
            const tr2 = document.createElement("tr");
            for (const key in element) {
                const td = document.createElement("td");
                if (element[key] !== null) {
                    td.textContent = element[key];
                } else {
                    td.classList.add("emptyTD");
                }
                tr2.appendChild(td);
            }
            tbody.appendChild(tr2);
        });
        tableBox.appendChild(tbody);
    },
    //! TEMPORAIRE DE OUF
};















const caseSelectionAndMoves = {
    gameData: {},
    isSelectedCase: false,
    move: {},

    movesAndEventHandling: (gameData) => {
        caseSelectionAndMoves.gameData = gameData;
        caseSelectionAndMoves.isSelectedCase = false;
        caseSelectionAndMoves.highlightPiecesCanMove();
        caseSelectionAndMoves.enableSelectPiece();
    },

    getCaseWithCurrentColorPieces: () => {
        return document.querySelectorAll(
            `.pc--${caseSelectionAndMoves.gameData.currentPlayerColor}`
        );
    },

    enableSelectPiece: () => {
        caseSelectionAndMoves
            .getCaseWithCurrentColorPieces()
            .forEach((element) =>
                element.addEventListener(
                    "click",
                    caseSelectionAndMoves.selection,
                    false
                )
            );
    },

    selection: (event) => {
        const selectedCase = event.target;
        caseSelectionAndMoves.isSelectedCase = true;
        caseSelectionAndMoves.highlightPiecesCanMove();
        selectedCase.classList.add("selectedCase");
        caseSelectionAndMoves
            .getCaseWithCurrentColorPieces()
            .forEach((element) =>
                element.removeEventListener(
                    "click",
                    caseSelectionAndMoves.selection,
                    false
                )
            );
        caseSelectionAndMoves.showPossibleMoves(selectedCase);
        selectedCase.addEventListener(
            "click",
            caseSelectionAndMoves.deselectPiece,
            false
        );
    },

    deselectPiece: (event) => {
        const deselectedCase = event.target;
        deselectedCase.classList.remove("selectedCase");
        caseSelectionAndMoves.isSelectedCase = false;
        caseSelectionAndMoves.highlightPiecesCanMove();
        deselectedCase.removeEventListener(
            "click",
            caseSelectionAndMoves.deselectPiece,
            false
        );
        const showMove = document.querySelectorAll(".possibleMove");
        if (showMove) {
            showMove.forEach((element) => {
                element.classList.remove("possibleMove");
                element.removeEventListener(
                    "click",
                    caseSelectionAndMoves.testBeforeSendMove,
                    false
                );
            });
        }
        caseSelectionAndMoves.enableSelectPiece();
    },

    highlightPiecesCanMove: () => {
        for (let [key, value] of Object.entries(
            caseSelectionAndMoves.gameData.currentColorMovesData.moves
        )) {
            if (value !== null) {
                const x = document.querySelector(`[piece_id=${key}]`);
                if (
                    caseSelectionAndMoves.isSelectedCase === false &&
                    document.querySelector(".checkShows-input").checked === true
                ) {
                    x.classList.add("piece-can-moves");
                } else {
                    x.classList.remove("piece-can-moves");
                }
            }
        }
    },

    showPossibleMoves: (selectedCase) => {
        const piece_id = selectedCase.getAttribute("piece_id");
        const selectedCasePossiblesMoves =
            caseSelectionAndMoves.gameData.currentColorMovesData.moves[
                piece_id
            ];
        if (selectedCasePossiblesMoves) {
            for (let [, value] of Object.entries(selectedCasePossiblesMoves)) {
                const oneMove = document.querySelector(
                    `[case_name=${value.destinationCase}]`
                );
                oneMove.classList.add("possibleMove");
                oneMove.addEventListener(
                    "click",
                    caseSelectionAndMoves.testBeforeSendMove,
                    false
                );
            }
        }
    },

    testBeforeSendMove: (event) => {
        if (
            ["knight", "bishop", "rook", "queen"].indexOf(
                event.target.getAttribute("pieceType")
            ) >= 0
        ) {
            caseSelectionAndMoves.move = {
                ...caseSelectionAndMoves.move,
                pawnTransformationPieceType:
                    event.target.getAttribute("pieceType"),
            };
            caseSelectionAndMoves.sendMoveToVerif(caseSelectionAndMoves.move);
        } else {
            const piece_id = document
                .querySelector(".selectedCase")
                .getAttribute("piece_id");
            const ourMove =
                caseSelectionAndMoves.gameData.currentColorMovesData.moves[
                    piece_id
                ][event.target.getAttribute("case_name")];
            caseSelectionAndMoves.move = {};

            const destinationCase = document
                .querySelector(`[case_name="${ourMove.destinationCase}"]`)
                .getAttribute("case_name");
            const isPawn =
                Object.values(
                    document.querySelector(".selectedCase").classList
                ).indexOf("pawn") >= 0
                    ? true
                    : false;
            const pieceColor =
                Object.values(
                    document
                        .querySelector(".selectedCase")
                        .getAttribute("piece_id")
                )[2] === "w"
                    ? "white"
                    : "black";

            caseSelectionAndMoves.move = {
                piece_id: piece_id,
                originCase: ourMove.originCase,
                destinationCase: ourMove.destinationCase,
                killingMove: ourMove.killingMove,
                killCase: ourMove.killCase,
            };

            if (
                isPawn === true &&
                ((destinationCase.charAt(1) === "8" &&
                    pieceColor === "white") ||
                    (destinationCase.charAt(1) === "1" &&
                        pieceColor === "black"))
            ) {
                document
                    .querySelector("#pawnTransformationModal")
                    .classList.remove("invisible");
            } else {
                caseSelectionAndMoves.sendMoveToVerif(
                    caseSelectionAndMoves.move
                );
            }
        }
    },

    async sendMoveToVerif(move) {
        try {
            const response = await fetch(
                API_URL + "/chess/move/verif",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(move),
                }
            );
            if (response.ok) {
                chessGame.init();
            }
        } catch (error) {
            console.trace(error);
        }
    },
};




const chessGame = {
    init: () => {
        createBoard.stepbystepConstruction();
    },
};


onMounted(() => {
    chessGame.init();
});


</script>

<template>
    <div id="chessGame" />
</template>