const input = require('readline-sync')

let num = input.question("Enter the Number:  ");

if (num % 2 == 0) {
  console.log("Number is Even");
}
else {
  console.log("Number is Odd");
}