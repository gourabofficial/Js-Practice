let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNumArr = [];

// numArr.forEach((num) => {
//   if (num > 5) {
//     newNumArr.push(num);
//   }
// })

// console.log(newNumArr)

// using filtter

let newNumArr = numArr.filter((num) => {
  return num > 5
})
console.log(newNumArr)
