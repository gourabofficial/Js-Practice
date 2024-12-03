 function feachingData () {
   return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) {
        resolve("My Data is Featched..")
      } else {
        reject("Data is not Featching...")
      }
    }, 2000);
  });
}

feachingData()
  .then((data) => { 
    return console.log(data)
  })
  .catch((error) => {
    return console.log(error)
   })