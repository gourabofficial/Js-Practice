const numArr = [1, 2, 3, 4];

const sum = numArr.reduce((acc, currval) => acc + currval, 0)
// console.log(sum)


const numArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum1 = numArr1.reduce((acc, currval) => acc + currval, 0)

// console.log(sum1)


const shopingcard = [
  {
    CourseName: "javaScript",
    price: 299
  }, {
    CourseName: "Java",
    price: 599
  }, {
    CourseName: "C++",
    price: 199
  }, {
    CourseName: "AIML",
    price: 599
  },
]

let totalPay = shopingcard.reduce((acc, currval) => acc + currval.price, 0)
console.log(`Your Total bill : ${totalPay}`)

