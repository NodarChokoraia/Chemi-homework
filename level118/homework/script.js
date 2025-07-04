let filterAndSum = (n,...e) => e.filter(i => i > n)
console.log(filterAndSum(5,1,2,3,6,7,5,1,3));
const product = {
    id: 101,
    name: "Laptop",
    price: 1200,
    brand: "TechCorp",
    color: "Silver",
    weight: "2kg"
};

let {id,name,...details} = product


console.log(id,name,details);





let combineArrays = (s,...a) =>{ 
    let arr = [s,...a]
    return arr
}
console.log(combineArrays('string',1,3,14,12,412,3123,123));



const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
let obj3 = {...obj1,...obj2}
console.log(obj3);
const numbers = [10, 20, 30];
let newarr = [...numbers]
newarr.push(40,50)
console.log(newarr);


const values = [25, 10, 35, 5];

function getMax(a,b,c){
    return Math.max(a,b,c);
}


console.log(getMax(...values,...values,...values));
