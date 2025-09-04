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
let filteredusers = Parseuser.filter(values=> values.active == 'active')
let sorteduser = filteredusers.sort((a,b)=> a.rank - b.rank)
let consolelog = sorteduser.forEach(value => {
    console.log(`Operative ${value.name} (Rank ${value.rank}) - ${value.active}`);
    
});