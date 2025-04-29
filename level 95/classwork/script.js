/*function nums(num,res,numdevide) {
numdevide = num / 100;
return Math.round(numdevide);

}
console.log(nums(Number(prompt('Enter a number:'),)));
*/






function lover(per1,per2){

    return (`${per1} and ${per2},your love percent is ${Math.floor(Math.random() * 101)}%`)
}
alert(lover(prompt('Enter your name'),prompt('Enter crush name')))