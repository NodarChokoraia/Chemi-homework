function Person(name,age,profession){
    this.name=name;
    this.age=age;
    this.profession=profession;
    this.logpage = function(){
        return `Hi, I'm ${this.name}, a ${this.age}-year-old ${this.profession} .`
    }
}

let logpage1 = new Person('nodiko',13,'programer');
console.log(logpage1.logpage());
//--------------------------------------------------------------------------------------------------------------------------
function Book(title, author,year){
    this.title=title;
    this,author=author;
    this.year=year;
    this.info=function(){
         return `${title} by ${author}, published in ${year}`
    }
}


let book1 = new Book('biblia','unknowed','unknowed')
let book2 = new Book('vefxistyaosani','shota rustaveli','XII')
let book3 = new Book('mysummer','idk','idk')

console.log(book1.info());

console.log(book2.info());

console.log(book3.info());


//--------------------------------------------------------------------------------------------------------------------------



function User(username, email, password,changePassword){
    this.username=username;
    this.email=email;
    this.password=password;
    this.changePassword=changePassword;
}


let changePassword = new User(prompt('username'),prompt('email'),'leomessy',prompt('changepassword'))
if(changePassword.password==changePassword.changePassword){
    alert('password cant be same try again')
    changePassword = new User(prompt('username'),prompt('email'),'leomessy',prompt('changepassword'))
}else if(changePassword.password!=changePassword.changePassword){
    alert('password changed your password will be saved')
    localStorage.setItem('password',changePassword.changePassword)

}

console.log(localStorage.getItem('password'));


