// let set1 = new Set()
// set1.add(1).add(2)
// set1.has(2)
// set1.size
// set1.delete(1)
// set1.clear()
// set1.add(1).add(2).add(3).add(4).add(5)
// set1.forEach(values => values+2)
// Array.from([set1])
// console.log(set1);



// let set2 = new Set([1,2,3,4,5])
// set2.add('apple').add('banana').add('orange')
// set2.add('apple')
// set2.has('banana')
// set2.delete('banana')
// for(let i of set2){
//     console.log(i);
    
// }
// let arry1 = Array.from([...set2])

// let array = [1,2,3,1,2,1,2]
// array = Array.from(new Set([...array]))
// set2.clear()


// let set3 = new Set()
// set3.add('cat').add('dog').add('parrot')
// set3.has('dog')
// set3.delete('parrot')
// set3.size
// for(let i of set3){
//     console.log(i);
// }
// set3.clear()
// set3 = new Set([...[1,2,2,3,4,4]])
// let arry2 = Array.from([...set3])


// let found = arr => {
//     let founder = new Set()
//     for(let i of arr){
//         if(founder.has(i)){
//             return true
//         }
//         founder.add(i);
//     }
//     return false;
// }


// console.log(found([1,2,2,3,4,1,2,3,4,5]));


let found1 = arr => {
    let founder = new Set()
    for(let i of arr.split(' ')){
        founder.add(i.toLowerCase())
    }
    return founder
}

console.log(found1('The sun shines and the moon glows'));



let intersection = (funcset1,funcset2) => {
    let finalset = new Set()
    for(let i of funcset1){
        for(let e of funcset2){
            if(i == e){
                finalset.add(i)
            }
        }
        
    }
    return finalset
}
console.log(intersection(new Set([1,2,3,4,5,6]),new Set([1,4,6,8,9,3])));


let intersection1 = (funcset1,funcset2) => {
    let finalset = new Set()
    for(let i of funcset1){
        for(let e of funcset2){
            if(!funcset2.has(i)){
                finalset.add(i)
            }
        }
        
    }
    return finalset
}
console.log(intersection1(new Set([1,2,3,4,5,6]),new Set([1,4,6,8,9,3])));



let found2 = arr => {
    let founder = new Set()
    for(let i of arr.split(' ')){
        founder.add(i.toLowerCase())
    }
    return founder.size
}

console.log(found1('The sun shines and the moon glows'));



let intersection2 = (arr1,arr2) => {
    let funcset1 = new Set([...arr1])
    let funcset2 = new Set([...arr2])
    for(let i of funcset1){
        for(let e of funcset2){
            if(i == e){
                return true
            }
        }
        
    }
    
}
console.log(intersection2([1,2,3,4,5,6],[1,4,6,8,9,3]));
let remove = (arr1) => {
    let funcset1 = new Set([...arr1.flat(Infinity)])
    return funcset1
}
console.log(remove([[1, 2], [2, 3], [1, 2]]));




let remove2 = (arr1) => {
    let  funcset1 = new Set();
    arr1.filter(item => {
        if (funcset1.has(item.id)) {
            return;
        }else {
            funcset1.add(item.id);
        }
    });
    return funcset1
};

console.log(remove2([{id: 1}, {id: 2}, {id: 1}]));


let count = (arr1) => {
    let  funcset1 = new Set([...arr1]);
    
    return funcset1.size
};

console.log(count(['nodiko','nodiko','sergi','daviti']));

let count1 = (arr1) => {
    for(let i =0 ; i != 10;i++){
        arr1.push(Math.round(Math.random()* 100))
    }
    let  funcset1 = new Set();
    for(let i of arr1){
        if(i%3 == 0 && i%5 == 0){
            funcset1.add(i)
        }
    }
    return funcset1
};

console.log(count1([]));

let found3 = arr => {
    let founder = new Set()
    for(let i of arr.split('')){
        founder.add(i.toLowerCase())
    }
    if(founder.size == arr.length){
        return true
    }else{
        return false
    }
}

console.log(found3('false'));