let map1 = new Map([
    ['France' , 'Paris'],
    ['Japan' , 'Tokyo'],
    ['Brazil' , 'Brasília'],
    ['Canada' , 'Ottawa'],
    ['Australia' , 'Canberra']

])

console.log(map1.entries());
let fruit = new Map([
    ['apple','red'],
    ['pineapple','yellow'],
    ['banana','yellow']
])

fruit.set('swrabery','red').set('gargari','yellow')
fruit.delete('apple')
console.log(fruit);


let guns = new Map([
    ['gun1','m4'],
    ['gun1','aka47']
])
console.log(guns.has('gun1') ? 'yes' : 'no' );





for(let i of map1.keys()){
    for(let e of map1.values()){
        console.log(`The capital of ${i} is ${e}`);
    }
}




let arry = Array.from(map1)
let map2 = new Map([...arry])
console.log(arry,map2);

