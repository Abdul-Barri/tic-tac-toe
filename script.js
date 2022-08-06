"use strict";

const gameStatus = document.querySelector(".status");
const btns = document.querySelectorAll(".btn");
console.log(btns);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    if (btns[i].textContent === "") {
      if (btns[i].textContent !== "X") {
        btns[i].textContent = "X";
      } else {
        btns[i].textContent = "O";
      }
    }
  });
}
