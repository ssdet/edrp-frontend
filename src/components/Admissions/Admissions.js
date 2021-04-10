import React from 'react';
import './Admissions.css';
import {GreenButton} from '../Button/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

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
   const classes = useStyles();
  
  return (
   
    <div className="Admissions">
    <Paper elevation={2}>
    <div className='AdmissionsDiv'>
        <div className='AdmissionsTitle'> <Typography variant="h5" component="h3">
IQAC : Internal Quality Assurance Cell
</Typography></div>
<Divider/>
    <div className='AdmissionsDivInner'> 

<div className='PreAdmissionsSection'> 
   <div className='PreAdmissionsTitle'> <Typography variant="h5" component="h5">  
Director / HOD Login
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
 <GreenButton>Login as Director </GreenButton>
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
 <GreenButton >Login as HOD</GreenButton>
 </div>
 </div>
</div>
</div>
</div>
<div className='DesktopDivider'><Divider orientation='vertical' style={{'height' : '20em'}}/> </div>
<div className='AdmissionsSection'> 
<div className='CurrentAdmissionsTitle'> <Typography variant="h5" component="h5">
Faculty Login
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
 <GreenButton>Login As Faculty </GreenButton>
 </div>
 </div>
</div>




</div>

    </div>
    </Paper>
     
    </div>
    
  );
}
