//useState hook
//  -this hook use for propogate the change on frontend


import { useState } from 'react'
import './App.css'

function App() {
  
  //whenever new value come first react change all places in middile of code
  let [counter , updatecounter] = useState(0)
  

  const valueupdate = () =>{
    let highvalue = 10 ; 
    if (counter < highvalue ) {
     counter = counter + 1 // this will add value but not proprgate change in the fronted andiin usestate


      // updatecounter( counter + 1)  // this will propogate change in fronted and in usestate
      // updatecounter( counter + 1)  // if we did multiple time add like this result will be same because  useState send atch of update at a time  
      // updatecounter( counter + 1)
      updatecounter(prevcounter => prevcounter + 1 )// add to previous value and new value 
      // updatecounter(prevcounter => prevcounter + 1 ) // this will not send as batch
      console.log('value updated', counter )// here value come from setcounter from queue
      
    } else {
     document.getElementById('highlimit').innerText ="limit reached"
      
    }

  }

  function removevalue (){
    let lowvalue = 0 ;
    if (counter > lowvalue ) {
      counter = counter - 1
      updatecounter( counter - 1)
      // console.log('value updated', counter )
    } else {
     document.getElementById('lowlimit').innerText ="limit reached you can't remove "
      
    }
  }
  return (
    <>
    <h1>Welcome </h1>
      <h2>counter : {counter} </h2>
    <button onClick={valueupdate}>add value {counter} </button>
    <p id='highlimit'>you can add value</p>
    <br />
    <button onClick={removevalue}>remove value {counter}  </button>
    <p id='lowlimit'>you can remove the value</p>
    {/* <button onClick={valueupdate}>{counter}</button> */}
    </> 
  ) 
}

export default App
  