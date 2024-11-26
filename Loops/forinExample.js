const myobject = {
  name: "arka",
  age: 11,
  hobby: "drawing",
  class: "V",
  rollNo:"1(A)"
  
}
console.log("Information: ")

for (const key in myobject) {
  console.log(
    ` ${key}: ${myobject[key]}`
  )
}