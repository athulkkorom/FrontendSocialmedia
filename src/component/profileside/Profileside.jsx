import React from 'react'
import LogoSearch from './LogoSearch'
import ProfileCard from './ProfileCard'
import './Profileside.css'
import Followerscard from './Followerscard'
function Profileside() {
  return (
    <div className='profileside'>
        <LogoSearch />
        <ProfileCard />
        <Followerscard />
    </div>
  )
}

export default Profileside