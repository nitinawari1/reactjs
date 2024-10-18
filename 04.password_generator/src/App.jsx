import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  
  let [length , setlength] = useState(8)
  let [numberAllowed , setnumberAllowed] = useState(false)
  let [charAllowed , setcharAllowed] = useState(false)
  let [password , setpassword] = useState ()

 let passref = useRef(null)



  const passwordgenerator =useCallback(()=>{
       let pass = ''
       let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
       if (numberAllowed) str += '1234567890';
       if (charAllowed) str+='!@#$%^&*()_+-=,.<>?/[]{|}';
       
     
       for (let i = 1; i <=length; i++) {
        let charnum = Math.floor( Math.random() * str.length + 1);
        pass += str.charAt(charnum)

       }
       setpassword(pass)
  } ,[length , numberAllowed , charAllowed , setpassword ])
  
  const copytoclipboared = () =>{
    passref.current?.select(); 
    passref.current?.setSelectionRange(0 ,6); 
    window.navigator.clipboard.writeText(password)  
  }

  useEffect(()=>{
    passwordgenerator()
  },[length , numberAllowed , charAllowed , setpassword])

  return (
  
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center' >password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
    <input 
    type="text"
    value={password}
    className='outline-none w-full py-1 px-3' 
    placeholder='password'
    ref={passref}
    readOnly 
      />
      <button  onClick={copytoclipboared}>copy</button>
        </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          className='cursor-pointer'  
          onChange={(e) =>{setlength(e.target.value)}}
          value={length}
                    />
                    <label >length : {length}</label>
          
          <input type="checkbox"
           name="number"
            id="numberinput" 
            defaultChecked ={numberAllowed}
           onChange={()=>{setnumberAllowed((prev)=> !prev)
          }}
          />
          <label htmlFor='numberinput' >number</label>
          <input type="checkbox"
           name="char"
            id="charinput" 
            defaultChecked ={charAllowed}
           onChange={()=>{setcharAllowed((prev)=>!prev)
          }}
          />
        <label htmlFor="charinput">char</label>
        <button onClick={()=>{passwordgenerator()}}>change</button>
        </div>
      </div>

      </div>

    </>
  )
}

export default App
  