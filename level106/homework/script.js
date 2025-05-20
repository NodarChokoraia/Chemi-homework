// let inputs = [document.getElementById('name'),document.getElementById('lname'),document.getElementById('email')];
// let inputp = document.getElementById('p');
// let input1 = document.getElementById('p1');
// let btn = document.getElementById('btn');
// let body = document.querySelector('body')
// let child = document.createElement('p')




// function check(){
//     if(inputs[0].value !='' || inputs[1].value !='' ||inputs[2].value !=''){
//         if(inputp.value === input1.value){
//             body.style.backgroundColor = 'green'
//             child.textContent = 'successfullylogin'
//             child.style.color = 'white'
//             body.appendChild(child)

//         }else if(inputp.value != input1.value){
//             body.style.backgroundColor = 'red'
//             child.textContent = 'Warning'
//             child.style.color = 'white'
//             body.appendChild(child)
//         }
//     }else if(inputs[0].value =='' || inputs[1].value =='' ||inputs[2].value ==''){
//         body.style.backgroundColor = 'white'
//         child.textContent = 'enter values'
//         child.style.color = 'black'
//         body.appendChild(child) 
//         console.log('hello');  
//     }
// }

// btn.addEventListener('click',check)



let inner  = document.getElementById('inner');
let outer  = document.getElementById('outer');
let but  = document.getElementById('but');





inner.addEventListener('click',function(){
    console.log("clicked " + this.id);
    
},true)

outer.addEventListener('click',function(){
    console.log("clicked " + this.id);
})

but.addEventListener('click',function(){
    console.log("clicked " + this.id);
},true)

let ul = document.getElementById('ul');

ul.addEventListener('click',function(){
    console.log(event.target.textContent);
    
})