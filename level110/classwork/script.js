const name = "MasterJaneza";
// this is primitiul bc its a string and it has methods
const age = 29;
// this is not primitiul bc its a number and it dosent have methods
const skills = ["JavaScript", "React"];
// this is primitiul bc its a arry and it has methods
const greet = function() { return "Hello!"; };
// this is primitiul bc its a function and it has methods
const isCool = true;
// this is not primitiul bc its a boolian and it dosent have methods
const details = { country: "Georgia" };
// this is primitiul bc its a object and it has methods

//idk what is falsy and i writhed two choises
//1
let isFalsy = () => {
    let arg = prompt('give me one thig')
    if(!arg){
        return true
    }else{
        return false
    }
}
//2
let isFalsy1 = () => {
    let arg = prompt('give me one thig')
    if(arg){
        return true
    }else{
        return false
    }
}

isFalsy()
isFalsy1()

