let but1 = document.getElementById('but1');
let input2 = document.getElementById('input2');
let input1 = document.getElementById('input1');
let menu = document.getElementById('menu');
let navdiv = document.getElementById('navdiv');
let menu1 = document.getElementById('menu1');



but1.onclick = function(){
    let input2value;
    let input1value;
    input2value = input2.value;
    input1value = input1.value;

    if(input1value==''||input2value==''){
        window.alert('please Enter your name, last-name and email');
    }
    
    else{
        window.alert(`Ok ${input1value} ${input2value} we will text you in 7 day `);
}
};




menu.onclick = function(){
    navdiv.style.display ='flex';
    menu.style.display = 'none';
     menu1.style.display = 'block';

}

menu1.onclick = function(){
    navdiv.style.display ='none';
    menu.style.display = 'block';
    menu1.style.display = 'none';

}
        

        
