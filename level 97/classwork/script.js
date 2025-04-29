// innerhtml- this is dom te can change textcontent of elements but it can also read hmtl code in text content like this if we do innerhtml='<b>hello world</b>' its will not output like this <b>hello world</b> it will outputlike this hello world but with bolder style

//textcontent- this i dom it textcontent of elements but it cant read hmtl come like inner html if we put textcontent ='<b>hello world</b>' it will not output like this hello world but with bolder style it will out put like this <b>hello world</b>

let p1 = document.getElementById('p1');
let h1 = document.getElementsByClassName('h1');
let btn = document.getElementsByTagName('button');

p1.innerHTML = '<b>hello world one</b>';
h1[0].innerText = 'hello world three';

btn[0].style.backgroundColor = 'red';

console.log(btn);
