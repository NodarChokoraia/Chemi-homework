let score = 0;
let twice =() =>{score = score+10}
twice()
console.log(score);


// let fun = ()=>{
//     let secretcode = '1234'
//     return secretcode
// }
// console.log(secretcode);

let name = 'world';

let greet = () => {
    let name = 'Alice';
    console.log(name);
    
}
greet()
console.log(name);


let counterGame = () => {
    let counter = 0;
    counter++
    console.log(counter);
    
}

counterGame()

let fun1 = () => {
    num = 12
}
fun1()
console.log(num);



//global - global variables can be used in everywere its like facebook or instagram everywone can use them
//local - local variables only can be used in his perrent function like if,funciont,and more




let sum = () => {
    5+51
}
sum()
let double = () => {
    15*2
}

double()
let firstChar = () => {
    let str = 'hello'
    console.log(str[1]);
    
}
firstChar()


let shout = () => {
    let str = 'hello'
    str.toUpperCase()
}

shout()

let isPrime  =() => {
    let num = prompt('number')
    if(num>1){
        console.log('isprime');
        
    }else{
        console.log(false);
        
    }
}

isprime()


let checkNumber  =() => {
    let num = prompt('number')
    if(num>1){
        console.log('positive');
        
    }else if(num<0){
        console.log('negaive');
        
    }else{
        console.log('zero');
        
    }
}

checkNumber()




let fizzBuzz  =() => {
    let num = prompt('number')
    if(num%3 == 0){
        console.log('FIZZ');
        
    }else if(num%5 ==0){
        console.log('buzz');
        
    }else if(num%3 == 0&&num%5 ==0){
        console.log('fizzbuzz');
        
    }
}

checkNumber()
