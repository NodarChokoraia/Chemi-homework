let year = Number(prompt('enter year and we will tell you if it is leap year or not'))
if(year%4==0&&year%100==0||year%400==0){
    console.log(`year ${year} is leap year`);
    
}else{
    console.log(`year ${year} is not leap year`);
    
}

let per1 = 'nodiko';
let per2 = 'daviti';
let per3 = 'giorgi';
let per4 = 'guka';
let per5 = 'sandro';
let arry = [per1,per2,per3,per4,per5];
let random = Math.floor(Math.random()*5);
console.log(arry[random]+' has to pay everywones drinks');


let arry1 = [];
let random1 =Math.floor(Math.random()*11);
let random2 =Math.floor(Math.random()*11+1);
let sum = 0
for (let i = 0; i < random2; i++) {
    random1=Math.floor(Math.random()*11);
    arry1.unshift(random1)
    
}
console.log(arry1);

for (let e = 0; e < arry1.length; e++) {
    sum += e
    
}

console.log(sum);


let num1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let ress = []

for(let i = 0 ;i<num1.length;i++){
    if(num1[i]%3==0&&num1[i]%5==0){
        ress.push('fizzbuzz')
    }else if(num1[i]%5==0){
        ress.push('buzz')
    }else if(num1[i]%3==0){
        ress.push('fizz')
    }else{
        ress.push(num1[i])
    }

}


console.log(ress);

