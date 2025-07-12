// for in / for of + default parameters + arrow function


//for in/for of those for loops are upgraded version of normal for loop for in is use to loop Objects and for of is use for Arrys of is excamples of those loops

//for in
let obj = {
    name:'nodiko',
    lastname:'chokoraia'
}

for(let i in obj){
    console.log(obj);
    console.log(i);
    console.log(obj[i]);
    
    
    
}

//for of
let arr = [1,2,3,4,5,6]
for(let i of arr){
    console.log(arr);
    console.log(i);
}

//default parameter is use for then people have to give values and they dont give any value default parameters are good in this situation we give values if sommon dosent give
function func(a=5,b=1) {
    return a+b 
} // this will return 6 bc we didnt give them values 
console.log(func());


// arrow function are aupgraded versions of functions we make functions shorter and saving more time more code need more time less code need less time

let func1 = (e,b) => e*b//this is arrow function do you see diffrence its less code 
func1(3,1)