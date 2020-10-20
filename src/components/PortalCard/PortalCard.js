import React from 'react';
import './PortalCard.css';
import StudentLogo from './student.png';
import FacultyLogo from './faculty.png';
import CollegeLogo from './college.png';
import FtsLogo from './fts.png';
import PaySlipLogo from './pay.png';
import {GreenButton} from '../Button/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
     
    },
  },
}));

export default function PortalCard(props) {
   const classes = useStyles();
    const [DrawerOpenStudent,setDrawerOpenStudent] = React.useState(false);
     const [DrawerOpenFaculty,setDrawerOpenFaculty] = React.useState(false);

   const toggleDrawerStudent = ()=> {
    setDrawerOpenStudent(!DrawerOpenStudent);
   }


   const toggleDrawerFaculty = ()=> {
    setDrawerOpenFaculty(!DrawerOpenFaculty);
   }
  return (
   
    <div className="PortalCard">
    <Paper elevation={2}>
    <div className='PortalCardDiv'>
     <div className='PortalCardHeading'><Typography variant="h4" component="h3">
Login
</Typography> </div>
 <Divider />

     <div className='PortalCardSectionLogins'> 
     <div className='BtnGroup'>
      <GreenButton startIcon={<img src={StudentLogo}/> } style={{marginRight : '.5em', fontSize : '.85em'}} onClick={toggleDrawerStudent} > Student Login</GreenButton>
        <div className='mobBottomMargin'> </div>
      <GreenButton startIcon={<img className='BtnLogo' src={FacultyLogo}/> } style={{marginRight : '.5em', fontSize : '.85em'}} onClick={toggleDrawerFaculty} > Teacher Login</GreenButton>
     </div>
     <div className='BtnGroup'>
      <GreenButton startIcon={<img className='BtnLogo' src={CollegeLogo}/> } style={{fontSize : '.85em'}}>College Login</GreenButton>
     </div>
     </div>
     <Divider />
     <div className='PortalCardSectionServices'>
       <div className='BtnGroup bottomBtnGroup'>
      <GreenButton startIcon={<img className='BtnLogo' src={FtsLogo}/> } style={{'background' : '#2D9CDB', marginRight : '.5em', fontSize : '.85em'}}> University FTS</GreenButton>
      <div className='mobBottomMargin'> </div>
      <GreenButton startIcon={<img className='BtnLogo' src={PaySlipLogo}/> } style={{'background' : '#2D9CDB', fontSize : '.85em'}}> Health Slip / Pay Slip</GreenButton>
     </div>
    
     </div>
     </div>
  
    </Paper>
        <Drawer anchor={'bottom'} open={DrawerOpenStudent} onClose={toggleDrawerStudent}>
            <div className='StudentDrawer'> 
              <div className='PortalCardHeading'><Typography variant="h5" component="h5">
Select Year
</Typography> </div>
            <div className='StudentDrawerGroupOuter'>
              <div className='DrawerBtnGroup'>
          <div className='DrawerBtn'>  <GreenButton> 2019</GreenButton></div>
            <div className='DrawerBtn'><GreenButton> 2018</GreenButton> </div>
            <div className='DrawerBtn'><GreenButton> 2017</GreenButton> </div>
            </div>
            <div className='DrawerBtnGroup'>
            <div className='DrawerBtn'> <GreenButton> 2016</GreenButton></div>
            <div className='DrawerBtn'> <GreenButton> 2015</GreenButton></div>
            </div>
            </div>
            </div>
          </Drawer>

          <Drawer anchor={'bottom'} open={DrawerOpenFaculty} onClose={toggleDrawerFaculty}>

             <div className='StudentDrawer'>
              <div className='PortalCardHeading'><Typography variant="h5" component="h5">
Select Year
</Typography> </div>
            <div className='StudentDrawerGroupOuter'>
              <div className='DrawerBtnGroup'>
          <div className='DrawerBtn'>  <GreenButton> 2019</GreenButton></div>
            <div className='DrawerBtn'><GreenButton> 2018</GreenButton> </div>
            <div className='DrawerBtn'><GreenButton> 2017</GreenButton> </div>
            </div>
            <div className='DrawerBtnGroup'>
            <div className='DrawerBtn'> <GreenButton> 2016</GreenButton></div>
            <div className='DrawerBtn'> <GreenButton> 2015</GreenButton></div>
            </div>
            </div>
              </div>
          </Drawer>
    </div>
    
  );
}
