let user = `[
    {
        "id": '1',
        "name": "Alice",
        "rank": "Captain",
        "active": false,
        "email": "alice@example.com",
        "verified": true,
        "score": 95,
        "passed": true,
        "value": "X1",
        "age": 25,
        "title": "Task A",
        "priority": 3,
        "item": "Apple",
        "category": "Fruit",
        "status": "pending"
    },
    {
        "id": '2',
        "name": "Bob",
        "rank": "Lieutenant",
        "active": true,
        "email": "bob@example.com",
        "verified": false,
        "score": 60,
        "passed": false,
        "value": "X2",
        "age": 30,
        "title": "Task B",
        "priority": 1,
        "item": "Carrot",
        "category": "Vegetable",
        "status": "complete"
    },
    {
        "id": '3',
        "name": "Charlie",
        "rank": "Sergeant",
        "active": false,
        "email": "charlie@example.com",
        "verified": true,
        "score": 85,
        "passed": true,
        "value": "X3",
        "age": 22,
        "title": "Task C",
        "priority": 2,
        "item": "Banana",
        "category": "Fruit",
        "status": "pending"
    },
    {
        "id": '4',
        "name": "Diana",
        "rank": "Major",
        "active": true,
        "email": "diana@example.com",
        "verified": true,
        "score": 70,
        "passed": false,
        "value": "X4",
        "age": 28,
        "title": "Task D",
        "priority": 4,
        "item": "Potato",
        "category": "Vegetable",
        "status": "pending"
    }
]`


let user9 = `
[
    {
        "id": '3',
        "name": "Charlie",
        "rank": "Sergeant",
        "active": false,
        "email": "charlie@example.com",
        "verified": true,
        "score": 85,
        "passed": true,
        "value": "X3",
        "age": 22,
        "title": "Task C",
        "priority": 2,
        "item": "Banana",
        "category": "Fruit",
        "status": "pending"
    },
    {
        "id": '5',
        "name": "Eve",
        "rank": "Colonel",
        "active": true,
        "email": "eve@example.com",
        "verified": false,
        "score": 90,
        "passed": true,
        "value": "X5",
        "age": 35,
        "title": "Task E",
        "priority": 5,
        "item": "Orange",
        "category": "Fruit",
        "status": "pending"
    }
]
`

//1
let users = `
    [
        {
            "name":"sara",
            "rank":1,
            "active":"active"  
        },
        {
            "name":"natisha",
            "rank":3,
            "active":"notactive"  
        },
        {
            "name":"lila",
            "rank":4,
            "active":"active"  
        },
        {
            "name":"nina",
            "rank":2,
            "active":"notactive"  
        },
    ]
`;

let Parseuser = Json.Parse(users)
let filteredusers = Parseuser.filter(values=> values.active == 'unactive')
let sorteduser = filteredusers.sort((a,b)=> a.rank - b.rank)
let consolelog = sorteduser.forEach(value => {
    console.log(`Operative ${value.name} (Rank ${value.rank}) - ${value.active}`);
    
});

//2

let user1 = `
    [
        {
            "name":"sara",
            "email":'sara@gmail.com',
            "verify":"verifyed"  
        },
        {
            "name":"natisha",
            "email":'natisha@gmail.com',
            "verify":"notverifyed"  
        },
        {
            "name":"lila",
            "email":'lila@gmail.com',
            "verify":"verifyed"  
        },
        {
            "name":"nina",
            "email":'nina@gmail.com',
            "verify":"notverifyed"  
        },

    ]`;

let praseuser1 = JSON.parse(user1)
praseuser1.forEach(values=>{
    console.log(values.name);
    
})

//3



let praseuser2 = JSON.parse(user)
console.log(praseuser2.filter(value => value.goal>80 && value.passed == true).length);


//4


let praseuser3 = JSON.parse(user)
let object = {}
praseuser3.forEach(value =>{
    let id1 = value.id
    object[id1] = value.value
    
})

//5

let praseuser4 = JSON.parse(user)
console.log(praseuser4.some(value => value.name == true&&value.age==true&&value.email==true));
//6 
let praseuser5 = JSON.parse(user)
praseuser5.sort((a,b)=> a.priority - b.priority)

//7
let praseuser7 = JSON.parse(user)
let object1 ={
    fruit:[],
    vegetable:[]
}

praseuser7.forEach(val => {
    if(val.category == 'vegetable'){
        object1.vegetable.push(val.item)
    }else if(val.category != 'vegetable'){
        object1.fruit.push(val.item)
    }
})

//8
let users1 = [
  { name: "Alice", status: "active" },
  { name: "Bob", status: "inactive" },
  { name: "Charlie", status: "active" },
  { name: "Diana", status: "inactive" }
];


let jsonusers1 = JSON.stringify(users1);
//9

let arry1 = JSON.parse(user)
let arry2 = JSON.parse(user9)

arry1.concat(arry2)
//10


let praseuser10 = JSON.parse(user)

for(let i of praseuser10){
    i.status = "complete"
}

