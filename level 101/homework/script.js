let div = document.getElementById('mydiv');
div.classList.add('highlight');
div.classList.remove('highlight');

let but = document.getElementById('toggleButton');
let div1 = document.getElementById('targetDiv');

but.addEventListener('click',function(){
    div1.classList.toggle('active')
    console.log(div1);
    }
);


let p = document.getElementById('checkParagraph');
p.classList.add('important');
console.log(p.classList.contains('important'));

let div2 = document.getElementById('replaceDiv');
div2.classList.replace('red','blue')

let div3 =document.getElementById('itemDiv')
console.log(div3.classList.item(0));

let ul = document.getElementById('ul');
let li = document.createElement('li');
li.textContent = 'item 6';
ul.appendChild(li)
let li1 =document.getElementById('li1');

li1.remove()
li.textContent = 'hello'

let p1 = document.getElementById('p1');
p1.textContent ='New text content!';

let div4  = document.getElementById('div1')

div4.style.backgroundColor = 'red'
div4.style.height = '100px'

let ul1 = document.getElementById('ul1');
let li2 = document.createElement('li')
li2.textContent = 'item 1'
ul1.appendChild(li2)

li2.remove();

let img = document.getElementById('img')
img.src = 'img1.png'