import { caseSelectionAndMoves } from "./caseSelectionAndMoves.js";
import { base_Url } from "./baseUrl.js";

export const createBoard = {
    async stepbystepConstruction() {
        const gameData = await createBoard.getChessGameData();
        console.log(gameData); //! TEMPORAIRE DE OUF
        document.querySelector("#app").innerHTML = "";
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
            let gameData = await fetch(base_Url.api_url + "/chess/game/data");
            return gameData.json();
        } catch (error) {
            console.trace(error);
        }
    },

    async resetBoardData() {
        try {
            await fetch(base_Url.api_url + "/chess/board/reset");
            createBoard.stepbystepConstruction();
            return;
        } catch (error) {
            console.trace(error);
        }
    },

    createLayout: () => {
        const app = document.querySelector("#app");

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

        app.appendChild(settingsBox); //! TEMPORAIRE DE OUF
        app.appendChild(board);
        app.appendChild(tableBox); //! TEMPORAIRE DE OUF
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
