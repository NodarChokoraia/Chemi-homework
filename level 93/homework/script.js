let y= [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let mergedArray = arr1.concat(arr2);
mergedArray.copyWithin(5,0,4);
mergedArray.fill(0,2);
mergedArray.pop();
mergedArray.shift();
mergedArray.unshift(100,200);
mergedArray.splice(1,2,arr3);

let newarry = mergedArray.slice(0,3);
console.log(mergedArray);

function comprehensiveArrayTask (arr1,arr2,arr3){
    y= [1,2,3];
    arr2 = [4,5,6];
    arr3 = [7,8,9];

    let mergedArray = arr1.concat(arr2);
    mergedArray.copyWithin(5,0,4);
    mergedArray.fill(0,2);
    mergedArray.pop();
    mergedArray.shift();
    mergedArray.unshift(100,200);
    mergedArray.splice(1,2,arr3);

    let newarry;
    newarry = mergedArray.slice(0,3);
    return mergedArray
}

console.log(comprehensiveArrayTask());


// //2

let students = [];
let grades = [];

function addStudents(name,grade){
    name = prompt('student name?');
    grade = prompt('student grade 10/0 ?')
    students.unshift(name)
    grades.unshift(grade)

    

}

addStudents()
console.log(students,grades);


// //3

let playlist =[]

function addSong(name){
    name = prompt("what is your song's name?")
    playlist.unshift(name)
    return playlist
}

console.log(addSong());

// //4

let CartItems = [];
let Prices = [];

function additem(item){
    item = prompt('chose item banana,milk,chocolade,cola or check out')
    
    

    if(item == 'banana'){
        CartItems.unshift(item)
        Prices.unshift(`1,45$`)
    }else if(item == 'milk'){
        CartItems.unshift(item)
        Prices.unshift(`3$`)
    }else if(item == 'chocolade'){
        CartItems.unshift(item)
        Prices.unshift(`2.49$`)
    }else if(item == 'cola'){
        CartItems.unshift(item)
        Prices.unshift(`1,89$`)
    }

    while(item != 'check out'){
        item = prompt('chose item banana,milk,chocolade,cola or check out');
        if(item == 'banana'){
            CartItems.unshift(item);
            Prices.unshift(`1,45$`);
        }else if(item == 'milk'){
            CartItems.unshift(item);
            Prices.unshift(`3$`);
        }else if(item == 'chocolade'){
            CartItems.unshift(item);
            Prices.unshift(`2.49$`);
        }else if(item == 'cola'){
            CartItems.unshift(item);
            Prices.unshift(`1,89$`);
        }
    }
    
}

console.log(additem());
console.log(CartItems,Prices);

function removeFirstItem(){
    CartItems.shift();
    Prices.shift();
    return [CartItems,Prices];
}
console.log(removeFirstItem());

function replaceItem(){
    CartItems.splice(0,4,'mango');
    Prices.splice(0,4,'4,49$');
    return [CartItems,Prices];
}
console.log(replaceItem());

function createReceipt(){
    CartItems.join('-');
    Prices.join('-');
    return [CartItems,Prices];
}
console.log(createReceipt());
function applyDiscount(){
    Prices.fill('20% discount',0,1);
    return [CartItems,Prices];
}
console.log(applyDiscount());
//5

let library = [];

function addBook(name){
    name = prompt('what is the book name or check out')
    if(name == 'check out'){

    }else{
       library.push(name) 
    }
    
    while(name != 'check out'){
        name = prompt('what is the book name or check out')
        if(name == 'check out'){

        }else{
           library.push(name) 
        }
    }
    return library

}
console.log(addBook());

function listBooks(str){
    str = library.join('-')
    return str
}
console.log(listBooks());

function removeLastBook(){
    library.pop();
    return library
}


console.log(updateBookCopies());


console.log(removeLastBook());



function extractBooks(storage){
    storage = library.slice(0,3)
    return  storage
}

console.log(extractBooks());

function modifyBooks(){
    library.copyWithin(-1,0,1)
    return library
}

console.log(modifyBooks());


function removeFirstBook(){
    library.shift()
    return library
}

console.log(removeFirstBook());

function addFirstBook(name){
    name = prompt('what is the book name or check out')
    if(name == 'check out'){

    }else{
       library.unshift(name) 
    }
    
    while(name != 'check out'){
        name = prompt('what is the book name or check out')
        if(name == 'check out'){

        }else{
           library.unshift(name) 
        }
    }
    return library

}

console.log(addFirstBook());

//6

let arry1 = [1,2,3,4,5];
let arry2 = [6,7,8,9,10,[11,12,13,14,15]];


let combinedArray = arry1.concat(arry2);

combinedArray.copyWithin(5,0,4);

combinedArray.fill(0,6,-1);
combinedArray.pop();
combinedArray.shift();
combinedArray.unshift(100,200);
combinedArray.splice(2,2,['x','y','z']);
let slicedArray = combinedArray.slice(combinedArray.length-6,-1);
slicedArray.join(',');

let flated = combinedArray.flat(Infinity);


console.log(flated.includes(8));
console.log(flated.indexOf(9));
console.log(combinedArray);

//7

let arry3 = [1,2,3,4,5];
let arry4 = [6,7,8,9,10];
let nestedarry = [1,2,[3,4,[5,6]]]
let combinedArray1 = arry3.concat(arry4);

combinedArray1.copyWithin(4,0,3);
combinedArray1.fill(0,2,5);
combinedArray1.pop();
combinedArray1.shift();
combinedArray1.unshift(10,20);
combinedArray1.splice(2,2,30,40);
let slicedArray1 = combinedArray1.slice(-3,combinedArray1.length+1);
slicedArray1.join('-');

let flatarry = nestedarry.flat(Infinity);
flatarry.includes(9);
flatarry.indexOf(10);
flatarry.lastIndexOf(10);
flatarry.push(13);

//8

let numbers = [10, 20, 30, 40, 50];

let numarray = [60, 70, 80];
let concated = numarray.concat(numbers);
numbers.copyWithin(-1,2,4);
numbers.fill(100,0,4);
numbers.pop();
numbers.shift();
numbers.unshift(5,15);

let nestedArr = [1, [2, 3], [4, [5, 6]]];

nestedArr.flat(Infinity)

numbers.includes(50);
numbers.indexOf(30);
numbers.lastIndexOf(20);
numbers.push(90,100)


//9
let people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];
  
let morePeople = [
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
];

let allpeople = people.concat(morePeople);
allpeople.copyWithin(-1,0,3);
allpeople.fill({ id: 0, name: 'Unknown' },0,3);
let removedPerson = allpeople.pop();
let firstRemovedPerson = allpeople.shift();
allpeople.unshift({ id: 6, name: 'Frank' },{ id: 7, name: 'Grace' });
let peopleString = allpeople.join(',');
let somePeople = allpeople.slice(1,4);
allpeople.splice(2,0,{ id: 10, name: 'Ivan' },{ id: 11, name: 'Judy' });
let nestedArray = [[1, 2], [3, 4], [[5, 6], [7, 8]]];
let flatArray1 = nestedArray.flat(Infinity);
allpeople.includes({ id: 5, name: 'Eve' });
allpeople.indexOf({ id: 3, name: 'Charlie' });
allpeople.lastIndexOf({ id: 2, name: 'Bob' });
flatArray1.push({ id: 8, name: 'Hank' })


