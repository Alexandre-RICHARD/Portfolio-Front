import { caseSelectionAndMoves } from "./caseSelectionAndMoves.js";
import { base_Url } from "./baseUrl.js";

export const createBoard = {
  stepbystepConstruction: () => {
    createBoard.initBoard();
    createBoard.createLayout();
    createBoard.createLetters();
    createBoard.createNumbers();
    createBoard.createCases().then(() => {
      caseSelectionAndMoves.movesAndEventHandling();
    });
  },

  initBoard: () => {
    document.querySelector("#app").innerHTML = "";
  },
  
  createLayout: () => {    
    const app = document.querySelector("#app");
    
    //! TEMP
    const settingsBox = document.createElement("div");
    settingsBox.classList.add("settingsBox");

    const resetButton = document.createElement("button");
    resetButton.classList.add("resetButton");
    resetButton.textContent = "Reset le board";
    resetButton.addEventListener("click", createBoard.resetBoardData);

    const movesCounter = document.createElement("p");
    movesCounter.classList.add("movesCounter");

    const checkShowsLabel = document.createElement("label");
    checkShowsLabel.textContent = "Mettre en surbrillance les pièces pouvant bouger";
    checkShowsLabel.classList.add("checkShows-label");
    
    const checkShowsInput = document.createElement("input");
    checkShowsInput.classList.add("checkShows-input");
    checkShowsInput.addEventListener("change", caseSelectionAndMoves.highlightPiecesCanMove);
    checkShowsInput.setAttribute("type", "checkbox");
    checkShowsLabel.appendChild(checkShowsInput);

    settingsBox.appendChild(resetButton);
    settingsBox.appendChild(movesCounter);
    settingsBox.appendChild(checkShowsLabel);
    app.appendChild(settingsBox);
    //! TEMP

    const board = document.createElement("div");
    board.classList.add("board-container");

    const cornerBox = document.createElement("div");
    cornerBox.classList.add("corner");
    
    const lettersUp = document.createElement("div");
    const numbersLeft = document.createElement("div");
    const numbersRight = document.createElement("div");
    const lettersDown = document.createElement("div");

    lettersUp.classList.add("lettersBox");
    lettersUp.id = ("lettersBox1");
    numbersLeft.classList.add("numbersBox");
    numbersLeft.id = ("numbersBox1");
    numbersRight.classList.add("numbersBox");
    numbersRight.id = ("numbersBox2");
    lettersDown.classList.add("lettersBox");
    lettersDown.id = ("lettersBox2");

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
    
    app.appendChild(board);
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
        number.setAttribute("y", 8-y);
        const p = document.createElement("p");
        p.classList.add("board-text");
        p.textContent = 8 - y;
        number.appendChild(p);
        document.querySelector(`#numbersBox${x}`).appendChild(number);
      }
    }
  },

  async getChessBoardData() {
    try {
      let data = await fetch(base_Url.api_url + "/board/data");
      return await data.json();
    }
    catch (error) {
      console.trace(error);
    }
  },

  async createCases () {
    const boardData = await createBoard.getChessBoardData();
    if (typeof boardData !== "string") {
      let z = 0;
      for (let y = 8; y > 0; y--) {
        for (let x = 1; x < 9; x++) {
          const currentCase = (boardData.find(element => element.x === x && element.y === y));
          const boardCase = document.createElement("div");
          boardCase.classList.add("case", z % 2 === 0 ? "case--white" : "case--black");
          boardCase.id = `${currentCase.x}${currentCase.y}`;
          boardCase.setAttribute("case_name", currentCase.case_name);
          z++;
  
          if (currentCase.piece_name !== null) {
            boardCase.classList.add(`pc--${currentCase.piece_color}`, `${currentCase.piece_name}`);
            const clone = document.importNode(document.querySelector(`#${currentCase.piece_name}`).content, true);
            boardCase.appendChild(clone);
            boardCase.setAttribute("piece_id", currentCase.piece_id);
          }
  
          document.querySelector(".piecesBox").appendChild(boardCase);
        }
        z++;
      }
      createBoard.buildTable(boardData);
    }
    Promise.resolve("ok");
  },

  async resetBoardData() {
    try {
      let data = await fetch(base_Url.api_url + "/board/reset");
      createBoard.stepbystepConstruction();
      return await data.json();
    }
    catch (error) {
      console.trace(error);
    }
  },



  //! TEMPORAIRE DE OUF
  buildTable: (boardData) => {
    const app = document.querySelector("#app");
    const tableBox = document.createElement("div");
    tableBox.classList.add("tableBox");
    // Création et remplissage du thead à l'aide de for in qui récupère le nom des propriétés
    const thead = document.createElement("thead");
    const tr1 = document.createElement("tr");
    for (const property in boardData[0]) {
      const prop = document.createElement("th");
      prop.textContent = property;
      tr1.appendChild(prop);
    }
    thead.appendChild(tr1);
    tableBox.appendChild(thead);
    // Création du body qui utilise un for each pour récupérer chaque "ligne" de la base de donnée puis un for in element[...] pour avoir la valeur de chaque clé
    const tbody = document.createElement("thead");
    boardData.forEach(element => {
      const tr2 = document.createElement("tr");
      for (const key in element) {
        const td = document.createElement("td");
        if (element[key] !== null) {
          td.textContent = element[key];
        }
        else {
          td.classList.add("emptyTD");
        }
        tr2.appendChild(td);
      }
      tbody.appendChild(tr2);
    });
    tableBox.appendChild(tbody);
    app.appendChild(tableBox);
  },
  //! TEMPORAIRE DE OUF




};