let sumoftwo = (num1, num2 =0) => {
    return num1 +num2
}

sumoftwo(3,5)

let fullname = ({firstname,lastname='doe'}) => `${firstname}  ${lastname}`

console.log(fullname({firstname: "John"}));


let sumofarry = (arry=[1,2,3]) => {
    let sum = 0
    for(let i in arry){
        sum+=arry[i]
        
    }
    return sum
}

console.log(sumofarry());


let sentence = (str1,str2 = '') => str1+str2
console.log(sentence('hello'));

let fun = (fun1 = () => 10) => fun1()
console.log(fun());
