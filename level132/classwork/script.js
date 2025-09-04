let promise = new Promise((resolve,reject)=>{
    let forgotgroceris = false;
    if(forgotgroceris) return resolve('finaly you didint forgeten something this time');
    else return reject('why you can remember onething')
})

promise
    .then('thank you')
    .catch('i will not give you money for grocerys')
    .finally('next timeil go for shoping')

console.log(promise);
