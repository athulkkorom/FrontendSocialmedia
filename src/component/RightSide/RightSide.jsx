import React, { useEffect } from 'react'
import "./RightSide.css"
import comment from "../../img/comment.png"
import noti from "../../img/noti.png"
import home from "../../img/home.png"
import {UilSetting} from "@iconscout/react-unicons"
import TrendCard from './TrendCard'
import { useNavigate } from 'react-router-dom'

function RightSide() {
 const navigate = useNavigate()
  const logOut = ()=>{
    localStorage.clear()
    navigate('/login')
  }
  return (
    <div className="rightside">
      <span className='logout' onClick={logOut}>Logout</span>
        <div className="navicons">
            <img src={home} alt="" />
            <UilSetting />
            <img src={noti} alt="" />
            <img src={comment} alt="" />
        </div>
    <TrendCard />
    <button className='rightbutton'>Share</button>
    </div>
  )
}

export default RightSide