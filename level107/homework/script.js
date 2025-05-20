let tit = document.getElementById('tit');
tit.textContent = "Hello, MasterJaneza!"

let p = document.getElementsByClassName('p1');

for(let i = 0;i<p.length;i++){
    p[i].style.color = 'red'
    p[i].style.fontWeight = 'bold'
}


let li = document.getElementsByName('li');
for(let i = 0;i<li.length;i++){
    let num = li.length
    li[i].style.border = 'solid'
    console.log(num);
}

let p1 = document.querySelector('p')
p1.textContent = "Updated by querySelector()"

let div = document.querySelectorAll('div');
for(let i = 0;i<div.length;i++){
    div.classList.add("highlighted")
}

let div1 = document.createElement('div')
div1.classList.add("dynamic-box");
div1.textContent = "I'm alive!"
let body = document.querySelector('body')
body.appendChild(div1)

let p2 = document.getElementById('p2');
p2.classList.toggle("highlight")



let but = document.getElementById('clearbtn')

but.addEventListener('click',function(){
    for(let i = 0;i<li.length;i++){
        
        li[i].removeChild()
        
    }
})


let p3 = document.getElementById('p3');
p3.classList.replace('offline', 'online');
if(p3.classList.contains('online')){
    p3.textContent = 'online'
}else{
    p3.textContent = 'ofline'
}