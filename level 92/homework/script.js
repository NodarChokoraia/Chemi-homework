//#1
let strarrys = ['apple', 'orange', 'banana'];
let numsarry = [1,2,3,4];

let Concatenate = numsarry.concat(strarrys);
console.log(Concatenate);

Concatenate.copyWithin(4,0,4);
console.log(Concatenate);
Concatenate.fill("filled",2,4);
console.log(Concatenate);
Concatenate.pop();
console.log(Concatenate);
Concatenate.shift();
console.log(Concatenate);
Concatenate.unshift(100,200);
console.log(Concatenate);

function modifyArray(){
    let strarrys = ['apple', 'orange', 'banana'];
    let numsarry = [1,2,3,4];

    let Concatenate = numsarry.concat(strarrys);
    console.log(Concatenate);

    Concatenate.copyWithin(4,0,4);
    console.log(Concatenate);
    Concatenate.fill("filled",2,4);
    console.log(Concatenate);
    Concatenate.pop();
    console.log(Concatenate);
    Concatenate.shift();
    console.log(Concatenate);
    Concatenate.unshift(100,200);
    console.log(Concatenate);
}

console.log(modifyArray());



//#2

let people = ['nodiko','giorgi','guka'];
let places = ['new york','london','tbilisi'];

let mergedArray = people.concat(places);
console.log(mergedArray);
mergedArray.copyWithin(2,0,2)
console.log(mergedArray);
mergedArray.fill({city: 'New York'},4,6)
console.log(mergedArray);
mergedArray.pop()
console.log(mergedArray);
mergedArray.shift()
console.log(mergedArray);
mergedArray.unshift({name: 'Charlie'},{name: 'David'})
console.log(mergedArray);

//#3
let mixedArray = [1,2,3,'four','apple',5];

let arry = [true,false];

let extendedArray = mixedArray.concat(arry);
console.log(extendedArray);


extendedArray.copyWithin(0,2,4)
console.log(extendedArray);

extendedArray.fill(0,5,8)
console.log(extendedArray);

extendedArray.pop()
extendedArray.shift()
console.log(extendedArray);
extendedArray.unshift(null,undefined)
console.log(extendedArray);


//#4
//1
let arry1 = [1,2,3]
let arry2 = [4,5,6]
let newarry1 = arry1.concat(arr2)

let arry4 = [413,'dsad',3]
let arry5 = [4,5,6]
let newarry2 = arry4.concat(arr5)

let arry6 = [1,7643,3]
let arry7 = [4,'1341',6]
let newarry3 = arry6.concat(arry7)

//2
let arrys1 = [1,2,3,4]
arrys1.pop()

let arrys2 = [425,2,24524,4]
arrys1.pop()

let arrys3 = [1,2452,3,4]
arrys1.pop()

//3
let arry8 = [3,35,6,3,3,45,56,3]
arry8.copyWithin(0,2,5)

let arry9 = [3,35,6,3,3,45,56,3]
arry8.copyWithin(2,4,7)

let arry10 = [3,35,6,3,3,45,56,3]
arry8.copyWithin(3,7,8)

//4
let arryfill1 = [1,3,3,4,5]
arryfill1.fill(2,1,2)

let arryfill2 = [1,2,3,4,4]
arryfill2.fill(5,5,6)

let arryfill3 = [1,2,2,4,5]
arryfill3.fill(3,2,3)

//5

let arrshift1 = [12,2,3,4,5]
arrshift1.shift()

let arrshift2 = [1,2,32,4,5]
arrshift2.shift()

let arrshift3 = [1,6,3,4,5]
arrshift3.shift()

//6
let arrunshift1 = [1,2,3,4,5]
arrunshift1.unshift(6,7)

let arrunshift2 = [1,2,3,4,5,6,7,8,9]
arrunshift2.unshift(10,11)

let arrunshift3 = [1,2,3,4,5,6,7]
arrunshift3.unshift(8,9)