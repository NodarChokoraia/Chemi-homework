let promise1 = new Promise((resolve,reject)=> setTimeout(()=>resolve('win1'),1000)) 
let promise2 = new Promise((resolve,reject)=> setTimeout(()=>resolve('win2'),2000)) 
let promise3 = new Promise((resolve,reject)=> setTimeout(()=>resolve('win3'),3000)) 
let promise4 = new Promise((resolve,reject)=> setTimeout(()=>resolve('win4'),4000)) 
let promise5 = new Promise((resolve,reject)=> setTimeout(()=>resolve('win5'),5000)) 


Promise.all([
    promise1,
    promise2,
    promise3,
    promise4,
    promise5
]).then(res => console.log(res))


Promise.race([
    promise1,
    promise2,
    promise3,
    promise4,
    promise5
]).then(res => console.log(res))


let promise6 = new Promise((resolve,reject)=> setTimeout(()=>resolve('win1'),5000)) 
let promise7 = new Promise((resolve,reject)=> setTimeout(()=>reject('win2'),2000)) 
let promise8 = new Promise((resolve,reject)=> setTimeout(()=>resolve('win3'),1000)) 
let promise9 = new Promise((resolve,reject)=> setTimeout(()=>resolve('win4'),4000)) 
let promise10 = new Promise((resolve,reject)=> setTimeout(()=>reject('win5'),5000)) 

Promise.any([
    promise6,
    promise7,
    promise8,
    promise9,
    promise10
]).then(res => console.log(res))


Promise.allSettled([
    promise6,
    promise7,
    promise8,
    promise9,
    promise10
]).then(res => console.log(res)).catch(err => console.log(err))
