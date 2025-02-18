for(let i = 0;i<20;i++){
    if(i==13){
        continue;
    }else if(i==17){
        continue;
    }
    console.log(i);
    
}


for(let i = 0;i<20;i++){
    if(i%2==0){
        continue;
    }else if(i%8==0){
       break;
    }
    console.log(i);
    
}


for(let i = 0;i<30;i++){
    if(i%5==0){
        continue;
    }
    console.log(i);
    
}