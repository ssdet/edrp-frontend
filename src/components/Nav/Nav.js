import React from 'react';
import './Nav.css';
import Divider from '@material-ui/core/Divider';




export default function Nav() {
  return (
    
    <div className="Nav">
     
       <div className='navLink'> <div className='navLinkText'>Login</div> </div>
        <Divider orientation="vertical" flexItem style={{background : 'white', width : '1px', transform:'scaleX(0.5)'}}/>
       <div className='navLink'><div className='navLinkText'> Services</div></div>
        <Divider orientation="vertical" flexItem style={{background : 'white', width : '1px', transform:'scaleX(0.5)'}}/>
       <div className='navLink'><div className='navLinkText'> Notices</div></div>
        <Divider orientation="vertical" flexItem style={{background : 'white', width : '1px', transform:'scaleX(0.5)'}}/>
        <div className='navLink'> <div className='navLinkText'>Links</div> </div>

     
      
    </div>
    
  );
}

