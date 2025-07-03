let arr = [1,2,3,4,5,6,7,8]
console.log(arr.every(n => n % 2 == 0));

let str = ['apple','hole','size','some'];
let hasLongString = str.some(len => len.length > 5);
console.log(hasLongString);
let arr1 = [1,2,3,4,5,6,7,8]
arr1.forEach(n => console.log(n*2));
let arry1 = [{name:'nodiko',age:13},{name:'daviti',age:21},{name:'giorgi',age:19}]
let allAdults = arry1.every(age => age.age >=18)
console.log(allAdults);
let arry2 = [{name:'apple',price:21},{name:'pineapple',price:30},{name:'blueberry',price:10}]
let hasAffordableProduct = arry2.some(price => price.price < 20)
console.log(hasAffordableProduct);

let arry3 =[{name:'nodiko',email:'nodiko@example.com'},{name:'giorgi',email:'giorgi@example.com'},{name:'ekuna',email:'ekuna@example.com'}]

let formattedEmails = arry3.map(e => e.email)
formattedEmails.forEach(i => console.log(`<${i}>`));


let arry4 = [1,2,3,4,5,6,7,8,9]
let filteredarry = arry4.filter(e => e % 2 ==0).map(i => i **3)
console.log(filteredarry);


let arry5 = [{name:'apple',price:21},{name:'pineapple',price:30},{name:'blueberry',price:10}]
console.log(arry5.reduce((i,e) => i+e.price,0));


let arry6 = ['nodiko','is','name','my','hello']
console.log(arry6.reduceRight((i,e) => i+' '+e,''));


// let school = [
//     {
//         id:10,
//         name:'nodiko',
//         grades:{History:9,Math:8,fizic:9},
//         attendance:[true, false, true, true, true, false, true],
//         extracurricular:["Soccer", "Chess Club"]
//     }
//     ,{
//         id:14,
//         name:'giorgi',
//         grades:{History:9,Math:5,fizic:6},
//         attendance:[true, true, true, true, false, false, true],
//         extracurricular:["Drama Club", "Science Fair", "Robotics"]
//     },
//     {
//         id:13,
//         name:'solomoni',
//         grades:{History:8,Math:9,fizic:7},
//         attendance:[false, true, false, true, true, true, true],
//         extracurricular:["Art Club", "Environmental Group"]
//     }

// ]

// school.forEach(e =>console.log( `hello ${e.name}`))
// const studentNames = school.map(e => e.name)
// console.log(studentNames);
// const studentAverages = school.map(e => {
//     let grades = Object.values(e.grades)
//     let average = grades.reduce((s,e) => s+e,0)
//     return {
//         name:e.name,
//         average:Math.round(average/3)
//     }
// })

   


// console.log(studentAverages);

// let highPerformingStudents = studentAverages.filter(e => e.average >= 8,5)
// console.log(highPerformingStudents);
// let strugglingStudents = studentAverages.filter(e => [e.average].some(score => score < 7))
// console.log(strugglingStudents);


// console.log(school.reduce((i,e) =>  i+ e.extracurricular.length,0));

// // let highestaverage =school.reduce((i,e) => {
// //     let History1 =  Math.round(i.History + e.grades.History/3);
    

// //     let Math1 = Math.round(i.Math+ e.grades.Math/3);
    

// //     let fizic1 = Math.round(i.fizic+ e.grades.fizic/3);
    

// //     let allaverages = {
// //         History:History1,
// //         Math:Math1,
// //         fizic:fizic1
// //     };
// //     let index = Object.values(allaverages).indexOf(Math.max(...Object.values(allaverages)))
// //     let sun = Object.keys(allaverages)
// //     //return  [Object.values(allaverages).indexOf(Math.max(...Object.values(allaverages)))]
// //     return sun[index]
    
// //     // if(Object.values(allaverages)[1]<Object.values(allaverages)[0]&& Object.values(allaverages)[0] >Object.values(allaverages)[2]){
// //     //     return Object.keys(allaverages)[0]
// //     // }else if(Object.values(allaverages)[0]<Object.values(allaverages)[1]&& Object.values(allaverages)[1]>Object.values(allaverages)[2]){
// //     //     return Object.keys(allaverages)[1]
// //     // }else if(Object.values(allaverages)[1]<Object.values(allaverages)[2] && Object.values(allaverages)[2]>Object.values(allaverages)[0]){
// //     //     return Object.keys(allaverages)[2]
// //     // }

    

