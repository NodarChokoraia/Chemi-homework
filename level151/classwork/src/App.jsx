import './App.css'
import Contacts from './assets/pages/contacts'
import About from './assets/pages/about'
export default function App() {
  let pages = window.location.pathname
  
    switch(pages){
      case '/':
        return <>home</>
      case '/about':
        return <About/>
      case '/contacts':
        return <Contacts/>
    }
    
  

  
}

