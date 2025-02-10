let password = 'Group 24-25 is best';
let gamoicani;
let tries = 3;

let progres = true;

while(progres == true){
    
    gamoicani = prompt(`guess password you have ${tries} tries`)
    if(tries == 1){
        alert('თქვენ ამოგწურათ ცდები სცადეთ ხელახლა მოგვიანებით')
        progres=false;

    }else if(gamoicani!=password){
        alert('თქვენ ვერ გამოიცანით სცადეთ ხელახლა')
        tries--;
        
        

    }else if(gamoicani==password){
        alert('თქვენ გამოიცანით პაროლი')
        progres=false;
    }
    


    
    
}



for(let i = 100;i>=0;i--){
    console.log(`დარჩენილია ${i} წამი`);
    
    
    
  
    
}

let n = 5;
let sum =1;
for(let i = n;i>1;i--){
    console.log(sum *=i);
    
    
    
}
