let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,[9,10]];
let arr3 = [11,12];

let [a,b,c,d,e] = arr1;
console.log(a,b,c,d,e);

let [f,j,h,[i,o]] = arr2;
console.log(f,j,h,i,o);

let [one,two,three = 20] = arr3;
console.log(one,two,three);


let person1 ={
    name:'nodiko',
    lastname:'chokoraia'
}

let car ={
    name1:'BMW',
    model:{
        modelname:'BMW M4',
        Production:2014
    }
}


let person2 ={
    name2:'davit'

}


let {name,lastname} = person1;
console.log(name,lastname);


let {name1,model:{modelname,Production}} = car;
console.log(name1,modelname,Production);

let {name2,lastname1='janezashvili'} = person2;
console.log(name2,lastname1);








