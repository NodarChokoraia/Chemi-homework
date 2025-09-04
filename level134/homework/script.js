//1
let promise1 = new Promise((resovle,reject)=>{
    resovle('Success')
})
let promise2 = new Promise((resovle,reject)=>{
    resovle('Success')
})
let promise3 = new Promise((resovle,reject)=>{
    resovle('Success')
})
Promise.all(promise1,promise2,promise3).then(res => console.log(res))

//2

let promise4 = new Promise((resovle,reject)=>{
    reject('failure')
})
let promise5 = new Promise((resovle,reject)=>{
    resovle('Success')
})
let promise6 = new Promise((resovle,reject)=>{
    resovle('Success')
})
Promise.all(promise4,promise5,promise6).catch(res => console.log(res))

//3

let promise7 = new Promise((resovle,reject)=>{
    setTimeout(()=>resovle('failure'),1000)
    
})
let promise8 = new Promise((resovle,reject)=>{
    setTimeout(()=>resovle('failure'),500)
})
let promise9 = new Promise((resovle,reject)=>{
    setTimeout(()=>resovle('failure'),2000)
})
Promise.race(promise7,promise8,promise9).then(res => console.log(res))


//4

let promise10 = new Promise((resovle,reject)=>{
    reject('failure')
    
})
let promise11 = new Promise((resovle,reject)=>{
    setTimeout(()=>reject('failure'),500)
})
let promise12 = new Promise((resovle,reject)=>{
    setTimeout(()=>reject('failure'),2000)
})
Promise.race(promise10,promise11,promise12).catch(res => console.log(res))

//5

let promise13 = new Promise((resovle,reject)=>{
    reject('failure')
})
let promise14 = new Promise((resovle,reject)=>{
    reject('Success')
})
let promise15 = new Promise((resovle,reject)=>{
    resovle('Success')
})
Promise.any(promise13,promise14,promise15).then(res => console.log(res))
//6

let promise16 = new Promise((resovle,reject)=>{
    reject('failure')
})
let promise17 = new Promise((resovle,reject)=>{
    reject('failure')
})
let promise18 = new Promise((resovle,reject)=>{
    reject('failure')
})
Promise.all(promise16,promise17,promise18).catch(res => console.log(res))
//7

let promise19 = new Promise((resovle,reject)=>{
    reject('failure')
})
let promise20 = new Promise((resovle,reject)=>{
    reject('failure')
})
let promise21 = new Promise((resovle,reject)=>{
    reject('failure')
})
let promise22 = new Promise((resovle,reject)=>{
    reject('failure')
})
let promise23 = new Promise((resovle,reject)=>{
    reject('Success')
})
Promise.allSettled(promise19,promise20,promise22,promise21,promise23).then(res => console.log(res)).catch(res => console.log(res))

//8
let promise24 = new Promise((resovle,reject)=>{
    reject('failure')
})
let promise25 = new Promise((resovle,reject)=>{
    reject('failure')
})
let promise26 = new Promise((resovle,reject)=>{
    reject('failure')
})
Promise.allSettled(promise24,promise25,promise26).catch(res => console.log(res))

//9

Promise.allSettled(promise19,promise20,promise22,promise21,promise23).then(res => {
    let check = 0
    check++
    console.log(check);
    
}).catch(res => {
    let check = 0
    check++
    console.log(check);
    
})


//10

let promise27 = new Promise((resovle,reject)=>{
    reject(5)
})
let promise28 = new Promise((resovle,reject)=>{
    reject(7)
})
let promise29 = new Promise((resovle,reject)=>{
    reject(8)
})
Promise.allSettled(promise24,promise25,promise26).map(val => val*2)
