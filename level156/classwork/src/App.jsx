function App() {
  function click(){
    alert('clicked!')
  }
  let bul = true
  if(bul){
    console.log('hello world');
    
  }
  return (
    <>
      {/* <button>1</button>
      <button>2</button>
      <button>3</button>
      <img src="" alt="img1" />
      <img src="" alt="img2" />
      <img src="" alt="img3" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore animi mollitia et labore, ad ipsum, tempora molestiae voluptatum aliquam minus aperiam veniam odio, ipsam ea! Molestiae aliquid illum tempore.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis dolorum sequi, non aperiam et molestias animi ducimus dolores expedita! Quas a repellat dicta, eligendi neque deleniti enim distinctio fugit consequuntur.</p>
      <a href="google.com"></a> */}

      <button onClick={click}>click me</button>
      
      
    <li>{bul ?'hello':'error'}</li>
    <li>{bul && 'welcome'}</li>
    
    </>
  )
}

export default App
