/*-------------------------------- Constants --------------------------------*/
const operators = ["+", "-", "*", "/"];

/*-------------------------------- Variables --------------------------------*/
let currentInput = "";
let firstOperand = null;
let operator = null;

/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

/*-------------------------------- Functions --------------------------------*/
function handleButtonClick(event) {
  const value = event.target.innerText;

  if (value === "C") {
    resetCalculator();
  } else if (operators.includes(value)) {
    if (firstOperand !== null && operator) {
      calculate();
    }
    operator = value;
    firstOperand = parseFloat(currentInput);
    currentInput = operator; // Show the selected operator
  } else if (value === "=") {
    calculate();
  } else {
    if (operators.includes(currentInput)) {
      currentInput = ""; // Clear operator from display before inputting numbers
    }
    currentInput += value;
  }

  updateDisplay();
}

function calculate() {
  if (firstOperand === null || !operator || currentInput === "") return;
  const secondOperand = parseFloat(currentInput);
  switch (operator) {
    case "+":
      currentInput = (firstOperand + secondOperand).toString();
      break;
    case "-":
      currentInput = (firstOperand - secondOperand).toString();
      break;
    case "*":
      currentInput = (firstOperand * secondOperand).toString();
      break;
    case "/":
      currentInput = (firstOperand / secondOperand).toString();
      break;
  }
  firstOperand = null;
  operator = null;
}

function updateDisplay() {
  display.innerText = currentInput || "0";
}

function resetCalculator() {
  currentInput = "";
  firstOperand = null;
  operator = null;
  updateDisplay();
}
