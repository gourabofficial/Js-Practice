const input = require('readline-sync')

let num = input.question("Enter the number for check: ");
let count = 0;
for (let i = 1; i <= num; i++){
  if (num % i == 0) {
    count++;

  }
} if (count == 2) {
  console.log("Number is Prime ")
} else {
  console.log("Number is Not prime")
}