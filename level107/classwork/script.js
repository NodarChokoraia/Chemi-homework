//getElementsByTagName()-this DOM method get elements by there tagname like(p,button,and ......) and stores in arry
//getElementById()-this DOM method get elements by there id 
//getElementsByClassName()-this DOM method get elements by there class and stores in arry
//querySelector()-this DOM method get elements by any name like class,id,tagname nad stores fist element 
//querySelectorAll()-this DOM method get elements by any name like class,id,tagname nad stores ALL the elements




let p1 = document.getElementsByClassName('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementsByTagName('p');
let p4 = document.querySelector('#p4');
let p5 = document.querySelectorAll('p');


p1[0].stye.color = 'red';
p2.stye.color = 'yellow';
p3[0].stye.color = 'green';
p4.stye.color = 'black';
p5[0].stye.color = 'white';
