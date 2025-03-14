// different between var var let

var firstName = "gourab";
console.log(firstName); 
var firstName = "rana "

if (firstName === "gourab") {
  var firstName = "gangulygourab";
  console.log("in block scope: " +firstName); // ganguly
}
    
console.log("Globaly: " +firstName); // gourab