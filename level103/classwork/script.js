let but1 =document.getElementById('but1')
let but2 =document.getElementById('but2')
let but3 =document.getElementById('but3')

let img = document.querySelector('#img')




but1.addEventListener('click',function(){
    
    img.src = 'images/programer.png';
})

but2.addEventListener('click',function(){
    img.src = 'images/grapicsdesigner.png';
})
but3.addEventListener('click',function(){
    img.src = 'images/mexanic.png';
})