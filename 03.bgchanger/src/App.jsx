import { useState } from 'react'


function App() {
  let [color, setColor] = useState("olive")

  return (

    <div className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }} //this is way writing inline css in tailwind also we can use variables

    >
      <div className='fixed flex flex-wrap justify-center bottom-12  align-center insert-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
          <button onClick={() =>   setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shhadow-lg ' style={{ backgroundColor: 'orange' } }>orange</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shhadow-lg ' style={{ backgroundColor: 'blue' }}>blue</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shhadow-lg ' style={{ backgroundColor: 'green' }}>green</button>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shhadow-lg ' style={{ backgroundColor: 'red' }}>red</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shhadow-lg ' style={{ backgroundColor: 'black' }}>black</button>
          <button onClick={() => setColor("grey")} className='outline-none px-4 py-1 rounded-full text-white shhadow-lg ' style={{ backgroundColor: 'grey' }}>grey</button>
        </div>
      </div>
    </div>



  )
}

export default App
