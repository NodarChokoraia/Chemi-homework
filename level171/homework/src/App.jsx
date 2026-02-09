import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='w-5 h-5 hover:bg-blue-500 active:bg-red-700 ' ></div>
      <div className='w-5 h-5 hover:bg-red-500 rounded-full active:bg-red-700 rounded-1/2'></div>
      <div className='w-5 h-5 hover:bg-yellow-500 h-10 w-10 active:bg-red-700 rounded-1/2 w-1 h-1'></div>
      <input type="text" className='focus:outline-[none] w-5 h-5 bg-red-500'/>
      <input type="text" className='focus:bg-red-500'/>
      <input type="text" className='focus:w-5 h-5'/>
      <input type="checkbox" name="" id="" className='has-checked:bg-blue-700 '/>
      <input type="checkbox" name="" id="" className='has-checked:rounded-full'/>
      <input type="checkbox" name="" id="" className='has-checked: w-10 h-10 '/>
    </>
  )
}
//dges naswavli sakitxebis daxmarebit chvens shegvidzlia ragaci moqmedebis shemdeg mag:hover:active or focus movaxdinot elementze cvlileba
export default App
