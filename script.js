function computerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playerChoice() {
    return prompt("Start the game by picking 'Rock', 'Paper', or 'Scissors'.");
}

const playerSelection = playerChoice().toLowerCase();
console.log(playerSelection);


function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return(`It's a tie! You both picked ${playerChoice}!`);
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return("You Win! Rock beats Scissors");
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return("You Win! Paper beats Rock");
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return("You Win! Scissors beat Paper");
    } else {
        return(`You Lose! ${computerChoice} beats ${playerChoice}`);
    }
}



const computerSelection = computerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));


let playerScore = 0;
let computerScore = 0;

