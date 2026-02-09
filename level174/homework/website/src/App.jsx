import profile from './assets/images/avatar-jessica.jpeg'
import List from './components/list'
function App() {
  return (
    <>
      <div className='w-screen h-screen bg-[hsl(0,0%,8%)] flex justify-center items-center'>
        <div className='w-90 h-150 bg-[hsl(0,0%,12%)] rounded-[10px] flex flex-col items-center pt-5'>
          
            <img src={profile} alt="" className='rounded-full w-30 h-30'/>
            <p className='font-bold text-white text-[25px]'>Jessica Randall</p>
            <p className='font-bold text-[hsl(75,94%,57%)] text-[15px]'>London, United Kingdom</p>
            <p className='text-white text-[13px] mt-5'>"Font-end developer and avid reander."</p>
          <List txt='Github'/>
          <List txt='Fontend Mentor'/>
          <List txt='LinkedIn'/>
          <List txt='Twitter'/>
          <List txt='Instagram'/>
        </div>
      </div>
    </>
  )
}

export default App
