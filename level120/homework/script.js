let  getFullName = (firstName, lastName) => firstName + " " + lastName;
let square = n => n**2;
let numbers = [1, 2, 3, 4, 5];
let [first,b,c,d,last] = numbers
let student = { name: 'Emma', age: 20 };
let {name,age} =student;
let studentname = name
let studentage = age
let product = {
  id: 101,
  details: {
    name1: "Laptop",
    price: 1200
  }
};

let {id,details:{name1,price}} = product;
let productname = name1;
let productprice = price;

let car = { make: 'Toyota', model: 'Camry', year: 2020 };
for(let i in car){
    console.log(i,car[i]);
}

let colors = ['red', 'green', 'blue'];
for(let i of colors){
    console.log(i);
}
let str = "JavaScript" ;
for(let i of str){
    console.log(i);
    
}

let func = (n = 1,i = 5) => n*i
console.log(func(undefined,undefined));

let func1 = (hi = func()) => `hello ${hi}`
// arrow function are aupgraded versions of functions we make functions shorter and saving more time more code need more time less code need less time
//destruction is used for ro acces arrys objects fast and with out for loop
//for in/for of those for loops are upgraded version of normal for loop for in is use to loop Objects and for of is use for Arrys of is excamples of those loops
//object enhancment is used for object t obe writen easy and it helps us write more complexed code
//default parameter is use for then people have to give values and they dont give any value default parameters are good in this situation we give values if sommon dosent give
