function getdata(id) {
  return new Promise((res, rej) => {
    setTimeout(() => { 
      res(`data: ${id}`);
    }, 2000);
  });
};

async function mydata() {
  console.log("First data fetching...");
  const data1 = await getdata(1); 
  console.log(data1); 
  
  console.log("Second data fetching...");
  const data2 = await getdata(2); 
  console.log(data2); 

  console.log("Third data fetching...");
  const data3 = await getdata(3); 
  console.log(data3); 
}

mydata();
