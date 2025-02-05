const input = document.querySelector('#input');
const container = document.querySelector('#container');
let square;
let inputValue = 16;
let gridItemWidth = 0;
let rgba;
const alpha = 0.10;
let element;
let color;

function gettingUserInput() {
    inputValue = parseInt(prompt("Enter the number of squares per side : "));
    checkInput();
    container.innerHTML = '';
    createSquares();
}

function checkInput() {
    if (inputValue <= 0 || inputValue > 100) {
        alert('Enter the valid Input(1 to 100)');
        gettingUserInput();
    }
}

input.addEventListener("click",gettingUserInput);

function createSquares() {
    for(let i = 1; i <= (inputValue * inputValue); i++) {
        gridItemWidth = 760 / inputValue;
        square = document.createElement('div');
        square.classList.add('square');
        square.id = 'sq' + i;
        square.style.width = `${gridItemWidth}px`;
        square.style.height = `${gridItemWidth}px`;
        container.appendChild(square);
        square.addEventListener("mouseenter", changeColor);
    }
}

function changeColor(e) {
    console.log(e.target.id);
    element = e.target;
    rgba = window.getComputedStyle(element).backgroundColor;
    console.log(rgba);
    const rgbaValues = rgba.match(/^rgba?\((\d+), (\d+), (\d+),? *(\d*\.?\d+)?\)$/);
    console.log(rgbaValues);
    let r = parseInt(rgbaValues[1]);
    let g = parseInt(rgbaValues[2]);
    let b = parseInt(rgbaValues[3]);
    let a = rgbaValues[4] ? parseFloat(rgbaValues[4]) : 1;

    if (a < 1.0) {
        a += 0.1;
        element.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    }else{
        if (r === 255 && g === 255 && b === 255 && a === 1.0) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        element.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        } else {
            a = 1;
            element.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
        }
    }   
}

createSquares();