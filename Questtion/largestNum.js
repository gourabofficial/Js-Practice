const input = require('readline-sync')

let a = input.question("Enter the first number: ")
let b = input.question("Enter the second  number: ")
let c = input.question("Enter the third number: ")



 if (a > b && a > c) {
  console.log(a + " Largest number");

}
else if (b > a && b > c) {
  console.log(b + " Largest number");
}
else if (c > a && c > b) {
  console.log(c + " Largest number");

}