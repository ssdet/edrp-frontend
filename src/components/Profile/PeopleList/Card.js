import React from 'react';
import Button from '@material-ui/core/Button';

const TeacherCard = (props) => {
 return(
    <div style={{marginBottom:'30px', backgroundColor:'white' ,marginLeft:'30px', borderRadius:'20px', border:'2px solid green', marginTop:'30px', width:'400px', padding:'30px'}}>
         <img style={{width:'200px'}} src='https://user-images.githubusercontent.com/22274195/160230059-825a1040-e684-4145-ac05-5c7d1a0f02c6.PNG' />
        <div>
           <h1>{props.name}</h1>
           <h2>{props.username}</h2>
           <p>{props.email}</p>                 
           <Button style={{width:'150px', height:'40px'}} variant="contained" color="primary" name="submitbutton" id="submitbutton">
             View Profile
           </Button>
        </div>
    </div>
 )
}


export default TeacherCard;
