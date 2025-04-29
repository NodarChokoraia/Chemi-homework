function date(date){
    date = new Date()
    return date
}

console.log(date());


function year(yearinput,moninput,dateinput,sum1,sum2,sum3,date){
    yearinput = Number(prompt('your birthday year'));
    moninput =  Number(prompt('your birthday month'));
    dateinput = Number(prompt('your birthday date'));
    sum1 = ((new Date().getFullYear()) - yearinput);
    sum2 = ((new Date().getMonth()) - moninput);
    sum3 = ((new Date().getDate()) - dateinput);
    if(((new Date().getFullYear()- yearinput))<yearinput){
        
    }else if(((new Date().getFullYear()- yearinput))>yearinput){
        sum1-=1
    }
    
    return  'you are ' +sum1 + ' years old ' + sum2 + ' months and '+sum3 + ' days' 
}

console.log(year());



function count(){
    let p1 = document.querySelector('p');
    let sec = 0
    setInterval(function(){
        sec++
        p1.innerText= sec
        
    },1000)

    
    
}

count()


function count1(){
    let p1 = document.querySelector('#p1');
    
    setInterval(function(){
        let sec = new Date();
        p1.innerText= sec
        
    },1000)

    
    
}

count1()


function ran(){
    random = Math.floor(Math.random()*2)
    setInterval(function(){
        random = Math.floor(Math.random()*2)
        console.log(random);
        
        
    },1000)
    return random
}

console.log(ran());

function delay(){
    let delayalert = prompt('is your mesege delayed ?')
    let delayprompt
    if(delayalert == 'yes'){
        delayprompt = Number(prompt('how much delay your mesege had ? (pls put with milisecends)'))
    }else{
        alert('ok thanks for helping')
    }
    return `sory for ${delayprompt/1000} secend mesege dalay`
}

console.log(delay());


function welcome(){
    setInterval(function(num){
        num = 0
        num++
        console.log('welcome to our website');
        if(num == 1){
            clearInterval(1)
        }
        
    },3000)

}
console.log(welcome());

function w1(int1){
    int1 = setInterval(function(num){
        num = 0
        num++
        console.log('hello');
        if(num ==1){
            clearInterval(int1)
        }
        
    },1)
}

function w2(int1){
    int1 =setInterval(function(num){
        num = 0
        num++
        console.log('user');
        if(num ==1){
            clearInterval(int1)
        }
    },1000)
}

function w3(int1){
    int1=setInterval(function(num){
        num = 0
        num++
        console.log('see our website');
        if(num == 1){
            clearInterval(int1)
        }
    },2000)
}

console.log(w1());
console.log(w2());
console.log(w3());



function hello(){
    console.log('hello');
    
}
let timeout =setTimeout(hello,1000)
console.log(timeout);



function greting(res,res1,res2){
    let Times = {
        pm12:'Good Evening',
        pm9:"Good Afternoon",
        pm6:"Good Morning"
    }
    res = setInterval(function(){
        console.log(Times.pm6)
        clearTimeout(res);
    },6000);
    res1 = setInterval(function(){
        console.log(Times.pm9)
        clearTimeout(res1);
    },9000);
    res2 = setInterval(function(){
        console.log(Times.pm12);
        clearTimeout(res2);
    },12000);
    
    
}

    
console.log(greting());
