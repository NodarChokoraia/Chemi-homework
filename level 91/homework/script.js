console.log('n1');

function arr(arr1){
    return arr1.length

}
console.log(arr([1,2,3,4,5]));

console.log('n2');
function twoarr(arr1,arr2){
    let twoarrs = arr1.concat(arr2)
    return twoarrs
    
}
console.log(twoarr([1,2,3,4],[5,6,7,8,9]));

console.log('n3');
function pusharr(arr1,num){
    arr1.push(num)
    return arr1.length
}
console.log(pusharr([1,2,3,4],5));

console.log('n4');
function arrs(arr1,arr2,num){
    let arr3 = arr1.concat(arr2)
    arr3.push(num)
    return arr3
}
console.log(arrs([1,2,3],[4,5,6],7));
console.log('n5');

function removed(arr){
    let removedarr = arr.pop(arr)
    return removedarr
}
console.log([1,2,3,4]);




console.log('n6');
function sumofarr(arr,sum){
    for(let i = 0;i<arr.length;i++){
        sum = arr[i] + arr[i++]
    }
    return sum
}
console.log(sumofarr([1,2,3],0));

console.log('n7');
function newarr(arr1,arr2){
    for(let i = 0;i<arr1.length;i++){
        if(arr1[i] % 2 == 0){
            arr2.push(arr1[i])
        }
    }
    return arr2
}
console.log(newarr([1,2,3,4],[]));

console.log('n8');
function strarr(arr1,arr2){
    for(let i = 0;i < arr1.length;i++){
        arr2.push(arr1[i].length)
    }
    return arr2
}
console.log(strarr(['string','apple','orange'],[]));

