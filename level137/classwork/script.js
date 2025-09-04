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
let user2 = `
    [
        {
            "name":"sara",
            "goal":'90',
            "verify":"verifyed"  
        },
        {
            "name":"natisha",
            "goal":'70',
            "verify":"notverifyed"  
        },
        {
            "name":"lila",
            "goal":'80',
            "verify":"verifyed"  
        },
        {
            "name":"nina",
            "goal":'60',
            "verify":"notverifyed"  
        },

    ]`;


let praseuser2 = JSON.parse(user2)
praseuser2.forEach(valuse=>{
    if(valuse.goal>=80){
        console.log(valuse);
        
    }
})

//3