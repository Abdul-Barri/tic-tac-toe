"use strict";

// Selecting HTML element by class and IDs
const gameStatus = document.querySelector(".status");
const btns = document.querySelectorAll(".btn");
let btnsText = document.querySelectorAll(".btn").textContent;
btnsText = "";
console.log(btns);
console.log(btnsText);

// Variables & Arrays declaration
const xoArray = ["X", "O"];
const playerX = "X";
const playerO = "O";
let activePlayer = playerX;
const btnsArrayX = [];
const btnsArrayO = [];
let winner = "";

// Functions declaration
const switchPlayers = function () {
  activePlayer == playerX || activePlayer == ""
    ? (activePlayer = playerO)
    : (activePlayer = playerX);
  return activePlayer;
};

// const xoValidation = function () {
//   if (btnsArrayX[0] === btnsArrayX[1] && btnsArrayX[0] === btnsArrayX[2]) {
//     winner = `Player ${playerX} is the winner...`;
//   } else if ((btnsArrayO[0] === btnsArrayO[1]) === btnsArrayO[2]) {
//     winner = `Player ${playerO} is the winner...`;
//   } else if ((btnsArrayX[3] === btnsArrayX[4]) === btnsArrayX[5]) {
//     winner = `Player ${playerX} is the winner...`;
//   } else if ((btnsArrayO[3] === btnsArrayO[4]) === btnsArrayO[5]) {
//     winner = `Player ${playerO} is the winner...`;
//   } else if ((btnsArrayX[6] === btnsArrayX[7]) === btnsArrayX[8]) {
//     winner = `Player ${playerX} is the winner...`;
//   } else if ((btnsArrayO[6] === btnsArrayO[7]) === btnsArrayO[8]) {
//     winner = `Player ${playerO} is the winner...`;
//   } else if ((btnsArrayX[0] === btnsArrayX[3]) === btnsArrayX[6]) {
//     winner = `Player ${playerX} is the winner...`;
//   } else if ((btnsArrayO[0] === btnsArrayO[3]) === btnsArrayO[6]) {
//     winner = `Player ${playerO} is the winner...`;
//   } else if ((btnsArrayX[1] === btnsArrayX[4]) === btnsArrayX[7]) {
//     winner = `Player ${playerX} is the winner...`;
//   } else if ((btnsArrayO[1] === btnsArrayO[4]) === btnsArrayO[7]) {
//     winner = `Player ${playerO} is the winner...`;
//   } else if ((btnsArrayX[2] === btnsArrayX[5]) === btnsArrayX[8]) {
//     winner = `Player ${playerX} is the winner...`;
//   } else if ((btnsArrayO[2] === btnsArrayO[5]) === btnsArrayO[8]) {
//     winner = `Player ${playerO} is the winner...`;
//   } else if ((btnsArrayX[0] === btnsArrayX[4]) === btnsArrayX[8]) {
//     winner = `Player ${playerX} is the winner...`;
//   } else if ((btnsArrayO[0] === btnsArrayO[4]) === btnsArrayO[8]) {
//     winner = `Player ${playerO} is the winner...`;
//   } else if ((btnsArrayX[2] === btnsArrayX[4]) === btnsArrayX[6]) {
//     winner = `Player ${playerX} is the winner...`;
//   } else if ((btnsArrayO[2] === btnsArrayO[4]) === btnsArrayO[6]) {
//     winner = `Player ${playerO} is the winner...`;
//   }
//   return winner;
// };

const winnerValidation = function () {
  if (btnsText[0] === btnsText[1] && btnsText[0] === btnsText[2]) {
    if (btnsText[0] === playerX) {
      winner = playerX;
    } else if (btnsText[0] === playerO) {
      winner = playerO;
    }
  } else if (btnsText[3] === btnsText[4] && btnsText[3] === btnsText[5]) {
    if (btnsText[3] === playerX) {
      winner = playerX;
    } else if (btnsText[3] === playerO) {
      winner = playerO;
    }
  } else if (btnsText[6] === btnsText[7] && btnsText[6] === btnsText[8]) {
    if (btnsText[6] === playerX) {
      winner = playerX;
    } else if (btnsText[6] === playerO) {
      winner = playerO;
    }
  } else if (btnsText[0] === btnsText[3] && btnsText[0] === btnsText[6]) {
    if (btnsText[0] === playerX) {
      winner = playerX;
    } else if (btnsText[0] === playerO) {
      winner = playerO;
    }
  } else if (btnsText[1] === btnsText[4] && btnsText[1] === btnsText[7]) {
    if (btnsText[1] === playerX) {
      winner = playerX;
    } else if (btnsText[1] === playerO) {
      winner = playerO;
    }
  } else if (btnsText[2] === btnsText[5] && btnsText[2] === btnsText[8]) {
    if (btnsText[2] === playerX) {
      winner = playerX;
    } else if (btnsText[2] === playerO) {
      winner = playerO;
    }
  } else if (btnsText[0] === btnsText[4] && btnsText[0] === btnsText[8]) {
    if (btnsText[0] === playerX) {
      winner = playerX;
    } else if (btnsText[0] === playerO) {
      winner = playerO;
    }
  } else if (btnsText[2] === btnsText[4] && btnsText[2] === btnsText[6]) {
    if (btnsText[2] === playerX) {
      winner = playerX;
    } else if (btnsText[2] === playerO) {
      winner = playerO;
    }
  }
  return winner;
};

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    if (btns[i].textContent === "") {
      btns[i].textContent = activePlayer;

      if (btns[i].textContent === playerX) {
        btnsArrayX.push(btns[i].textContent);
      } else if (btns[i].textContent === playerO) {
        btnsArrayO.push(btns[i].textContent);
      }

      winner = winnerValidation();
      console.log(winner);
      switchPlayers();
    }
  });
}
console.log(winner);
