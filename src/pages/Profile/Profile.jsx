import React, { useEffect } from 'react'
import "./Profile.css"
import Leftside from './Component/Leftside'
import MiddleSide from './Component/MiddleSide'
import Mypost from './Component/Mypost'
import { useNavigate } from 'react-router-dom'
function Profile() {
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token){
      navigate('/login')
    }
  })
  return (
    <div className="Profile">
        <Leftside />
        <MiddleSide />
        <Mypost />

    </div>
  )
}

export default Profile