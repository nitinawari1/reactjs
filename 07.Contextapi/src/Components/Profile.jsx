import React, { useContext, useState } from 'react'
import Usercontext from '../context/Usercontext'


function Profile() {

    const { User } = useContext(Usercontext)

     if (!User) return <div>Please login !</div>     
    return <div>Welcome {User.username}</div> 
  
}

export default Profile