// innerhtml- this is dom te can change textcontent of elements but it can also read hmtl code in text content like this if we do innerhtml='<b>hello world</b>' its will not output like this <b>hello world</b> it will outputlike this hello world but with bolder style

//textcontent- this i dom it textcontent of elements but it cant read hmtl come like inner html if we put textcontent ='<b>hello world</b>' it will not output like this hello world but with bolder style it will out put like this <b>hello world</b>
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');

let p4 = document.getElementsByClassName('p4');
let p5 = document.getElementsByClassName('p5');
let p6 = document.getElementsByClassName('p6');


let p7 = document.getElementsByTagName('p');
let p8 = document.getElementsByTagName('p');
let p9 = document.getElementsByTagName('p');

p1.innerHTML('<b>hello world</b>');
p2.innerText('hello world!');
p3.style.color = 'red';