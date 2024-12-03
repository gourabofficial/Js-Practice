function Userdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Gourab Ganguly",
        url: "gourab.portfolio.vercel.app"
      })
    }, 3000);
  });
}

async function Alldata() {
  try {
    console.log("feaching data...")
    let data = await Userdata();
    console.log(data);
  } catch (error) {
    console.log("error here,Lets Debug the code....",error)
  }
}

Alldata();