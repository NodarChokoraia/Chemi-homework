function Cotacts(name,number){
    this.name=name;
    this.number=number;
    this.print = function print(){
        return `${name}:${number}`

    }
}


let contact = new Cotacts('nodiko','45414142134');
console.log(contact.print());
