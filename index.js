"use strict";
let output = document.querySelector('.number-output');
const deleteBtn = document.querySelector('.deletebtn');
const buttons = document.querySelectorAll('.number');
const clearbtn = document.querySelector('.clearbtn');
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        if (output.textContent === '0') {
            deleteDisplay();
        }
        output.textContent += button.textContent;
    });
});
function clearDisplay() {
    output.textContent = "0";
}
function deleteDisplay() {
    output.textContent = output.textContent.slice(0, -1);
}
function calculate() {
    output.textContent = eval(output.innerText);
}
document.addEventListener('keypress', (event) => {
    displayKey(event.key);
});
function displayKey(key) {
    if (output.textContent === '0') {
        deleteDisplay();
    }
    switch (key) {
        case "Backspace":
            deleteDisplay();
            break;
        case "1":
            output.textContent += '1';
            break;
        case '2':
            output.textContent += '2';
            break;
        case '3':
            output.textContent += '3';
            break;
        case '4':
            output.textContent += '4';
            break;
        case '5':
            output.textContent += '5';
            break;
        case '6':
            output.textContent += '6';
            break;
        case '7':
            output.textContent += '7';
            break;
        case '8':
            output.textContent += '8';
            break;
        case '9':
            output.textContent += '9';
            break;
        case '0':
            output.textContent += '0';
            break;
        case '*':
            output.textContent += '*';
            break;
        case '+':
            output.textContent += '+';
            break;
        case '-':
            output.textContent += '-';
            break;
        case '/':
            output.textContent += '/';
            break;
        case '=':
            calculate();
            break;
        default:
    }
}
