import { useEffect, useState} from "react"
function App() {
  // const [counter,setCounter] = useState(0)
  const [data, setData] = useState('')
  let api = async () => {
    let url = fetch('https://fakestoreapi.com/products')
    let Api = await url.json()
    setData(Api)
    
  }
    
    
  


  return(
    <>
      {/* <p>{counter}</p>
      <button onClick={() => setCounter(prev => prev + 1)}>+</button>
      <button onClick={() => setCounter(0)}>reset</button>
      <button onClick={() => setCounter(prev => prev - 1)}>-</button> */}

        <h1>Shop</h1>
        <button onClick={() => api}>show shop</button>

        
        {
          data != '' ?
          data.map((e) => (
          <div key={`p-${e.id}`} className='border-2 border-red-500 w-100'>
            <img src={e.image} />
            <p>{e.title}</p>
            <p key={`price-${e.id}`}>{e.price}</p>
          </div>
        ))
        : null
        }


    </>
  )
}

export default App
