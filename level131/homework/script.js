//სინქრონული - ეს კოდს კითხულოდს მაღლიდან დაბლა თანმიმდევრობით და აქვს მისი ძლიერი მხარე და სუსტი მხარეც 
//ასინქრონული - ეს კოდს კოდს კითხულობს უნიკალურად მთლიან კოდს ერთად კიტხულობდს არა არა ცალცალკე ეს არის კარგი სწარი კითხვისთვის და ძალიან გამოსადეგარია ეს არის javascript-ის უნიკალური მხარე



// 1
console.log(1);
console.log(2);
console.log(3);
let interval1 = setTimeout(()=> console.log(5+5),3000);


console.log('--------------------------------------');

// 2
console.log(1);
console.log(2);
console.log(3);
console.log('--------------------------------------');
// 3
console.log(1);
console.log(2);
console.log(3);

let checknumber = 0;
for(let i = 0;i!=10;i++){
    checknumber = i
    if(i==9){
        console.log(checknumber);
        
    }
}