let arry = [1,2,3,4,5,6];
let allevens = arry.every(num => num%2==0);
console.log(allevens);


let str = ['apple','hole','size','some'];
let hasLongString = str.some(len => len.length > 5);
console.log(hasLongString);


let arry1 = [{name:'nodiko',age:13},{name:'daviti',age:21},{name:'giorgi',age:19}]
let allAdults = arry1.every(age => age.age >=18)
console.log(allAdults);

let arry2 = [{name:'apple',price:21},{name:'pineapple',price:30},{name:'blueberry',price:10}]
let hasAffordableProduct = arry2.some(price => price.price < 20)
console.log(hasAffordableProduct);

let customerOrders = [['apple','pineapple','banana'],['chocolade','water','watermelon'],['jelly','breed','apple']]

let allOrdersHaveItems = customerOrders.every(len => len.length > 0)
console.log(allOrdersHaveItems);

let isDelivered = [true,false,true]
let hasPendingDelivery = isDelivered.some(check => check == true)

customerOrders.forEach((order)=> console.log(`Processing Order ID: ${order}`));




let pricesoforders = [20,10,15]
pricesoforders.forEach(num=>{
    let val = pricesoforders.every(num => num < 10)
    if(val){
        console.log(`Order contains only expensive books:${false}`);
    }else{
        console.log(`Order contains only expensive books:${true}`);    
    }
        
        
    
})