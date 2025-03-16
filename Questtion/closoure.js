// closoure is function that return another function 
// and that function has access to the outer function variable 



function sum() {
  function add(num) {
    console.log(num + 5);
  }
  return add;
}

const reuslt = sum();
reuslt(5)


function outerfun() {
  let counter = 6;
  return function c () {
    counter++
    return counter;
  }
}

let result = outerfun();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());