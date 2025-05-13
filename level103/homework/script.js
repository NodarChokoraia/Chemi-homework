let div1 = document.getElementById('div1');

let but1 = document.querySelector('#but1');
console.log(div1);






but1.addEventListener('click',function(){
    let colorbot = Math.round(Math.random() * 10)

    let color = ''
    switch(colorbot){
        case 1:
            color = 'red'
                break;
        case 2:
            color = 'green'
                break;
        case 3:
            color = 'purple'
                break;
        case 4:
            color = 'yellow'
                break;
        case 5:
            color = 'gray'
                break;
        case 6:
            color = 'brown'
                break;
        case 7:
            color = 'blue'
                break;
        case 8:
            color = 'pink'
                break;
        case 9:
            color = 'coral'
                break;
        case 10:
            color = 'orange'
                break;
    }
    div1.style.backgroundColor = color
    
})



let img1 = document.getElementById('img1')
let but2 = document.getElementById('but2')


but2.addEventListener('click',function(){
    if(img1.src = 'images/grapicsdesigner.png'){
        img1.src = 'images/programer.png'
    }
})


let p1 = document.getElementById('p1')
let but3 = document.getElementById('but3')

but3.addEventListener('click',function(){
    p1.classList.toggle('p1')
})



let p2 = document.getElementById('p2')
let but4 = document.getElementById('but4')
let check = 0
but4.addEventListener('click',function(){
    check++
    p2.textContent = check
})


let p4 = document.getElementById('p4')
let p3 = document.getElementById('p3')
let but5 = document.getElementById('but5')
let rigth = document.getElementById('a1')
but5.addEventListener('click',function(){
    if(rigth.checked){
        p4.textContent = 'your answer is rigth'
    }else{
        p4.textContent = 'your answer is wrong'
    }
})

