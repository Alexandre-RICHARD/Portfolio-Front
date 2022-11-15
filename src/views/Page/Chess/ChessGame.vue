<script setup>
import { onMounted, reactive, ref } from "vue";

import PieceBishop from "./PieceBishop.vue";
import PieceKing from "./PieceKing.vue";
import PieceKnight from "./PieceKnight.vue";
import PiecePawn from "./PiecePawn.vue";
import PieceQueen from "./PieceQueen.vue";
import PieceRook from "./PieceRook.vue";

const API_URL = process.env.API_URL;

const pieceSVGComponent = {
    bishop: PieceBishop,
    king: PieceKing,
    knight: PieceKnight,
    pawn: PiecePawn,
    queen: PieceQueen,
    rook: PieceRook,
};

const pawnModalData = [
    {
        key: 1,
        coin: "tl",
        piece: "knight",
    },
    {
        key: 2,
        coin: "tr",
        piece: "bishop",
    },
    {
        key: 3,
        coin: "bl",
        piece: "rook",
    },
    {
        key: 4,
        coin: "br",
        piece: "queen",
    },
];

const lettersStock = ["A", "B", "C", "D", "E", "F", "G", "H"];
const numbersStock = [8, 7, 6, 5, 4, 3, 2, 1];

let gameData = reactive({});
let gameDataReady = ref(false);
let componentReady = ref(false);

onMounted(async () => {
    await updateData();
    if (gameDataReady.value) {
        caseSelectionAndMoves.movesAndEventHandling();
        componentReady.value = true;
    }
});

const updateData = async () => {
    const result = await updateGameData();
    if (result.ready) {
        Object.assign(gameData, result.gameData);
        gameDataReady.value = true;
    } else {
        gameDataReady.value = false;
    }
    if (gameDataReady.value && componentReady.value) {
        caseSelectionAndMoves.movesAndEventHandling();
    }
};

const updateGameData = async () => {
    try {
        return await (await fetch(API_URL + "/chess/game/data")).json();
    } catch (error) {
        console.trace(error);
    }
};

const resetGame = async () => {
    try {
        await fetch(API_URL + "/chess/board/reset");
        await updateData();
    } catch (error) {
        console.trace(error);
    }
};

