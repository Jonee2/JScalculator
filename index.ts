const outPut = document.querySelector('.number-output')
let deleteBtn = document.querySelector('.deletebtn')
let clearBtn = document.querySelector('.clearbtn')
let operandBtn = document.querySelector('.operand')
const buttons = document.querySelectorAll('.number');

let a = ''
let b = ''
let operator = ''


buttons.forEach((button) => {
    button.addEventListener('click', function() {
        outPut.textContent += button.textContent
        
        
         let buttonText = this.innerText
    });
});

clearBtn?.addEventListener('click'), () => {
    outPut?.textContent = ''
    a = ''
    b = ''
    operator = ''
    updateDisplayedValues();
 } 


deleteBtn?.addEventListener('click'), () => {
         outPut?.textContent?.text.slice(0,-1)
}


const updateDisplayedValues = function () {
    if (operands === "") {
      outPut.textContent = a;
      outPut.textContent = b;
    }
    outPut.textContent = `${a} ${operator}`;
    outPut.textContent = b;
  };



function add(a, b) {return a + b}
function divide(a, b) {return a / b}
function multiply(a, b) {return a * b}
function subtract(a, b) {return a - b}
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b)
            break;
        case '-':
            return subtract(a, b)
            break;
        case '*':
            return multiply(a, b)
            break;
        case '/':
            return divide(a, b)
            break;
        default:
            return 0;
    }
}





