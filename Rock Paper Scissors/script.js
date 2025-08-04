let humanScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const winnerDiv = document.getElementById('winner');


function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);

  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanScore >= 5 || computerScore >= 5) {
    return;
  }

  let result = "";

  if (computerChoice === humanChoice) {
    result = "Draw";
  } else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice == "scissors" && humanChoice == "rock")
  ) {
    result = "Human Wins";
    humanScore++;
  } else {
    result = "Computer Wins";
    computerScore++;
  }

  resultDiv.textContent = result;
  scoreDiv.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

  if (humanScore === 5 || computerScore === 5) {
    let resultText = humanScore > computerScore ? "You won the game 😘" : "Computer won you loserrrrr 😭";
    winnerDiv.textContent = resultText
  } 
}

document.getElementById('rock').addEventListener("click", () => playRound("rock"));
document.getElementById('paper').addEventListener("click", () => playRound("paper"));
document.getElementById('scissors').addEventListener("click", () => playRound("scissors"));
  

// playGame();
