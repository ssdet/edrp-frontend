import React from 'react';
import './Home.css';
import NoticeList from '../Notices/NoticeList';
import QuickLinkList from '../QuickLinks/QuickLinkList';
import PortalCard from '../PortalCard/PortalCard';
import Admissions from '../Admissions/Admissions';



function Home() {


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

export default Home;
