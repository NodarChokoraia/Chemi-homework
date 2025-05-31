let human = {
    name:'nodiok',
    age:13,
    city:'tbilisi'
}

for(let i in human){
    console.log(human[i]);
    
}

let products = {
    aple:5,
    pineaple:15,
    watermelon:20
}
let sum = 0

for(let i in products){
    
    sum+=products[i]
    console.log(sum);
    
    
}


let obj = {
    a:true,
    b:12,
    c:'str',
    d:0.5,
    e:4,
}

for(let i in obj){
    
    if(typeof(obj[i]) == Number){
        console.log(obj[i]);
        
    }
    
    
}


let books = {
    book:{
        first:'karlson',
        sec:'tutus tkidan'
    },
    avtors:{
        fir:'idk',
        sec:'idk'
    }
    
}

for(let i in books){
    if(books[i]== books.book){
        for(i in books.book){
            console.log(books.book[i]);
            
        }
    }
}




let arry = [1,2,3,4,5]

for(let i of arry){
    console.log(i);
    
}

let arry1 = ['1',23123,41412,514124,12413]
for(let i of arry1){
    if(String(i).length>5){
        console.log(i);
        
    }
}


let arry2 = [1,2,3,4,5,6]
let arry3 = []

for(let i of arry2){
    arry3.push(i**2)
    
}

console.log(arry3);
