import {Banana,Egg,Bread,Pineapple} from './items'
function App() {
  return (
    <>
      <Banana>
        <button onClick={alert(props.children +' has ben added to cart')}>banana</button>
      </Banana>
      <Egg>
        <button onClick={alert(props.children +' has ben added to cart')}>egg</button>
      </Egg>
      <Bread>
      <button onClick={alert(props.children +' has ben added to cart')}>bread</button>
      </Bread>
      <Pineapple>
        <button onClick={alert(props.children +' has ben added to cart')}>pineapple</button>
      </Pineapple>
    
    </>
  )
}

export default App
