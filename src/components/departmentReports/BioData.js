import React from 'react';
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
import { MyContext } from "../../store/Store";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
  remove : {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main,
  },
  addAuthor : {
      marginTop: theme.spacing(1)
  }
}));


export default function BioData() {
    const classes = useStyles();
    const {state, nextStep, addBtnFaculty, removeBtnFaculty} =  React.useContext(MyContext);
    const handleSubmit = (e)=> {
      e.preventDefault();
      const formData = new FormData(e.target);
        let data = {}
        for (var key of formData.keys()) {
          data[key] = formData.get([key])
       }
       addBtnFaculty(
        "biodata",
          data
      )
  }

    return (
        <div>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Faculty BioData
            </Typography>
             <form className={classes.form} onSubmit={handleSubmit}>
               <Grid container spacing={2}>

               
               <Grid item xs={12}>
               <div>
               <input type="file"/>
               <img src={state.img}/>
               </div>
                </Grid>


                 <Grid item xs={12}>
                  <TextField
                    autoComplete="first name"
                    name="fname"
                    variant="outlined"
                    required
                    fullWidth
                    id="first name"
                    label="first name"
                  />
                </Grid>
               
                
                <Grid item xs={12}>
                  <TextField
                    autoComplete="middle name"
                    name="mname"
                    variant="outlined"
                    required
                    fullWidth
                    id="mname"
                    label="middle name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="last name"
                    name="lname"
                    variant="outlined"
                    required
                    fullWidth
                    id="last name"
                    label="last name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="date of birth"
                    name="dob"
                    variant="outlined"
                    required
                    fullWidth
                    id="date of birth"
                    label="date of birth"
                  />
                </Grid>




                <Grid item xs={12}>
                  <TextField
                    autoComplete="Designation"
                    name="Designation"
                    variant="outlined"
                    required
                    fullWidth
                    id="Designation"
                    label="Designation"
                  />
                </Grid>



                <Grid item xs={12}>
                  <TextField
                    autoComplete="Department"
                    name="Department"
                    variant="outlined"
                    required
                    fullWidth
                    id="Department"
                    label="Department"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="School"
                    name="School"
                    variant="outlined"
                    required
                    fullWidth
                    id="School"
                    label="School"
                  />
                </Grid>


                <Grid item xs={12}>
                  <TextField
                    autoComplete="email"
                    name="email"
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="address"
                    name="address"
                    variant="outlined"
                    required
                    fullWidth
                    id="address"
                    label="address"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="spcialization"
                    name="spcialization"
                    variant="outlined"
                    required
                    fullWidth
                    id="spcialization"
                    label="spcialization"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="orcid"
                    name="orcid"
                    variant="outlined"
                    required
                    fullWidth
                    id="orcid"
                    label="orcid"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="University duty"
                    name="duty"
                    variant="outlined"
                    required
                    fullWidth
                    id="University duty"
                    label="University duty"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="Qualification"
                    name="Qualification"
                    variant="outlined"
                    required
                    fullWidth
                    id="Qualification"
                    label="Qualification"
                  />
                </Grid>


                <Grid item xs={12}>
                  <TextField
                    autoComplete="Teaching and Research Experience"
                    name="expr"
                    variant="outlined"
                    required
                    fullWidth
                    id="Teaching and Research Experience"
                    label="Teaching and Research Experience"
                  />
                </Grid>


                <Grid item xs={12}>
                  <TextField
                    autoComplete="Date of joining"
                    name="doj"
                    variant="outlined"
                    required
                    fullWidth
                    id="Date of joining"
                    label="Date of joining"
                  />
                </Grid>
      
               </Grid>
            
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <Button
                       // type="submit"
                       onClick={()=> removeBtnFaculty("biodata", state.data["biodata"][state.data["biodata"].length - 1].id )}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.remove}
                      >
                        Remove
                      </Button>
                  </Grid>
                 <Grid item xs={12} sm={6}>
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Add
                      </Button>
                  </Grid>
              </Grid>
              <Grid item xs={12}>

              </Grid>   
            </form>
            </div>
            </Container> 
            <Grid item={12} style={{width : "50%", margin : "0 auto"}}>
            <TableContainer >
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>

                  </TableRow>
                    </TableHead>
                    <TableBody>
                      {state.data["biodata"] && state.data["biodata"].map((row) => (
                       
                            <TableRow key={row.fname}>
                            <TableRow key={row.lname}></TableRow>
                         

                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
           
                </TableContainer>
              </Grid>

        </div>
    )
}
