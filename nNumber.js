const input = require('readline-sync')

let num = input.question("Enter the value of n: ");
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum = sum + i;
}

console.log(`Sum of ${num} Natural num result: ${sum}`);
