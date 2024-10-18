import React, { useState , useEffect  , } from 'react'
import { useLoaderData } from 'react-router-dom'
 
function Github() {
  const data = useLoaderData()

  //not ooptimise way to get data on page
  //  const [data , setdata] = useState([])
  //   useEffect(()=>{
  //       fetch('https://api.github.com/users/nitinawari')
  //       .then((res)=>res.json())
  //       .then((data)=>{
  //           setdata(data)
  //       }) 
  //   },[])
  return (
    
    <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl' >Github followers : {data.followers}
        <img src={data.avatar_url} alt="img" />
        </div>
    </>
  )
}

export default Github

export  const githubinfo =  async () =>{
 let responce = await fetch('https://api.github.com/users/nitinawari')
 return responce.json()
}