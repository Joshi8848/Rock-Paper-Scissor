const playerScore = document.getElementById("playerScore");
const compScore = document.getElementById("computerScore");
const screen1 = document.querySelector(".screen i");
const screen2 = document.querySelector(".computer i");
const buttons = document.querySelectorAll(".buttons button");
const reset = document.querySelector(".reset");
const randomClasses = [
  "fa-solid fa-hand-back-fist",
  "fa-solid fa-hand",
  "fa-solid fa-hand-scissors",
];

const text = document.getElementById("demo");

let cScore = 1;
let pScore = 1;

const game = () => {
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let clickedBtn = e.target.className;
      screen1.className = clickedBtn;
      let randomNumber = Math.trunc(Math.random() * randomClasses.length);
      screen2.className = randomClasses[randomNumber];

      // When Draw
      if (screen1.className === screen2.className) {
        text.innerHTML = "It's a Tie!";
        text.style.color = "White";
      } else if (
        screen1.className === randomClasses[0] &&
        screen2.className === randomClasses[1]
      ) {
        compScore.innerHTML = cScore;
        cScore++;
        text.innerHTML = "You Lose!";
        text.style.color = "red";
      } else if (
        screen1.className === randomClasses[1] &&
        screen2.className === randomClasses[0]
      ) {
        playerScore.innerHTML = pScore;
        pScore++;
        text.innerHTML = "You Win!";
        text.style.color = "green";
      } else if (
        screen1.className === randomClasses[2] &&
        screen2.className === randomClasses[1]
      ) {
        playerScore.innerHTML = pScore;
        pScore++;
        text.innerHTML = "You Win!";
        text.style.color = "green";
      } else if (
        screen1.className === randomClasses[1] &&
        screen2.className === randomClasses[2]
      ) {
        compScore.innerHTML = cScore;
        cScore++;
        text.innerHTML = "You Lose!";
        text.style.color = "red";
      } else if (
        screen1.className === randomClasses[0] &&
        screen2.className === randomClasses[2]
      ) {
        playerScore.innerHTML = pScore;
        pScore++;
        text.innerHTML = "You Win!";
        text.style.color = "green";
      } else if (
        screen1.className === randomClasses[2] &&
        screen2.className === randomClasses[0]
      ) {
        compScore.innerHTML = cScore;
        cScore++;
        text.innerHTML = "You Lose!";
        text.style.color = "red";
      }
    });
  });
};

reset.addEventListener("click", function () {
  playerScore.innerHTML = "0";
  compScore.innerHTML = "0";
  screen1.className = randomClasses[0];
  screen2.className = randomClasses[1];
  text.innerHTML = "Lets get started!";
  text.style.color = "black";
});

game();
