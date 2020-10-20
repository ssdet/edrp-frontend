import React from 'react';
import './Header.css';
import logo from './logo.png';
import Divider from '@material-ui/core/Divider';

export default function HeaderBranding() {
  return (
    
    <div className="HeaderBranding">

    <div className='headerLogoDiv'>  <img src={logo} className='logo' /></div>
    <div className='headerTitleDiv'>
    <div className='headerTitle'>
    
    Hemavati Nandan Bahuguna Garhwal University
    
    </div>
    <div className='headerSubtitle'>
    <div className='solid leftLine'></div> A Central University <div className='solid rightLine'> </div>
    </div>
     </div>
    </div>
    
  );
}

