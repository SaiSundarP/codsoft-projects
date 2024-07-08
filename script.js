// script.js
let display = document.getElementById('number');

let currentInput = '';
let operator = null;
let firstOperand = null;  

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operator = null;
    display.textContent = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function appendCharacter(char) {
    if (char === '.' && currentInput.includes('.')) return;
    currentInput += char;
    display.textContent = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && firstOperand === null) return;
    if (currentInput !== '') {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
        } else {
            calculateResult();
        }
    }
    operator = op;
    currentInput = '';
}

function calculateResult() {
    if (firstOperand === null || operator === null || currentInput === '') return;
    let secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case '%':
            result = firstOperand % secondOperand;
            break;
        default:
            return;
    }

    display.textContent = result;
    firstOperand = result;
    currentInput = '';
    operator = null;
}

/*let displayElement = document.getElementById("number");
let currentInput = '';

// Function to append a number to the current input
function appendNumber(number) {
    console.log("Appending number:", number); // Debugging statement
    currentInput += number;
    displayElement.value = currentInput;
}

// Function to append an operator to the current input
function appendOperator(operator) {
    console.log("Appending operator:", operator); // Debugging statement
    if (currentInput === '' && operator === '-') {
        // Allow negative numbers
        currentInput += operator;
    } else if (currentInput !== '' && !isNaN(currentInput.slice(-1))) {
        // Prevent appending operator immediately after another operator
        currentInput += operator;
    }
    displayElement.value = currentInput;
}

// Function to clear the display and reset the current input
function clearDisplay() {
    console.log("Clearing display"); // Debugging statement
    currentInput = '';
    displayElement.value = '';
}

// Function to calculate the result and update the display
function calculate() {
    console.log("Calculating result for:", currentInput); // Debugging statement
    try {
        currentInput = eval(currentInput).toString();
        displayElement.value = currentInput;
    } catch (error) {
        displayElement.value = 'Error';
        currentInput = '';
    }
}
*/