//1 
let promise1 = new Promise((resolve,reject)=>{
    console.log(resolve('hello,Promise'))
})


//2


let promise2 = new Promise((resolve,reject)=>{
    reject('Something went wrong!')
})

promise2.catch(rej => console.log(rej))

//3 
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("2 seconds have passed"),2000)
})

//4

let promise4 = new Promise((resolve,reject)=>{
    let random = Math.floor(Math.random()*3)
    if(random==1){
        resolve('succes')
    }else{
        reject('faluer')
    }
})



promise4
.then(res => console.log(res))
.catch(rej => console.log(rej))


//5
let promise5 = new Promise((resolve,reject)=>{
    resolve(5)

})


promise5
.then(res => res*2)
.then(res => res*2)
.then(res => res*2)
.then(res => res*2)
.then(res => console.log(res*2))

//6  "Data fetched!"

let promise6 = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("Data fetched!"),1000)
})