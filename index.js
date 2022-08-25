const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const DRAW = 0;
const WIN = 1;
const LOST = 2;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rockBtn.addEventListener("click", () => {
  play(ROCK);
});
paperBtn.addEventListener("click", () => {
  play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
  play(SCISSORS);
});

function play(userOption) {
  userImg.src = "img/" + userOption + ".svg";

  resultText.innerHTML = "Choosing!";

  const interval = setInterval(function () {
    const machineOption = calMachineOption();
    machineImg.src = "img/" + machineOption + ".svg";
  }, 200);

  setTimeout(function () {
    clearInterval(interval);

    const machineOption = calMachineOption();
    const result = calcResult(userOption, machineOption);

    machineImg.src = "img/" + machineOption + ".svg";

    switch (result) {
      case DRAW:
        resultText.innerHTML = "It's a Draw!";

        break;
      case WIN:
        resultText.innerHTML = "You win!";
        break;
      case LOST:
        resultText.innerHTML = "You lost!";
        break;
    }
  }, 1000);
}

function calMachineOption() {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
  }
}

function calcResult(userOption, machineOption) {
  if (userOption === machineOption) {
    return DRAW;
  } else if (userOption === ROCK) {
    if (machineOption === PAPER) return LOST;
    if (machineOption === SCISSORS) return WIN;
  } else if (userOption === PAPER) {
    if (machineOption === SCISSORS) return LOST;
    if (machineOption === ROCK) return WIN;
  } else if (userOption === SCISSORS) {
    if (machineOption === ROCK) return LOST;
    if (machineOption === PAPER) return WIN;
  }
}
