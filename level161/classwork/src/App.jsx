import Props1 from './props1'
import Props2 from './props2'
function App() {
  return (
    <>
      <Props1 name = 'nodiko' age={14} arry={[1,2,3]} obj={{name:'nodiko'}}/>
      <Props2 name = 'daviti' age={14} arry={[1,2,3]} obj={{name:'nodiko'}}/>
    </>
  )
}

export default App
