function computerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playerChoice() {
    return prompt("Start the game by picking 'Rock', 'Paper', or 'Scissors'.");
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return(`It's a tie! You both picked ${playerChoice}!`);
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        return("You Win! Rock beats Scissors");
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        return("You Win! Paper beats Rock");
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        return("You Win! Scissors beat Paper");
    } else {
        return(`You Lose! ${computerChoice} beats ${playerChoice}`);
    }
}


const playerSelection = playerChoice();
console.log(playerSelection);
const computerSelection = computerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));




