import { useState } from 'react'
import './App.css'
import Card from './component/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
   let myobj = [1 ,2,3,4,5]  
  //  let obj ={
  //   name:nitin,
  //   class : 2
  //  }

  return (
    <>
    <h1 className='bg-orange-500 text-black p-4 rounded-xl'>tailwind test </h1>

    {/* this is called props we send it to component 
other side it will receive this arguments to the  function parameter  

we can also pass object and arrays
    */}
    <Card laptopname='macbook' cart='sell'  />
    <Card    />
    <Card laptopname='asus' cart='sell' /> 
    
    
   
    </>
  )
} 

export default App
