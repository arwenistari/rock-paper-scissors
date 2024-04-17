let items = ['Rock', 'Paper', 'Scissors'];
let rand = Math.floor(Math.random() * items.length);

function getComputerChoice() {
    document.getElementById(items).innerHTML = items[rand];
}
getComputerChoice();