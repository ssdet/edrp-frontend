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


export default function Participations() {
    const classes = useStyles();

    const {state, nextStep, addBtnFaculty, removeBtnFaculty} =  React.useContext(MyContext);
    
    React.useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    const handleSubmit = (e)=> {
      e.preventDefault();
      const formData = new FormData(e.target);
        let data = {}
        for (var key of formData.keys()) {
          data[key] = formData.get([key])
       }
      addBtnFaculty(
        "participations",
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
             Participations in Conferences, Seminars. Workshops and Training Programmes
            </Typography>
             <form className={classes.form} onSubmit={handleSubmit}>
               <Grid container spacing={2}>
                 <Grid item xs={12}>
                  <TextField
                    autoComplete="name_of_conference"
                    name="name_of_conference"
                    variant="outlined"
                    required
                    fullWidth
                    id="name_of_conference"
                    label="Name Of Conference"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="topic"
                    name="topic"
                    variant="outlined"
                    required
                    fullWidth
                    id="topic"
                    label="Topic"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="participation_mode"
                    name="participation_mode"
                    variant="outlined"
                    required
                    fullWidth
                    id="participation_mode"
                    label="participation mode"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="organizer"
                    name="organizer"
                    variant="outlined"
                    required
                    fullWidth
                    id="organizer"
                    label="organizer"
                  />
                </Grid>
               </Grid>
            
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <Button
                       // type="submit"
                       onClick={()=> removeBtnFaculty("participations", state.data["participations"][state.data["participations"].length - 1].id )}
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
                        <TableCell>Name Of Conference</TableCell>
                        <TableCell align="right">Topic</TableCell>
                        <TableCell>Participantion Mode</TableCell>
                        <TableCell>Organizer</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {state.data["participations"] && state.datadata["participations"].map((row) => (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row">
                            {row.name_of_conference}
                          </TableCell>
                          <TableCell align="right">{row.topic}</TableCell>
                          <TableCell align="right">{row.participation_mode}</TableCell>
                          <TableCell align="right">{row.organizer}</TableCell>
  
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
           
                </TableContainer>
              </Grid>

        </div>
    )
}
