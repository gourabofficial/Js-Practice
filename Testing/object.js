const persion = {
  name: "gourab ganguly",
  age: 19,
  contact_No: 626262,
}

const persion2 = Object.create(persion);
let age2 = persion2.age
// console.log("this is persion2 age: ",age2);


// using class 

class Parent {
  constructor(name, age, contact_No) {
    this.name = name;
    this.age = age;
    this.contact_No = contact_No;
  }
}

class Parent2 extends Parent{
  constructor(name, age) {
   super(name,age)
  }
}



const child = new Parent("Gourab", 21, 626262);
console.log(child.name);

const child2 = new Parent2("Rahul", 22);
console.log(child2.contact_No); // undefind 
