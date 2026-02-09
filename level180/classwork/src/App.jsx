import { useState } from "react"
function App() {
  const [cart,setCart] = useState([])
  const [count,setCount] = useState(0)
  const incrise = () => {
    setCount(prev => prev+1)
    return setCart(prev => [...prev,count])
  }

  const decrise = () => {
    setCount(prev => prev-1)
    return setCart(prev => [...prev,count])
  }
  return (
    <>
    <div>
     {
      cart.map((value,index) => {
        return <li>{value}</li>
      })
     }
    </div>
    <button onClick={incrise}>+</button>
    <button onClick={decrise}>-</button>
    </>




  )

  




}

export default App
