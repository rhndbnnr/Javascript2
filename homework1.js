function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  const addend1Value = parseInt(document.getElementById("addend1").value);
  const addend2Value = parseInt(document.getElementById("addend2").value);

  const result = add(addend1Value, addend2Value);
  document.getElementById("sum").textContent = result;
}

document.addEventListener("click", addNumbers);

const subtract = function (number1, number2) {
  return number1 - number2;
};

const subtractNumbers = function () {
  const minuendValue = parseInt(document.getElementById("minuend").value);
  const subtrahendValue = parseInt(document.getElementById("subtrahend").value);

  const result = subtract(minuendValue, subtrahendValue);
  document.getElementById("difference").textContent = result;
};

document
  .getElementById("subtractNumbers")
  .addEventListener("click", subtractNumbers);

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  const factor1Value = parseInt(document.getElementById("factor1").value);
  const factor2Value = parseInt(document.getElementById("factor2").value);

  const result = multiply(factor1Value, factor2Value);
  document.getElementById("product").textContent = result;
};

document
  .getElementById("multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

function divide(number1, number2) {
  if (number2 === 0) {
    return "Zero is not a valid number for division!";
  }
  return number1 / number2;
}

function divideNumbers() {
  const dividendValue = parseInt(document.getElementById("dividend").value);
  const divisorValue = parseInt(document.getElementById("divisor").value);

  const result = divide(dividendValue, divisorValue);
  document.getElementById("quotient").textContent = result;
}

document
  .getElementById("divideNumbers")
  .addEventListener("click", divideNumbers);

const currentDate = new Date();

let currentYear = currentDate.getFullYear;

document.getElementById("year").textContent = new Date();

const numbersArray = [];

for (let i = 1; i <= 25; i++) {
  numbersArray.push(i);
}

document.getElementById("array").textContent = numbersArray;

const oddNumbers = numbersArray.filter((number) => number % 2 !== 0);
document.getElementById("odds").textContent = oddNumbers;

const evenNumbers = numbersArray.filter((number) => number % 2 === 0);
document.getElementById("evens").textContent = evenNumbers;

const sumofArray = numbersArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
document.getElementById("sumofArray").textContent = sumofArray;

const multipliedArray = numbersArray.map((number) => number * 2);
document.getElementById("multiplied").textContent = multipliedArray;

const sumofMultiplied = numbersArray
  .map((number) => number * 2)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

document.getElementById("sumofMultiplied").textContent = sumofMultiplied;
