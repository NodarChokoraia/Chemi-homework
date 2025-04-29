let li1 = document.getElementById('p1')
let li2 = document.getElementById('p2')
let li3 = document.getElementById('p3')

let newitem = document.createElement('li')
newitem.textContent = 'orange'

let div = document.querySelector('div')
div.insertBefore(newitem, li1)
div.removeChild(li1)

console.log(div.firstChild);
console.log(li1.parentElement);

