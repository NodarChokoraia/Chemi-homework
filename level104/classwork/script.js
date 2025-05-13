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



down.addEventListener('click',down1);
up.addEventListener('click',up1);