//1
let promise1 = new Promise((resolve,reject)=>{
    console.log(resolve({ status: "ok", code: 200 })); 
})
//2 

let promise2 = new Promise((resolve,reject)=>{
    reject("Custom failure!")
})

promise2.catch(rej => console.log(rej))

//3 

let func = ()=>{
    let time = Number(prompt('pick a number'))
    setTimeout(()=>{
        let promise3 = new Promise((resolve,reject)=>{console.log(resolve(`Waited ${time} ms`))})
        
    },time)
}

console.log(func());
//4

let promise4 = new Promise((resolve,reject)=>{
    let random = Math.floor(Math.random()*3)
    if(random==1){
        resolve('succes')
    }else{
        reject('faluer')
    }
})

//5
let promise5 = new Promise((resolve,reject)=>{
    resolve(5)

})


promise5
.then(res => res-2)
.then(res => res*4)
.then(res => console.log(res-5))

//6 "User {id} data"

let fetchUser = id => {

    setTimeout(()=>{
        let promise6 = new Promise((resolve,reject)=>{console.log(resolve(`User ${id} data`))})
        
    },1500)
}

console.log(fetchUser(prompt('enter you id')));



//7
let promise7 = new Promise((resolve,reject)=>{
    console.log(resolve('cleaning starting'));
})

promise7.finally("Cleanup complete")

//8

let promise8 = new Promise((resolve,reject)=>{
    resolve(()=>{
        let promise = new Promise((resolve,reject)=>{
            console.log(resolve("Nested resolved!"));
            
        })
})
})

//9

let wait = ms => {
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('secces'),ms)
    })
}

console.log(wait(1000));

//10
let promise9 = new Promise((resovle,reject)=>{
    setTimeout(()=> resovle('one'),1000)
})
let promise10 = new Promise((resovle,reject)=>{
    setTimeout(()=> resovle('two'),2000)
})
let promise11 = new Promise((resovle,reject)=>{
    setTimeout(()=> resovle('three'),3000)
})


Promise.all(promise9,promise10,promise11).then(res => console.log(res));
