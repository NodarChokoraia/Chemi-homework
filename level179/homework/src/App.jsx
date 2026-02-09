import React from 'react'
import { useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0)
  const [listOfNames, setListOfNames] = useState([])
  return (
    <>
    <p>{counter}</p>
      <button onClick={() => setCounter(prev => prev + 1)}>+1</button>
      <button onClick={() => setCounter(prev => prev + 5)}>+5</button>


    <button onClick={() => setListOfNames(prev => [...prev,'john'])}>add john</button>
    {
      listOfNames.map((value,index)=>(
        <p>{index+1+':'+value}</p>
      ))
    }

    </>
  )
}
