export default function App() {
  let arry1 = [1,2,3,4]
  arry1.map(val => val)
  arry1.map(val => val != 2)
  arry1.map(val => val == 2)
  arry1.map(val => val+=val)
  arry1.map(val => !val)
  let h1 = React.createElement(
    'h1',
    null,
    'h1'
  )
  let h2 = React.createElement(
    'h2',
    key,
    'h2'
  )
  let h3 = React.createElement(
    'h3',
    null,
    'h3'
  )
  let h4 = React.createElement(
    'h4',
    classname,
    'h4'
  )
  let h5 = React.createElement(
    'h5',
    null,
    'h5'
  )
  return (
    <>
      <ul>
        <li key={'li_1'}></li>
        <li key={'li_2'}></li>
        <li key={'li_3'}></li>
        <li key={'li_4'}></li>
        <li key={'li_5'}></li>
        
      </ul>
    </>
  )
}

