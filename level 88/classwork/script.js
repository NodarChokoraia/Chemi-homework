let academy = {
    name:'GOA',
    courses:'fullstact developer',
    sociallink:'goa.com',
    reviews:{
        nodari:'10/10',
        gio:'10/10',
        daviti:10/10
    }


}

let nodari ={
    name1:'nodari',
    status:'perrent',
    review:'10/10'

}

let gio = {
    name2:'gio',
    status:'perrent',
    review:'10/10'
}
let daviti = {
    name3:'daviti',
    satus:'child',
    review:'10/10'
}
console.log(academy);

console.log(Object.keys(academy));

console.log(Object.values(academy));

console.log(Object.hasOwn(academy,'nodiko'));
console.log(Object.assign(academy,nodari,gio,daviti));
console.log(Object.freeze(academy));
console.log(Object.isFrozen(academy));

