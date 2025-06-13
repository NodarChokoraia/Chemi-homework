//every

let arry1 = [1,2,3,4,5];
let morethan3 = arry1.every(num => num > 3);
console.log(morethan3);

//some
let arry2 = [6,7,8,9,10];
let lessthan2 = arry2.some(num => num < 2);
console.log(lessthan2);

//map

let arry3 = [11,12,13,14,15];
let morethan13 = arry3.map(num => num > 13)
console.log(arry3);
console.log(morethan13);


//1 
let arry4 = [1,2,3,4,5];
let morethan1 = arry4.filter(num => num > 1);
console.log(morethan1);

//2

let arry5 = ['batman','sumerman','thor','spiderman'];
let searched = arry5.filter(hero => hero == 'thor'  )
console.log(searched);

//3
let arry6 = ['apple','pineaple','banana']
let bestfruit = arry6.filter(best => best == 'apple')
console.log(bestfruit);
