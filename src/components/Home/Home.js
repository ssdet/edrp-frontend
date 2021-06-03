import React from 'react';
import './Home.css';
import NoticeList from '../Notices/NoticeList';
import QuickLinkList from '../QuickLinks/QuickLinkList';
import PortalCard from '../PortalCard/PortalCard';
import Admissions from '../Admissions/Admissions';
import { MyContext } from '../../store/Store';
import { Redirect } from 'react-router';



function Home() {

  const {state} = React.useContext(MyContext)

  if(state.isLoggedIn) {
    return (
      <div className="Home">
          
            <div className='AdmissionsMain'>
            <Admissions/> 
            </div>
          
            <div className='row2' >
            <div className='PortalCardMain'>
            <PortalCard/>
            </div>
   
           <div className='QuickLinkListMain'>
            <QuickLinkList/>
            </div>
     
           <div className='NoticeListMain'>
            <NoticeList/>
            </div>
            </div>
      </div>
    );
  }
  else {
    return(<Redirect to="/login"/>)
  }
}

export default Home;
