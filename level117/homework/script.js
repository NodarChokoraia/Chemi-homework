let person = { name: "Alice", age: 30, city: "New York" }
let {name,age} = person;
console.log(name);
console.log(age);


const person1 = { name1: "Alice", age1: 30, city1: "New York" };
let {name1,city1} = person1;

let userName = name1;
console.log(userName);

let userCity = city1;
console.log(userCity);

const student = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    english: 92,
  },
};

let {grades:{math,english}} = student;
console.log(math,english);
const numbers = [1, 2, 3, 4, 5]
let [a,b,c,d,e] = numbers;
console.log(a,b,c,d,e);
