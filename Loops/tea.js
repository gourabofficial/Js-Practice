const input = require('readline-sync');
let teacollection = [];
let userinput;
do {
   userinput = input.question(`Enter your favourite tea: (type "Stop" to finish )`)
  if(userinput !== "Stop")
  teacollection.push(userinput);
} while (userinput !== "Stop") {
  console.log("You Leave")
}
console.log(teacollection);


