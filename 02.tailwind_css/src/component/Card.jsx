import React from 'react'


function Card({laptopname ='laptop' , cart='buy'  }) {
  console.log(laptopname )
  console.log(cart )
  return (
    <>
   
  <div className="w-[300px] rounded-md border flex  ">
  <img
    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="Laptop"
    className="h-[200px] w-full rounded-md object-cover"
  />
  <div className="p-4">
    <h1 className="text-lg font-semibold">{laptopname}</h1>
    <p className="mt-3 text-sm text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p><div className=""></div>
    <button
      type="button"
      className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
    {cart}  {/* {cart || sell} we can give default value like that  but for readiabelity  it not good so we give value at fucntion parameter  */}
    </button>
  </div>
  </div>

  </>
  
  )
}

export default Card