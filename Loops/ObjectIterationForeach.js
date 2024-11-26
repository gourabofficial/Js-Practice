let Information = [
  {
    name: "Gourab Ganguly",
    branch: "CSE"
  }, {
    name: "Buddhadeb Koner",
    branch: "IT"
  }, {
    name: "Rahul Tantubay",
    branch: "AIML"
  }, {
    name: "Md Sohel ",
    branch: "Data Science"
  }
]
console.log("Student and Branch: ")
Information.forEach((items) => {
  console.log(`${items.name},${items.branch} `)
})
