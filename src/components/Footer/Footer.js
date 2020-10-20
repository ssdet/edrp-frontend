import React from 'react';
import './Footer.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';



export default function Footer() {
  return (
   
    <div className="Footer" style={{'paddingTop' : '1em'}}>
     <Typography variant="h5" component="h3" >
Quick Links
</Typography>
<Divider style={{'background' : 'green', width : '2px'}}/>
    <div className='FooterLinkDiv'>
    <div className='footerLink'>
        <ListItem>
          
          <ListItemText style={{'color' : 'white'}} primary={"Publications/ Journals"} />
        
        </ListItem>

        <ListItem>
          
          <ListItemText style={{'color' : 'white'}} primary={"Learning Management System HNBGU"} />
        
        </ListItem>

        <ListItem>
          
          <ListItemText style={{'color' : 'white'}} primary={"RCC Cell"} />
        
        </ListItem>

       
      
   </div>

    <div className='footerLink'>
        <ListItem>
          
          <ListItemText style={{'color' : 'white'}} primary={"Training & Placement Cell"} />
        
        </ListItem>

        <ListItem>
          
          <ListItemText style={{'color' : 'white'}} primary={"Miscellaneous"} />
        
        </ListItem>

        <ListItem>
          
          <ListItemText style={{'color' : 'white'}} primary={"HNBGU Mail access"} />
        
        </ListItem>
        
       
      
   </div>

   

   </div>
    <Typography variant="h5" component="h3" >
Contact Us
</Typography>
<Divider style={{'background' : 'green', width : '2px'}}/>
<div className='footerAddress'> 
 <div className='UniAddress'>
Hemavati Nandan Bahuguna Garhwal University, Srinagar ( Garhwal)
246174, Dist. Pauri (Garhwal), Uttarakhand, India
</div>

<div className='bottomFooterText'>Developed & Maintained By E-Governance Cell, HNB Garhwal University</div>
</div>
<div className='bottomFooter'>Copyright © 2020 - All Rights Reserved - HNB Garhwal University </div>
    </div>
    
  );
}
