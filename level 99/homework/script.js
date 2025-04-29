let body = document.querySelector('body')
let p1 = document.createElement('p');
p1.innerText='hello world';
body.appendChild(p1);

let h1 = document.createElement('h1');
h1.innerText = 'Subheading'
body.appendChild(h1)
h1.innerText = 'Updated Subheading'


let div = document.createElement('div')
div.textContent = 'this is div';
body.appendChild(div)
div.remove();

let ul = document.createElement('ul');

let li1 = document.createElement('li');
li1.textContent = 'item 1';
let li2 = document.createElement('li');
li2.textContent = 'item 2';
let li3 = document.createElement('li');
li3.textContent = 'item 3';
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
body.appendChild(ul)

console.log(ul.firstChild);

let h3 = document.createElement('h1');
h3.textContent = 'inserted hadeing';

body.insertBefore(h3,p1)

let span = document.createElement('span')
let div1 = document.querySelector('#div1')
div1.appendChild(span)
console.log(span.parentElement);
