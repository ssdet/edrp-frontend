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
ADMISSIONS / FEE PAYMENTS
</Typography></div>
<Divider/>
    <div className='AdmissionsDivInner'> 

<div className='PreAdmissionsSection'> 
   <div className='PreAdmissionsTitle'> <Typography variant="h5" component="h5">
New Applicants
</Typography></div>
<div className='PreAdmissionsInner'>
<div className='AdmissionsSectionUG'> 
<div className='AdmissionsInfo'>
 <div className='PreAddmissionsSubtitle'>
 <Typography variant="caption" display="block">
        PRE-ADMISSION
      </Typography>
 </div>
 <div className='PreAddmissionsTitle'> 
 <Typography variant="h6" component="h5" display="block">
        UG/PG (2020-21)
      </Typography>
 </div>
 <div className='PreAddmissionsBody'> 
  <Typography variant="body2" display="block">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur,
      </Typography>
 </div>
 <Divider/>
 <div className='PreAddmissionsBtn'> 
 <GreenButton>Apply Now </GreenButton>
 </div>
 </div>
</div>
<div className='AdmissionsSectionPHD'> 
<div className='AdmissionsInfo'>
 <div className='PreAddmissionsSubtitle'>
 <Typography variant="caption" display="block">
        PRE-ADMISSION
      </Typography>
 </div>
 <div className='PreAddmissionsTitle'> 
 <Typography variant="h6" component="h5" display="block">
        PRE-PHD (2020-21)
      </Typography>
 </div>
 <div className='PreAddmissionsBody'> 
  <Typography variant="body2" display="block">
         consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur,
      </Typography>
 </div>
 <Divider/>
 <div className='PreAddmissionsBtn'> 
 <GreenButton >Apply  Now</GreenButton>
 </div>
 </div>
</div>
</div>
</div>
<div className='DesktopDivider'><Divider orientation='vertical' style={{'height' : '20em'}}/> </div>
<div className='AdmissionsSection'> 
<div className='CurrentAdmissionsTitle'> <Typography variant="h5" component="h5">
Current Students
</Typography></div>
<div className='AdmissionsInfo'>
 <div className='PreAddmissionsSubtitle'>
 <Typography variant="caption" display="block">
        ADMISSION
      </Typography>
 </div>
 <div className='PreAddmissionsTitle'> 
 <Typography variant="h6" component="h5" display="block">
        UG/PG (2020-21)
      </Typography>
 </div>
 <div className='PreAddmissionsBody'> 
  <Typography variant="body2" display="block">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur,
      </Typography>
 </div>
 <Divider/>
 <div className='PreAddmissionsBtn'> 
 <GreenButton>Apply Now </GreenButton>
 </div>
 </div>
</div>




</div>

    </div>
    </Paper>
     
    </div>
    
  );
}
