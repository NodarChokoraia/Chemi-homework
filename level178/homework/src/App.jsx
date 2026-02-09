import React from 'react'
import { useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0)
  const [boolian, setBoolian] = useState(false)
  const [password, setPassword] = useState('')
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(prev => prev + 1)}>+</button>
      <button onClick={() => setCounter(0)}>reset</button>
      <button onClick={() => setCounter(prev => prev - 1)}>-</button>


      <button onClick={() => setBoolian(prev => !prev)}>{boolian}</button>


      <input type="password" value={password} onInput={e => setPassword(e.target.value)}/>

<br />
      <input type="text" value={inputValue} onInput={e => setInputValue(e.target.value)}/>
      <button onClick={() => setList(prev => [inputValue,...prev])}>submit</button>
      {
        list.map(value => (
          <p>{value}</p>
        ))
      }
    </>
  )

}
