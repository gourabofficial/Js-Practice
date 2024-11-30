function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("success")
    }, 3000)
  });
}

function asyncFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("success")
    }, 3000)
  });
}
function asyncFunction3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data3");
      resolve("success")
    }, 3000)
  });
}

console.log("fetching data1")
asyncFunction().then((res) => {
      console.log(res)
      console.log("fetching data2");
  asyncFunction2().then((res) => {
    console.log("fetching data3")
    console.log(res)
    asyncFunction3().then((res) => {
      console.log("Fecthing all data")
      console.log(res)
    })
  })
})





