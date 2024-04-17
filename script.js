let items = ['Rock', 'Paper', 'Scissors'];
let rand = Math.floor(Math.random() * items.length);

function getComputerChoice(items) {
    document.getElementById('quote').innerHTML = items[rand];
}
getComputerChoice();