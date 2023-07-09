import React, { useState } from 'react';
import Logo from '../../img/logo.png';
import './LogoSearch.css';
import { UilSearch } from '@iconscout/react-unicons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LogoSearch() {
  const [searchName, setSearchName] = useState('');
  const navigate = useNavigate( )
  const onSubmit = () => {
    const userName = searchName
   const fetchData = async ()=>{
    try {
      const response = await axios.get(`http://localhost:5000/search/${userName}`, {
      });
      const searchData = response.data;
      localStorage.setItem('search',JSON.stringify(searchData))
      console.log(searchData);

      navigate('/searchprofile')
    } catch (error) {
      console.log(error);
    }
  }
  fetchData()
  };

  return (
    <div className='logosearch'>
      <img src={Logo} alt='' />
      <div className='search'>
        <input placeholder='Explore' onChange={(e) => setSearchName(e.target.value)} />
        <div className='s-icon'>
          <UilSearch onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
}

export default LogoSearch;
