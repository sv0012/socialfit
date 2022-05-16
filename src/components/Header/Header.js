import React, { useState } from 'react';
import './header.css';
import { BsSearch } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from 'axios';

const Header = ({loading,setLoading,setVideos}) => {

    const handleChange = async(e) => {
      setLoading(true);
      try{
        const {data:{results} } = await axios.get(' https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos',{
          params:{
            q: e.target.value,
            numResults:20,
          }
        })
        setVideos(results);
        setLoading(false);
      } catch{
        setVideos([]);
        setLoading(false);
      }
       
 
     
    }


  return (
    <div className='header'>
        <div className="col_1">
           <img className='logo' src="/images/logo.webp" alt="" />
        </div>
        <div className="col_2">
            <BsSearch  className='search_icon'/>
            <input onChange={handleChange} className='search' type="text"  />
            {loading && <AiOutlineLoading3Quarters className='loading_icon' /> }

        </div>
        <div className="col_1">
            <img className='profile_picture' src="/images/steve.jpg" alt="" />
        </div>        
    </div>
  )
}

export default Header