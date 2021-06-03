import React from 'react';
import './Nav.css';
import Divider from '@material-ui/core/Divider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MyContext } from '../../store/Store';




export default function Nav() {
  const {state, logoutUser} = React.useContext(MyContext)
  return (
    
    <div className="Nav">
     {!state.isLoggedIn && <>  <Link to="/login/faculty" style={{textDecoration: "none", color : "white"}}>
          <div className='navLink'> <div className='navLinkText'>Employee Login</div> </div>
          </Link>
          <Divider orientation="vertical" flexItem style={{background : 'white', width : '1px', transform:'scaleX(0.5)'}}/>
          <Link to="/login/hod" style={{textDecoration: "none", color : "white"}}>
         <div className='navLink'><div className='navLinkText'>HOD Login  </div></div>
         </Link>
          <Divider orientation="vertical" flexItem style={{background : 'white', width : '1px', transform:'scaleX(0.5)'}}/>
         <div className='navLink'><div className='navLinkText'>  
         <Link to="/login/director" style={{textDecoration: "none", color : "white"}}>Director Login </Link></div>
         </div></>}
         {state.isLoggedIn && <>
          <Divider orientation="vertical" flexItem style={{background : 'white', width : '1px', transform:'scaleX(0.5)'}}/>
           <div className='navLink'><div className='navLinkText'>  
           <Link to="/logout" style={{textDecoration: "none", color : "white"}} onClick={()=> {
            logoutUser()
             localStorage.removeItem('token')
             window.location.reload()
           }}>Logout</Link></div>
           </div>
         </>}
        <Divider orientation="vertical" flexItem style={{background : 'white', width : '1px', transform:'scaleX(0.5)'}}/>
       <Link to="/erod" style={{textDecoration: "none", color :"white"}}>
       <div className='navLink'> <div className='navLinkText'>Evalutive Report Fill</div> </div>
         </Link>

     
      
    </div>
    
  );
}

