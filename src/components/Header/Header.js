import React from 'react';
import './Header.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import SearchIcon from '@material-ui/icons/Search';

export default function Header() {
  return (
    
    <div className="Header">
      <div className='headerLeft'>
        <div className='iconDiv'> <TwitterIcon/> </div>
       <div className='iconDiv'>  <YouTubeIcon/> </div>
        <div className='iconDiv'> <FacebookIcon/> </div>
      </div>
     <div className='centerText'> HNBGU</div>
      <div className='headerRight'>
       <div className='iconDiv'>  <Brightness4Icon/> </div>
       <div className='iconDiv translationText'>  अ </div>
        <div className='iconDiv'> <SearchIcon/> </div>
      </div>
    </div>
    
  );
}


