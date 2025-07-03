//not updated
let obj = {
    name:'nodiko',
    lastname:'chokoraia',
    fullname:function(){
        return `${this.name} ${this.lastname}`
    }
}


//updated
let name = 'nodiko'
let lastname = 'chokoraia'
let obj2 = {
    name,lastname,fullname(){
        return `${this.name} ${this.lastname}`
    }
}

//ok now ill tell you guys what have ben upgraded and that is better rigth now now the method in object is shorter and that helps us bc if code is shorter its esyer to write now we dont need to set values to keys its already seted and that is easy to write now ill show you guys one excample to each updated things

//excample 1
let name1 = 'daviti'
let lastname1 = 'janezashvili'
let person = {
    name1,lastname1

}

//excample 2

let person1 = {
    fullname(){
        return `hello person`
    }

}

//excample 3
let name3 = 'guram'
let lastname3 = 'vaxtangishvili'
let person2 = {
    name3,lastname3,fullname(){
        return `${this.name3} ${this.lastname3}`
    }
}


//excample 4
let name4 = 'name'
let lastname4 = 'lastname'
let person3 = {
    [name4]:'nodiko',
    [lastname4]:'chokoraia'

}
