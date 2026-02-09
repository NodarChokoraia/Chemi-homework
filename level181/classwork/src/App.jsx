import { useEffect, useState} from "react"
function App() {
  // const [counter,setCounter] = useState(0)
  const [data, setData] = useState('')
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(Api => Api.json())
    .then(apiData => setData(apiData))
    
  },[])



  return(
    <>
      {/* <p>{counter}</p>
      <button onClick={() => setCounter(prev => prev + 1)}>+</button>
      <button onClick={() => setCounter(0)}>reset</button>
      <button onClick={() => setCounter(prev => prev - 1)}>-</button> */}

        <h1>Shop</h1>
        

        
        {
          
          data.map((e) => (
          <div key={`p-${e.id}`} className='border-2 border-red-500 w-100'>
            <img src={e.image} />
            <p>{e.title}</p>
            <p key={`price-${e.id}`}>{e.price}</p>
          </div>
        ))
        }


    </>
  )
}

export default App
