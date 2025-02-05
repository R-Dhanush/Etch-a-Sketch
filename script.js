const input = document.querySelector('#input');
const container = document.querySelector('#container');
let inputValue = 0;

function gettingUserInput() {
    inputValue = parseInt(prompt("Enter the number of squares per side : "));
    checkInput;
}

function checkInput() {
    if (inputValue <= 0 || inputValue > 100) {
        alert('Enter the valid Input(1 to 100)');
        gettingUserInput;
    }
}

input.addEventListener("click",gettingUserInput);