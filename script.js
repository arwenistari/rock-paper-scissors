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
        playerScore++;
        return("You Win! Rock beats Scissors");
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        return("You Win! Paper beats Rock");
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        return("You Win! Scissors beat Paper");
    } else {
        computerScore++;
        return(`You Lose! ${computerChoice} beats ${playerChoice}`);
    }
}


let playerScore = parseInt(0);
let computerScore = parseInt(0);

for(var i=0;i<5;i++){
    playerChoice();
    const computerSelection = computerChoice();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your Score = " + playerScore);
    console.log("Computer's Score = " + computerScore);
}