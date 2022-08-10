"use strict";

// Selecting HTML element by class and IDs
const gameStatus = document.querySelector(".status");
const btns = document.querySelectorAll(".btn");
console.log(btns);

// Variables & Arrays declaration
const xoArray = ["X", "O"];
const playerX = "X";
const playerO = "O";
let activePlayer = "";

// Functions declaration
const switchPlayers = function () {
  activePlayer == playerX || activePlayer == "" ? (activePlayer = playerO) : (activePlayer = playerX);
  return activePlayer;
};

switchPlayers();
console.log(activePlayer);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    if (btns[i].textContent === "") {
      // activePlayer = playerX;
      btns[i].textContent = activePlayer;
      switchPlayers();
      console.log(activePlayer);
      // if (btns[i].textContent !== "X") {
      //   btns[i].textContent = "X";
      // } else {
      //   btns[i].textContent = "O";
      // }
    }
  });
}
