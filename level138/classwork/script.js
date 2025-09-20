const apiFetch =async ( ) => {
    const API_ENDPINT = fetch( 'https://jsonplaceholder.typicode.com/todos/1')
    const API_Data = API_ENDPINT.then(response => response.json())
    const response = API_Data
    console.log(await response)
}
apiFetch()


        
const city = "tokyo"
const API_KEY = "5faa8e189a4b974b5f1dd2556054e48f"
const API_ENDPINT_LINK = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`  


const apiFetch2 =async ( ) => {
    const API_ENDPINT = fetch(API_ENDPINT_LINK)
    const response = API_ENDPINT.then(val => val.json())
    console.log(await response)
}
apiFetch2()