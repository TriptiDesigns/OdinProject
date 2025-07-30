function getHumanChoice() {
  let humanChoice = prompt("Enter your choice : (Rock, paper, scissors)");
  console.log(humanChoice);
}

function getComputerChoice() {
  let num = Math.random();
  let computerChoice = Math.round(num * 10) / 10;

  if (computerChoice < 0.5) {
    console.log("Rock");
  } else if (computerChoice === 0.5) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

let humanScore

// getComputerChoice();
// getHumanChoice();
