let down = document.querySelector('#down');
let up = document.querySelector('#up');
let img = document.querySelector('#img1');

let images = [
    'images/css.png',
    'images/js.png',
    'images/html.png'
]
let num = 0
function down1(){
    num--
    if(num < 0){
        num = images.length - 1
    }
    img.src = images[num]
}


function up1(){
    num++
    if(num >= images.length){
        num = 0
    }
    img.src = images[num]
}

setInterval(function(){
    num++
    if(num >= images.length){
        num = 0
    }
    img.src = images[num]
},2000)

down.addEventListener('click',down1);
up.addEventListener('click',up1);

//------------------------

let down3 = document.querySelector('#down1');
let up3 = document.querySelector('#up1');
let img3 = document.querySelector('#img2');

let images1 = [
    
    'images/js.png',
    'images/css.png',
    'images/html.png'
]
let num1 = 0
function down2(){
    num1--
    if(num1 < 0){
        num1 = images1.length - 1
    }
    img3.src = images1[num1]
}


function up2(){
    num1++
    if(num1 >= images1.length){
        num1 = 0
    }
    img3.src = images1[num1]
}



down3.addEventListener('click',down2);
up3.addEventListener('click',up2);



///---------------

let down4 = document.querySelector('#down2');
let up4 = document.querySelector('#up2');
let img4 = document.querySelector('#img3');
let num2 = 0


let images2 = [
    
    'images/js.png',
    'images/css.png',
    'images/html.png'
]

function down5(){
    num2--
    if(num2 < 0){
        num2 = images2.length - 1
    }
    img4.src = images2[num2]
}


function up5(){
    num2++
    if(num2 >= images2.length){
        num2 = 0
    }
    img4.src = images2[num2]
}



down4.addEventListener('click',down5);
up4.addEventListener('click',up5);