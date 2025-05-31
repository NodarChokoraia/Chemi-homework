let num = 50;
console.log(num);

let num1 = () => {
    let num = 15;
    return num
}

//რომ მივიხოთ წვდომა  local ცვლადზე ჩვენ არ უნდა დავუწეროთ ცვლადის რომელიმე მეთდი როგორიცაა var,const or let
let num2 = () => {
    num = 15;
    return num
}

console.log(num2());


//global - global variables can be used in everywere its like facebook or instagram everywone can use them
//local - local variables only can be used in his perrent function like if,funciont,and more






let arrys = (arr)=>{
    for(let i = 0;i<arr.length;i++){
        if(arr[i]%2 ==0){
                console.log('even');
                
        }else{
                console.log('odd');
                
        }
    }
    
}


console.log(arrys([1,2,3,4,5]));


