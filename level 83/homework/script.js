let money = 500;
let perrent = money;

function bils(nodiko,nikolozi,guka){
    if(nodiko+nikolozi+guka <= perrent){
        console.log('payment went truw');
        
    }else{
        console.log('payment declined you dont have money');
    }





}
bils(200,100,150)



function fizzbuzz(m){
    

        if(m%3==0){
                console.log('fizz');
                
        }else if(m%5==0){
                console.log('buzz');
                
        }else if(m%3==0&&m%5==0){
                console.log('fizzbuzz');
                
        }
}

fizzbuzz(Number(prompt('number')))