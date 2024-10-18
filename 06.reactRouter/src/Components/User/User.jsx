import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <>
    <div className=' text-red-400'>user:{userid}</div>
    {/* her we can get access of userid   */}
    </>
  )
}

export default User