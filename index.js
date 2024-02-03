"use strict";
const outPut = document.querySelector('.number-output');
let deleteBtn = document.querySelector('.deletebtn');
let a;
let b;
const buttons = document.querySelectorAll('.number');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        outPut.textContent += button.textContent;
        let buttonText = this.innerText;
    });
});
function add(a, b) {
    return a + b;
}
function divide(a, b) {
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
function subtract(a, b) {
    return a - b;
}
function calculate(a, b, operator) {
    return operator(a, b);
}