const caseSelectionAndMoves = {
    isSelectedCase: false,
    move: {},

    movesAndEventHandling: () => {
        caseSelectionAndMoves.isSelectedCase = false;
        caseSelectionAndMoves.resetAll();
        caseSelectionAndMoves.highlightPiecesCanMove();
        caseSelectionAndMoves.enableSelectPiece();
    },

    resetAll: () => {
        document.querySelectorAll(".case").forEach((element) => {
            element.classList.remove("piece-can-moves");
            element.removeEventListener(
                "click",
                caseSelectionAndMoves.selection,
                false
            );
            element.classList.remove("possible-move");
            element.removeEventListener(
                "click",
                caseSelectionAndMoves.testBeforeSendMove,
                false
            );
            element.classList.remove("selectedCase");
            element.removeEventListener(
                "click",
                caseSelectionAndMoves.deselectPiece,
                false
            );
            document
                .querySelector("#pawnTransformationModal")
                .classList.add("invisible");
        });
    },

    getCaseWithCurrentColorPieces: () => {
        return document.querySelectorAll(`.pc--${gameData.currentPlayerColor}`);
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
        const showMove = document.querySelectorAll(".possible-move");
        if (showMove) {
            showMove.forEach((element) => {
                element.classList.remove("possible-move");
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
            gameData.currentColorMovesData.moves
        )) {
            if (value !== null) {
                const x = document.querySelector(`[piece_id=${key}]`);
                if (
                    caseSelectionAndMoves.isSelectedCase === false &&
                    document.querySelector(".check-shows-input").checked ===
                    true
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
            gameData.currentColorMovesData.moves[piece_id];
        if (selectedCasePossiblesMoves) {
            for (let [, value] of Object.entries(selectedCasePossiblesMoves)) {
                const oneMove = document.querySelector(
                    `[case_name=${value.destinationCase}]`
                );
                oneMove.classList.add("possible-move");
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
            sendMoveToVerif(caseSelectionAndMoves.move);
        } else {
            const piece_id = document
                .querySelector(".selectedCase")
                .getAttribute("piece_id");
            const ourMove =
                gameData.currentColorMovesData.moves[piece_id][
                    event.target.getAttribute("case_name")
                ];
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
                sendMoveToVerif(caseSelectionAndMoves.move);
            }
        }
    },
};

const sendMoveToVerif = async (move) => {
    try {
        const response = await fetch(API_URL + "/chess/move/verif", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(move),
        });
        if (response.ok) {
            updateData();
        }
    } catch (error) {
        console.trace(error);
    }
};
</script>

<template>
    <button v-if="!gameDataReady" class="reset-button" @click="resetGame">
        Cliquer pour reset
    </button>
    <div v-if="gameDataReady" id="chessGame">
        <div class="settings-box">
            <button class="reset-button" @click="resetGame">
                Cliquer pour reset
            </button>
            <p class="moves-counter">
                {{
                    `Tour des ${
                        gameData.currentPlayerColor === "white"
                            ? "blancs"
                            : "noirs"
                    } : ${
                        gameData.currentColorMovesData.totalNumberPossibleMoves
                    } coups possibles`
                }}
            </p>
            <div class="checked-box-input">
                <input
                    id="showsMovesInput"
                    name="showsMovesInput"
                    class="check-shows-input"
                    type="checkbox"
                    checked
                    @change="caseSelectionAndMoves.highlightPiecesCanMove"
                >
                <label for="showsMovesInput" class="check-shows-label">Surligner les pièces pouvant bouger</label>
            </div>
        </div>

        <div class="board-container">
            <div class="corner" />
            <div class="letters-box">
                <div
                    v-for="letter in lettersStock"
                    :key="letter"
                    class="letter"
                >
                    <p class="board-text">{{ letter }}</p>
                </div>
            </div>
            <div class="corner" />
            <div id="numbers-box1" class="numbers-box">
                <div
                    v-for="number in numbersStock"
                    :key="number"
                    class="number"
                >
                    <p class="board-text">{{ number }}</p>
                </div>
            </div>

            <div class="pieces-box">
                <div id="pawnTransformationModal" class="invisible">
                    <div
                        v-for="choice in pawnModalData"
                        :key="choice.key"
                        :class="`piecechoice-box pawn-choice-box-${choice.coin}`"
                        :pieceType="choice.piece"
                        @click="caseSelectionAndMoves.testBeforeSendMove"
                    >
                        <component :is="pieceSVGComponent[choice.piece]" />
                    </div>
                </div>
                <div
                    v-for="currentCase in gameData.boardData"
                    :id="`${currentCase.x}${currentCase.y}`"
                    :key="currentCase.id"
                    :class="`case case--${currentCase.case_color} ${
                        currentCase.piece_name !== null
                            ? `pc--${currentCase.piece_color}`
                            : `${currentCase.piece_name}`
                    }`"
                    :case_name="currentCase.case_name"
                    :piece_id="currentCase.piece_id"
                >
                    <component
                        :is="pieceSVGComponent[currentCase.piece_name]"
                    />
                </div>
            </div>

            <div id="numbers-box2" class="numbers-box">
                <div
                    v-for="number in numbersStock"
                    :key="number"
                    class="number"
                >
                    <p class="board-text">{{ number }}</p>
                </div>
            </div>
            <div class="corner" />
            <div class="letters-box">
                <div
                    v-for="letter in lettersStock"
                    :key="letter"
                    class="letter"
                >
                    <p class="board-text">{{ letter }}</p>
                </div>
            </div>
            <div class="corner" />
        </div>

        <div class="table-box">
            <thead>
                <tr>
                    <th
                        v-for="(value, key) in gameData.boardData[0]"
                        :key="key"
                    >
                        {{ key }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="line in gameData.boardData" :key="line.id">
                    <td
                        v-for="(value, key) in line"
                        :key="key"
                        :class="value === null ? 'emptyTD' : ''"
                    >
                        {{ value }}
                    </td>
                </tr>
            </tbody>
        </div>
        <p class="temporay-explanation">
            Pour le moment, le jeu d'échec n'a pas de session. Cela signifie
            qu'il n'y pas encore de système de partie qu'on peut commencer,
            finir et enregistrer seul ou avec un autre joueur. Mais c'est dans
            la RoadMap. Il n'est donc dans l'état présent qu'un simple plateau
            sur lequel on peut déplacer les pièces en suivant les règles et
            reset l'état des pièces.
        </p>
    </div>
</template>
