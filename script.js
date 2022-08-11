"use strict";

// Selecting HTML element by class and IDs
const gameStatus = document.querySelector(".status");
const btns = document.querySelectorAll(".btn");
const restartBtn = document.querySelector(".restart");
console.log(btns);

// Variables & Arrays declaration
const playerX = "X";
const playerO = "O";
let activePlayer = playerX;
let winner = "";

// Functions declaration
const switchPlayers = function () {
  activePlayer == playerX || activePlayer == ""
    ? (activePlayer = playerO)
    : (activePlayer = playerX);
  return activePlayer;
};

const winnerValidation = function () {
  if (
    btns[0].textContent === btns[1].textContent &&
    btns[0].textContent === btns[2].textContent
  ) {
    if (btns[0].textContent === playerX) {
      winner = `The winner is Player ${playerX}`;
    } else if (btns[0].textContent === playerO) {
      winner = `The winner is Player ${playerO}`;
    }
  } else if (
    btns[3].textContent === btns[4].textContent &&
    btns[3].textContent === btns[5].textContent
  ) {
    if (btns[3].textContent === playerX) {
      winner = `The winner is Player ${playerX}`;
    } else if (btns[3].textContent === playerO) {
      winner = `The winner is Player ${playerO}`;
    }
  } else if (
    btns[6].textContent === btns[7].textContent &&
    btns[6].textContent === btns[8].textContent
  ) {
    if (btns[6].textContent === playerX) {
      winner = `The winner is Player ${playerX}`;
    } else if (btns[6].textContent === playerO) {
      winner = `The winner is Player ${playerO}`;
    }
  } else if (
    btns[0].textContent === btns[3].textContent &&
    btns[0].textContent === btns[6].textContent
  ) {
    if (btns[0].textContent === playerX) {
      winner = `The winner is Player ${playerX}`;
    } else if (btns[0].textContent === playerO) {
      winner = `The winner is Player ${playerO}`;
    }
  } else if (
    btns[1].textContent === btns[4].textContent &&
    btns[1].textContent === btns[7].textContent
  ) {
    if (btns[1].textContent === playerX) {
      winner = `The winner is Player ${playerX}`;
    } else if (btns[1].textContent === playerO) {
      winner = `The winner is Player ${playerO}`;
    }
  } else if (
    btns[2].textContent === btns[5].textContent &&
    btns[2].textContent === btns[8].textContent
  ) {
    if (btns[2].textContent === playerX) {
      winner = `The winner is Player ${playerX}`;
    } else if (btns[2].textContent === playerO) {
      winner = `The winner is Player ${playerO}`;
    }
  } else if (
    btns[0].textContent === btns[4].textContent &&
    btns[0].textContent === btns[8].textContent
  ) {
    if (btns[0].textContent === playerX) {
      winner = `The winner is Player ${playerX}`;
    } else if (btns[0].textContent === playerO) {
      winner = `The winner is Player ${playerO}`;
    } else if (
      btns[2].textContent === btns[4].textContent &&
      btns[2].textContent === btns[6].textContent
    ) {
      if (btns[2].textContent === playerX) {
        winner = `The winner is Player ${playerX}`;
      } else if (btns[2].textContent === playerO) {
        winner = `The winner is Player ${playerO}`;
      }
    }
    return winner;
  }
};

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    if (btns[i].textContent === "") {
      btns[i].textContent = activePlayer;

      winnerValidation();
      console.log(winner);
      switchPlayers();
    }
  });
}
console.log(winner);

restartBtn.addEventListener("click", function () {
  
})