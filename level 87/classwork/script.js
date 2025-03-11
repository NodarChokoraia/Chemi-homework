function Name(name,lastname,phonenumber,email,password,confrimpassword){
    this.name=name;
    this.lastname=lastname;
    this.phonenumber=phonenumber;
    this.email=email;
    this.password=password;
    this.confrimpassword=confrimpassword;
    this.info=function(){
        return `my name is ${name} my last name is ${lastname} my phone number is ${phonenumber} my email is ${email} my password is ${password} `
        
    }





}


let first = new Name('nodiko','chokoraia','434234234234','txt@gmail.com','leomessy','leomessy');
let secend = new Name('gio','guramishvili','434234234234','txt@gmail.com','leomessy','leomessy');
let third = new Name('nika','durglishvili','434234234234','txt@gmail.com','leomessy','leomessy');


console.log(first.info());
console.log(secend.info());
console.log(third.info());
