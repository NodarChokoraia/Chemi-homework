export default function App() {
  let array = [
    {
      name:'nodiko'
    },
    {
      name:'giorgi'
    },
    {
      name:'daviti'
    },
    {
      name:'sergi'
    },
    {
      name:'nika'
    }
  ]
  return (
    <>
      <ul>
        
          {array.map(item => <li>{item.name}</li>)}
          
        
      </ul>
    </>
  )
}


