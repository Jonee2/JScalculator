let output = <HTMLOutputElement> document.querySelector('.number-output')
const deleteBtn = <HTMLButtonElement> document.querySelector('.deletebtn')



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
    output.textContent.slice(0,-1)
}
function calculate() {
    output.textContent = eval(output.textContent)
}






