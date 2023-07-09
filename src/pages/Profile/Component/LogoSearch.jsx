import React from 'react'
import Logo from '../../../img/logo.png'
import './LogoSearch.css'
import{UilSearch} from'@iconscout/react-unicons'
function LogoSearch() {
  return (
    <div className='logosearch'>
        <img src={Logo} alt='' />
        <div className='search'>
            <input placeholder=' Eplore'></input>
            <div className='s-icon'>
                <UilSearch />
            </div>
        </div>
    </div>
  )
}

export default LogoSearch