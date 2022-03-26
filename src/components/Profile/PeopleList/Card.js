import React from 'react';
import Button from '@material-ui/core/Button';
import { Paper, Typography } from '@material-ui/core';

const TeacherCard = (props) => {
 return(
    <Paper variant="outlined" style={{marginBottom:'30px', backgroundColor:'white' ,marginLeft:'30px', borderRadius:'20px', marginTop:'30px', width:'400px', padding:'30px'}}>
         <img style={{width:'200px', marginBottom : '8px'}} src='https://user-images.githubusercontent.com/22274195/160230059-825a1040-e684-4145-ac05-5c7d1a0f02c6.PNG' />
        <div>
           <Typography variant='h4'>{props.name}</Typography>
           <Typography variant='h6'>{props.username}</Typography>
           <p>{props.email}</p>                 
           <Button style={{width:'150px', height:'40px'}} variant="contained" color="primary" name="submitbutton" id="submitbutton" disableElevation disableRipple >
             View Profile
           </Button>
        </div>
    </Paper>
 )
}


export default TeacherCard;
