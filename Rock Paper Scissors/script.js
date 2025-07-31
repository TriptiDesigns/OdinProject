function getHumanChoice() {
  const input = prompt("Enter your choice : (rock, paper, scissors)");
  return input.toLowerCase();
}

function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);

  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase;
  const computer = computerChoice;

  if (computer === human) {
    console.log("Draw");
  } else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice == "scissors" && humanChoice == "rock")
  ) {
    console.log("You win");
    humanScore++;
  } else {
    console.log("You lose");
    computerScore++;
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 1; i <= 5; i++){
    console.log(`--- Round ${i} ---`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log("Game Over!");
    console.log(`Score => You: ${humanScore}, Computer: ${computerScore}`);
  }

  console.log("Game Over!");
  if (computerScore > humanScore) {
    console.log("Better luck next time :)");
  } else if (humanScore > computerScore) {
    console.log("wohoooo you won");
  } else {
    console.log("it's a drawwwwwww");
  }
}

playGame();
