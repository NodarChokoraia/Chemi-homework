let fetch1 = async () => {
    let api = fetch('https://jsonplaceholder.typicode.com/users')
    let api_data = api.then(val => val.json())
    console.log(await api_data);
}
fetch1()


let fetch2 = async () => {
    let api = fetch('https://jsonplaceholder.typicode.com/posts')
    let api_data = api.then(val => val.json())
    console.log(await api_data);
}
fetch2()


let fetch3 = async () => {
    let country = 'georgia'
    let api = fetch(`https://restcountries.com/v3.1/name/${country}`)
    let api_data = api.then(val => val.json())
    console.log(await api_data);
}
fetch3()