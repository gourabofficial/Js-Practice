function add(a, b) {
  let result = a + b;
  console.log(result);
  return result

}

// add(2, 2);
function sum(...num) {
  let ans = 0;
  for (let i = 0; i < num.length; i++) {
    ans += num[i];
    
  }
  console.log(ans)

  return ans
}

sum(1,2,3,4,10)




