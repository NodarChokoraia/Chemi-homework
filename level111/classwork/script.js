let greetUser = (name = 'guest') => {
    if(name == ''){
        return 'Hello, guest!'
    }
    return `Hello, ${name}`
}





console.log(greetUser("MasterJaneza"));


 
console.log(greetUser(""));

 
console.log(greetUser());

let power = (n1,n2 = 2) => {
    return n1**n2
}

console.log(power(8,2));
console.log(power(3));