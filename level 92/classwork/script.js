function arrs(){

let arr1 = [1,2,3,4,5,6];
let arr2 = [7,8,9,10,11];
let concatArray = arr1.concat(arr2);

concatArray.copyWithin(9,0,2);
console.log(concatArray);
concatArray.fill(0,8,11);
console.log(concatArray);

let lastElement = concatArray.pop();

let firstElement = concatArray.shift();
concatArray.unshift(10,20);
console.log(concatArray);
};
console.log(arrs());
