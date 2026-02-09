import React from 'react'
import Greating from './components/greating'
import Messenger from './components/Messenger'
import Age from './components/Age'
import IsOnline from './components/IsOnline'
export default function App() {
  return (
    <>
      <Greating name = {'nodiko'}/>
      <Messenger txt={'hello world'} array ={[1,2,3,4]} obj={{name:'nodiko'}} str={'hello'} numb={14}   />
      <Age age={14}/>
      <IsOnline status={true}/>
    </>
  )
}
