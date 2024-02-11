"use strict";
let output = document.querySelector('.number-output');
const deleteBtn = document.querySelector('.deletebtn');
let clearBtn = document.querySelector('.clearbtn');
let operandBtn = document.querySelector('.operand');
const buttons = document.querySelectorAll('.number');
let a = '0';
let b = '0';
let operator = '';
//  buttons.forEach((button) => {
//      button.addEventListener('click', function() {
//           output.textContent += button.textContent
//      });
//  });
function displayValue(input) {
    output.textContent += input;
}
function clearDisplay() {
    output.textContent = "";
}
function deleteDisplay() {
    output.innerText.slice(0, -1);
}
function calculate() {
    output.textContent = eval(output.value);
}
