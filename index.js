const mathProblems = require('./module');

let num1 = 42;
let num2 = 0;

console.log(num1 + ' + ' + num2 + ' = ' + mathProblems.add(num1, num2));
console.log(num1 + ' - ' + num2 + ' = ' + mathProblems.sub(num1, num2));
console.log(num1 + ' * ' + num2 + ' = ' + mathProblems.multi(num1, num2));
console.log(num1 + ' / ' + num2 + ' = ' + mathProblems.divide(num1, num2));
console.log(num1 + ' % ' + num2 + ' = ' + mathProblems.mod(num1, num2));
console.log(num1 + ' ^ ' + num2 + ' = ' + mathProblems.exp(num1, num2));
