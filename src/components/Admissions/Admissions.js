import React from 'react';
import './Admissions.css';
import {GreenButton} from '../Button/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { MyContext } from '../../store/Store';
import Landing from './Landing';

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

export default function Admissions(props) {
  const {state} = React.useContext(MyContext)
   const classes = useStyles();
  if(state.isLoggedIn) {
    if(state.user && state.user.type === "DEAN") {
      window.location.href = "/schools"
    }
    if(state.user && state.user.type === "DIRECTOR") {
      window.location.href = "/schools"
    }

    if(state.user && state.user.type === "HOD") {
      window.location.href = "/aqar"
    }
    if(state.user && state.user.type === "FACULTY") {
      window.location.href = "/aqar"
    }
  }
  else {
    return <Landing/>
  }
}

{/* <div className="Admissions">
    <Paper elevation={2}>
    <div className='AdmissionsDiv'>
        <div className='AdmissionsTitle'> <Typography variant="h5" component="h3">
IQAC : Internal Quality Assurance Cell
</Typography></div>
<Divider/>
    <div className='AdmissionsDivInner'> 

<div className='PreAdmissionsSection'> 
   <div className='PreAdmissionsTitle'> <Typography variant="h5" component="h5">  
Login
</Typography></div>
<div className='PreAdmissionsInner'>
<div className='AdmissionsSectionUG'> 
<div className='AdmissionsInfo'>
 <div className='PreAddmissionsSubtitle'>
 <Typography variant="caption" display="block">
        IQAC
      </Typography>
 </div>
 <div className='PreAddmissionsTitle'> 
 <Typography variant="h6" component="h5" display="block">
        Director Login
      </Typography>
 </div>
 <div className='PreAddmissionsBody'> 
  <Typography variant="body2" display="block">
        Login As A Director To Access Annual Quality Assurance Report (AQAR) of the IQAC 
      </Typography>
 </div>
 <Divider/>
 <div className='PreAddmissionsBtn'> 
 <Link to="/login/director" style={{textDecoration: "none"}}><GreenButton >Login as Director</GreenButton></Link>
 </div>
 </div>
</div>
<div className='AdmissionsSectionPHD'> 
<div className='AdmissionsInfo'>
 <div className='PreAddmissionsSubtitle'>
 <Typography variant="caption" display="block">
     IQAC
      </Typography>
 </div>
 <div className='PreAddmissionsTitle'> 
 <Typography variant="h6" component="h5" display="block">
       HOD Login
      </Typography>
 </div>
 <div className='PreAddmissionsBody'> 
  <Typography variant="body2" display="block">
         Access All The Information regarding the Annual Quality Assurance Report (AQAR) of your department
      </Typography>
 </div>
 <Divider/>
 <div className='PreAddmissionsBtn'> 
 <Link to="/login/hod" style={{textDecoration: "none"}}><GreenButton >Login as HOD</GreenButton></Link>
 
 </div>
 </div>
</div>
</div>
</div>
<div className='DesktopDivider'><Divider orientation='vertical' style={{'height' : '20em'}}/> </div>
<div className='AdmissionsSection'> 
<div className='CurrentAdmissionsTitle'> <Typography variant="h5" component="h5">
Employee Login
</Typography></div>
<div className='AdmissionsInfo'>
 <div className='PreAddmissionsSubtitle'>
 <Typography variant="caption" display="block">
         IQAC
      </Typography>
 </div>
 <div className='PreAddmissionsTitle'> 
 <Typography variant="h6" component="h5" display="block">
        Faculty
      </Typography>
 </div>
 <div className='PreAddmissionsBody'> 
  <Typography variant="body2" display="block">
       Create/ Update Annual Quality Assurance Report (AQAR) of The IQAC
      </Typography>
 </div>
 <Divider/>
 <div className='PreAddmissionsBtn'> 
 <Link to="/login/faculty" style={{textDecoration: "none"}}><GreenButton >Login As Employee </GreenButton></Link>
 </div>
 </div>
</div>




</div>

    </div>
    </Paper>
     
    </div> */}