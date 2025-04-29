//1
let fruits = ['apple','orange','grapes'];
let citrus = fruits.slice(1);
console.log(citrus);
fruits.splice(1,2,'fig')
console.log(fruits);

let fruitString = fruits.join('-');
console.log(fruitString);
function processFruits(fruits,citrus,fruitString ){
    citrus = fruits.slice(1);
    
    fruits.splice(1,2,'fig')
    console.log(citrus);
    console.log(fruits);
    fruitString = fruits.join('-');
    console.log(fruitString);
}

console.log(processFruits(['apple','orange','grapes']));


console.log('------------------------------------------------------------------------------------------------------');

//2
let nestedArray = [1,2,[3,4,[5,6,[7,8,9]]]];
let flatArray = nestedArray.flat(1);
let fullyFlatArray = nestedArray.flat(Infinity);
nestedArray.lastIndexOf
function checkElement(nestedArray2){
    return nestedArray2.includes(8)
}

console.log(checkElement([1,2,3,4,5,6]));


function findIndexOfElement(find){
    return find.indexOf(2)
}

console.log(findIndexOfElement([1,2,3,4]));

function findLastIndexOfElement(findlast){
    return findlast.lastIndexOf(7)
}

console.log(findLastIndexOfElement([1,2,3,4,5,6,7]));

