class Dog1 {
    constructor(name){
        this.name = name
    }
}


class Dog {
    bark(){
        return `woof`
    }
}
let dogs = new Dog()
console.log(dogs.bark());
class Dog2 {
    constructor(name){
        this.name = name
    }
    bark(){
        return `this is my dog ${name}`
    }
}
let mydog = new Dog2("Buddy")
console.log(mydog);
console.log(mydog.bark());

class Dog3 {
    constructor(name){
        this.name = name
        return name
    }
    
}
let mydog1 = new Dog2("mura")
console.log(mydog1);

class Car {
    constructor(makes,model,year){
        this.model = model
        this.year = year
    }
    displayInfo(){
        return `This is a ${year} ${model}.`
    }
    displayInfo1(){
        return model
    }
}

let car1 = new Car(2020,'Toyota Camry')
console.log(car1.displayInfo());
class Car1 {
    constructor(makes,model,year){
        this.model = model
        this.year = year
        this.maker = maker
    }
    displayInfo(){
        return model
    }
}

let car2 = new Car1(0,'m4 BMW',2020)
console.log(car1.displayInfo1());
console.log(car2.displayInfo());

class person{
    constructor(name,age =30){
        this.name=name
        this.age = age
    }
}