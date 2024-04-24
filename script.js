function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return(`It's a tie! You both picked ${playerSelection}!`);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return("You Win! Rock beats Scissors");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return("You Win! Paper beats Rock");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return("You Win! Scissors beat Paper");
    } else {
        return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function getHumanChoice() {
    const playerSelection = prompt("Start the game by picking 'Rock', 'Paper', or 'Scissors'.");
}


const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));