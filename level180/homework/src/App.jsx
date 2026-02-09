import React from 'react'
import { useState } from 'react'

export default function App() {
  let [data, setData] = useState([])
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  return (
    <>
      <input type="email" value={email} onInput={e => setEmail(e.target.value)}/>
      <input type="password" value={password} onInput={e => setPassword(e.target.value)}/>
      <button
        onClick={()=> {
          if(email == '' || password == ''){
            alert('pleace fill the blank spaces')
          }
          setData(prev => 
          [
            {
              userEmail:email,
              userPassword:password
            },...prev
        
          ])
          setEmail('')
          setPassword('')

        }}
      >submit</button>
    </>
  )
}
