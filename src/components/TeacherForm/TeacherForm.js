import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MyContext } from '../../store/Store';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">

    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export const TeacherForm = (props) => {
  const classes = useStyles();
  const store = useContext(MyContext)

  const submitForm = (e) => {
      e.preventDefault();
      console.log(store.state)
      store.submitFacultyForm(e.target, store.state.facultyResume.id, props.closeFunc);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update
        </Typography>
        <form className={classes.form} onSubmit={submitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField id="name" label="Name" variant="outlined"  name="name" defaultValue={store.state.facultyResume.name} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField id="duty" label="Duty" variant="outlined"   name="duty" defaultValue={store.state.facultyResume.duty}/>
            </Grid>
            <Grid item xs={12} sm={6} >
            <TextField id="orcid_id" label="Orchid ID" variant="outlined"   name="orcid_id" defaultValue={store.state.facultyResume.orcid_id}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField id="mobile" label="Mobile Number" variant="outlined"   name="mobile" defaultValue={store.state.facultyResume.mobile}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField id="email_secondary" label="Email ID" variant="outlined"   name="email_secondary" defaultValue={store.state.facultyResume.email_secondary}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField id="designation" label="Designation" variant="outlined"   name="designation" defaultValue={store.state.facultyResume.designation}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField id="educational_qualification" label="Education Qualification" variant="outlined" name="educational_qualification"  defaultValue={store.state.facultyResume.educational_qualification} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField label="Research Experience" variant="outlined"   id="research_experience" name="research_experience" defaultValue={store.state.facultyResume.research_experience}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField id="teaching_experience" label="Teaching Experience" variant="outlined" name="teaching_experience"   defaultValue={store.state.facultyResume.teaching_experience}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button style={{marginLeft:'30px', marginTop:'15px'}} id="photographbutton" variant="contained" component="label" name="photographbutton">
                    Upload Photo
                    <input id="photographinput" type="file" hidden name="photographinput"/>
                </Button>
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    id="achievements"
                    variant="outlined"
                    style={{width:'100%'}}
                    label="achievements"
                    multiline
                    rows={4}
                    name="achievements"
                    defaultValue={store.state.facultyResume.achievements}
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    variant="outlined"
                    style={{width:'100%'}}
                    id="areas_of_interest"
                    label="Area of Interest"
                    multiline
                    rows={4}
                    name="areas_of_interest"
                    defaultValue={store.state.facultyResume.areas_of_interest}
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    variant="outlined"
                    style={{width:'100%'}}
                    id="address"
                    label="address"
                    multiline
                    rows={4}
                    name="address"
                    defaultValue={store.state.facultyResume.address}
                />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save Profile
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

// class TeacherFormComponent extends Component {
//     render(){
//         return(
//             <div>
//                 <h1 style={{textAlign:'center'}}>Faculty Profile form</h1>

//                 <div style={{marginTop:'50px'}}>


//                     <div style={{display:'flex', marginBottom:'30px'}}>                    
//                         <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
//                             <span  style={{marginLeft:'20px', marginTop:'5px'}}>
//                                 <TextField id="name" label="Name" variant="outlined"  name="name" required/>
//                             </span>                   
//                         </div>
//                         <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
//                             <h3>Orchid ID: </h3>
//                             <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                                
//                             </span>                   
//                         </div>
//                         <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
//                             <h3>Duty: </h3>
//                             <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                                
//                             </span>                   
//                         </div>
//                     </div>

//                     <div style={{display:'flex', marginBottom:'30px'}}>                    
//                         <div  style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
//                             <h3>Mobile Number: </h3>
//                             <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                                
//                             </span>                   
//                         </div>
//                         <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
//                             <h3>Email ID: </h3>
//                             <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                                
//                             </span>                   
//                         </div>
                        
//                     </div>

//                     <div style={{display:'flex', marginBottom:'30px'}}>
//                         <div  style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
//                             <h3>Department:</h3>
//                             <span  style={{marginLeft:'20px', marginTop:'5px'}}>
//                                 <TextField id="department" label="Department" variant="outlined"   name="department" required/>
//                             </span>  
//                         </div>
//                         <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
//                             <h3>Designation: </h3>
//                             <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                                
//                             </span>   
//                         </div>
//                         <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
//                             <h3>Campus: </h3>
//                             <span  style={{marginLeft:'20px', marginTop:'5px'}}>
//                                 <TextField id="campus" label="Campus" variant="outlined"   name="campus" required/>
//                             </span>                 
//                         </div>
//                     </div>

//                     <div style={{display:'flex', marginBottom:'30px'}}>
//                         <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
//                             <h3>Education Qualification: </h3>
//                             <span  style={{marginLeft:'20px', marginTop:'5px'}}>
//                             </span>                   
//                         </div>
//                         <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
//                             <h3>Teaching Experience: </h3>
//                             <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                                
//                             </span>                   
//                         </div>
//                         <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px' }}>
//                             <h3>Research Experience: </h3>
//                             <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                                
//                             </span>                   
//                         </div>
//                     </div>


//                     <div style={{display:'flex', marginBottom:'30px'}}>

//                         <div style={{display:'flex', marginBottom:'90px', marginLeft:'20px'}}>
//                             <h3>Area of Interest: </h3>
//                             <span  style={{marginLeft:'30px', marginTop:'5px'}}>
//                                 <TextField
//                                     id="areaofinterest"
//                                     label="Area of Interest"
//                                     multiline
//                                     rows={4}
//                                     style={{width: '600px'}} 
//                                     name="areaofinterest"
//                                 />
//                             </span>                   
//                         </div>
//                         <div style={{display:'flex', marginBottom:'90px', marginLeft:'20px'}}>
//                             <h3>Address: </h3>
//                             <span  style={{marginLeft:'30px', marginTop:'5px'}}>
//                                 <TextField
//                                     id="address"
//                                     label="Address"
//                                     multiline
//                                     rows={4}
//                                     style={{width: '600px'}} 
//                                     name="address"
//                                 />
//                             </span>                   
//                         </div>
//                     </div>


//                     <div style={{display:'flex', marginBottom:'90px', marginLeft:'20px'}}>
//                         <h3>Upload Profile Photograph here: </h3>

//                     </div>

//                     <div style={{display:'flex', justifyContent:'center' ,marginBottom:'90px'}}>
                    
//                         <Button style={{marginLeft:'30px', width:'150px', height:'40px'}} variant="contained" color="primary" name="submitbutton" id="submitbutton">
//                             Submit
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// export const TeacherForm= TeacherFormComponent;