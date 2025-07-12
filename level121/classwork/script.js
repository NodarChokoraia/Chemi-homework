class Dog {
    constructor(name){
        this.name=name;
    }
    bark(){
        return `${this.name} barks`
    }
}



let mura = new Dog('mura')

console.log(mura.bark());
