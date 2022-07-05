export const createBoard = {
  stepbystepConstruction: () => {
    createBoard.createLayout();
    createBoard.createLetters();
    createBoard.createNumbers();
    createBoard.createCases();
  },
  
  createLayout: () => {    
    const app = document.querySelector("#app");
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
        const p = document.createElement("p");
        p.classList.add("board-text");
        p.textContent = 8 - y;
        number.appendChild(p);
        document.querySelector(`#numbersBox${x}`).appendChild(number);
      }
    }
  },

  createCases: () => {
    let z = 0;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        const boardCase = document.createElement("div");
        if (z % 2 === 0) {
          boardCase.classList.add("case", "case--white");
        }
        else {
          boardCase.classList.add("case", "case--black");
        }
        z++;
        document.querySelector(".piecesBox").appendChild(boardCase);
      }
      z++;
    }
  }
};