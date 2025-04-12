import { add as addNumbers } from './js/add.js';
import { subtract as subtractNumbers } from './js/subtract.js';
import { multiply as multiplyNumbers } from './js/multiply.js';
import { divide as divideNumbers } from './js/divide.js';


const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');

const result = document.getElementById('result');

addButton.addEventListener('click', () => {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    result.textContent = `Result: ${addNumbers(num1, num2)}`
})

subtractButton.addEventListener('click', () => {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    result.textContent = `Result: ${subtractNumbers(num1, num2)}`
})

multiplyButton.addEventListener('click', () => {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    result.textContent = `Result: ${multiplyNumbers(num1, num2)}`
})

divideButton.addEventListener('click', () => {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    result.textContent = `Result: ${divideNumbers(num1, num2)}`
})