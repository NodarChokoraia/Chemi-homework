let university = {
    name:'harvard',
    departament:5,
    website:'https://www.harvard.edu/',
    ratings:{
        lisa:'its greath university 10/10',
        james:'its greath university i liked 10/10',
        wiliams:'its best university join us 10/10',

    }
};






console.log(university);
console.log(Object.hasOwn(university,'scholarship' ));

let studentscount = {
    student:12
};

console.log(Object.assign(university,studentscount));

Object.freeze(university);
university.name='nodiko';
console.log(Object.isFrozen(university));
console.log('--------------------------------------------------------------------------------------------------------------------------');
//--------------------------------------------------------------------------------------------------------------------------
let sportsclub = {
    clubname:'barselona',
    sporttype:'footbal',
    foundedyear:1486,
    achievemnt:{
        1:'Copa Generalís.',
        2:'	LaLiga',
        3:'Copa del Rey'
    }
};

console.log(Object.keys(sportsclub));
console.log(Object.values(sportsclub));
console.log(Object.hasOwn(sportsclub,'sponsors'));
let  stadiumCapacity = {
    stadiumCapacity:20
};
console.log(Object.assign(sportsclub,stadiumCapacity));
Object.freeze(sportsclub);

sportsclub.clubname = 'nodiko'
console.log(Object.isFrozen(sportsclub));

console.log('--------------------------------------------------------------------------------------------------------------------------');

//--------------------------------------------------------------------------------------------------------------------------

let hotel = {
    hotelname:'stayAPT Suites Tallahassee-Capitol',
    stars:5,
    location:'950 Desoto Park Dr, Tallahassee, FL 32301, ამერიკის შეერთებული შტატები',
    guestreviews:{
        nika:'this is best hotel 10/10',
        giorgi:'it has my best summer 10/10',
        levani:'it has best equipments 10/10'
    }

};
console.log(Object.keys(hotel));
console.log(Object.values(hotel));
console.log(Object.hasOwn(hotel,'spa'));
let roomscount = {
    roomscount:100
};
console.log(Object.assign(hotel,roomscount));
Object.freeze(hotel);
hotel.hotelname ='nodiko';
console.log(Object.isFrozen(hotel));



console.log('--------------------------------------------------------------------------------------------------------------------------');
//--------------------------------------------------------------------------------------------------------------------------
let cinema = {
    cinemaname:'cavea',
    moviescount:20,
    moviereviews:{
        giorgi:'this has aswome i liked so much 10/10',
        nika:'i liked it was fun 10/10',
        aleqsandre:'its was greath i realy liked ty so much 10/10'
    }
};

console.log(Object.keys(cinema));
console.log(Object.values(cinema));
console.log(Object.hasOwn(cinema,'vipSeats'));
let tiketprice = {
    tiketprice:'20$'
};
console.log(Object.assign(cinema,tiketprice));

Object.freeze(cinema);
cinema.cinemaname = 'nodiko';


console.log(Object.isFrozen(cinema));

