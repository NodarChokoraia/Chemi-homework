let arry1 = [1,2,'three',4,5]
let arry2 = [1,true,'three',4,false,6.5]
for(let i of arry1){
    console.log(i);
    
}

for(let e of arry2){
    console.log(e);
    
}


let car = {
    brand:'bmw',
    model:'m4',
    color:'black'
}

for(let m in car){
    console.log(car[m]);
    console.log(m);
    console.log(m+': ' + car[m]);
    
    
    
}