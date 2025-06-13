// let checktype = () =>  {
//     let value = prompt('write any value')
//     if(typeof(value)== String){
//         console.log('primitive');
        
//     }else{
//         console.log('non-primitive');
        
//     }
// }

// checktype()

let checkfalsy = () => {
    let value = [2 == 2,1>2 ,3<1]
    let res1 = ''
    let res = () => {
        for(let i in value){
            if(value[i] == false){
                res1 = false
                
            }else{
                res1 = true
                
            }
           
        } 
        return res1
    }
    
    console.log(res());
    
    
}

checkfalsy()


let checkfalsy1 = () => {
    let value = [2 == 2,1>2 ,3<1]
    let res1 = []
    let res = () => {
        for(let i in value){
            if(value[i] == false){
                res1.push(value[i])
                
            }else{
                
                
            }
           
        } 
        return res1
    }
    
    console.log(res());
    
    
}
checkfalsy1()


let checkfalsy2 = () => {
    let value = [2 == 2,1>2 ,3<1]
    let res1 = 0
    let res2 = 0
    let res = () => {
        for(let i in value){
            if(value[i] == false){
                res1++
                
            }else{
                res2++
                
            }
           
        } 
        return `the trues are ${res2} many and falses are ${res1} many`
    }
    
    console.log(res());
    
    
}
checkfalsy2()




// let a = "hello";
// let b = a;
// b = "world";

// console.log(a); // ? this code will output hello bc we console loged a variable
// console.log(b); // ? this code will output world bc we console loged b variable and b variable is seted to world

// let x = { name: "Janeza" };
// let y = x;
// y.name = "Master";

// console.log(x.name); // ?this code will output name: janeza bc we console loged x variable
// console.log(y.name); // ?this code will output name: Master bc we console loged y variable and y variabl is set to Master



// const arr = ["JS", "React", "Node"];

// console.log("Using for...in:");thi will output Using for...in:
// for (let key in arr) {
//   console.log(key);
// }this will output JS,React,Node

// console.log("Using for...of:");//Using for...of:
// for (let value of arr) {
//   console.log(value);
// } this will output JS,React,Node




let arry = [1,2,3,4,5]

for(let i in arry){
    console.log(i);
    
}

let ob = {
    name:'nodiko',
    lastname:'chokoraia'
}


for(let e of ob){
    console.log(e);
    
}