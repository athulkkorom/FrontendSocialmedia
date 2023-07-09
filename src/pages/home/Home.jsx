import React, { useEffect } from 'react'
import'./Home.css'
import Profileside from '../../component/profileside/Profileside'
import PostSide from '../../component/PostSide/PostSide'
import RightSide from '../../component/RightSide/RightSide'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token){
      navigate('/login')
    }
  })
  return (
    <div className='Home'>
        <Profileside />
        <PostSide />
        <RightSide />


    </div>
  )
}

export default Home