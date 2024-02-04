"use strict";
const outPut = document.querySelector('.number-output');
let deleteBtn = document.querySelector('.deletebtn');
let clearBtn = document.querySelector('.clearbtn');
let operandBtn = document.querySelector('.operand');
const buttons = document.querySelectorAll('.number');
let a = '';
let b = '';
let operator = '';
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        outPut.textContent += button.textContent;
        let buttonText = this.innerText;
    });
});
clearBtn === null || clearBtn === void 0 ? void 0 : clearBtn.addEventListener('click'), () => {
    outPut === null || outPut === void 0 ? void 0 : outPut.textContent = '';
    a = '';
    b = '';
    operator = '';
    updateDisplayedValues();
};
deleteBtn === null || deleteBtn === void 0 ? void 0 : deleteBtn.addEventListener('click'), () => {
    var _a;
    (_a = outPut === null || outPut === void 0 ? void 0 : outPut.textContent) === null || _a === void 0 ? void 0 : _a.text.slice(0, -1);
};
const updateDisplayedValues = function () {
    if (operands === "") {
        outPut.textContent = a;
        outPut.textContent = b;
    }
    outPut.textContent = `${a} ${operator}`;
    outPut.textContent = b;
};
function add(a, b) { return a + b; }
function divide(a, b) { return a / b; }
function multiply(a, b) { return a * b; }
function subtract(a, b) { return a - b; }
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            return 0;
    }
}
