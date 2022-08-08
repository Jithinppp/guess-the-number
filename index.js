"use strict";

let score = 20;
let highScore = 0;
const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");
const againButton = document.querySelector(".again");
const number = document.querySelector(".number");
const body = document.querySelector("body");
const highScoreElement = document.querySelector(".highscore");
const scoreElement = document.querySelector(".score");
const guess = document.querySelector(".guess");

let randomVariableGenerator = function () {
  return Math.floor(Math.random() * 20) + 1;
};
let randomVariable = randomVariableGenerator();
console.log(randomVariable);

function handler() {
  const input = Number(document.querySelector(".guess").value);
  if (!input) {
    message.textContent = "⛔ no number";
  } else if (input === randomVariable) {
    message.textContent = "correct answer 🎖️";
    number.textContent = randomVariable;
    body.style.backgroundColor = "#6db347";
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
    }
  } else if (score > 0) {
    if (input !== randomVariable) {
      message.textContent =
        input > randomVariable ? "number is high ❌" : "number is low ❌";
      score--;
      scoreElement.textContent = score;
    }
  } else {
    message.textContent = "💥you lost the game";
    body.style.backgroundColor = "red";
  }
}
function playAgain() {
  body.style.backgroundColor = "#2f2d2d";
  number.textContent = "?";
  message.textContent = "start guessing";
  score = 20;
  scoreElement.textContent = score;
  guess.value = "";
  randomVariable = randomVariableGenerator();
  console.log(randomVariable);
}

checkButton.addEventListener("click", handler);
againButton.addEventListener("click", playAgain);
