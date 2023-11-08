"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
//
// get input from the user.
//
let n1 = parseInt(prompt('Please enter First number:'));
let operator = prompt('Please choose an operator (+,-,*,/) :');
let n2 = parseInt(prompt('Please enter Second number:'));
if (operator == '+') {
    console.log(`The answer of ${n1} ${operator} ${n2} =${n1 + n2}`);
}
else if (operator == '-') {
    console.log(`The answer of ${n1} ${operator} ${n2} =${n1 - n2}`);
}
else if (operator == '*') {
    console.log(`The answer of ${n1} ${operator} ${n2} =${n1 * n2}`);
}
else if (operator == '/') {
    console.log(`The answer of ${n1} ${operator} ${n2} =${n1 / n2}`);
}
else {
    console.log('Select the correct operator');
}
