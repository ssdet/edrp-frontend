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


export default function EventsOrganized() {
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
        "events-organised",
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
             Acedemic Events Organised
            </Typography>
             <form className={classes.form} onSubmit={handleSubmit}>
               <Grid container spacing={2}>
                 <Grid item xs={12}>
                  <TextField
                    autoComplete="name_of_event"
                    name="name_of_event"
                    variant="outlined"
                    required
                    fullWidth
                    id="name_of_event"
                    label="Name Of Event"
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
                    autoComplete="no_of_participants"
                    name="no_of_participants"
                    variant="outlined"
                    required
                    fullWidth
                    id="no_of_participants"
                    label="no of participants"
                    type="number"
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
                    label="Organizer"
                  />
                </Grid>
               </Grid>
            
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <Button
                       // type="submit"
                       onClick={()=> removeBtnFaculty("events-organised", state.data["events-organised"][state.data["events-organised"].length-1].id )}
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
                        <TableCell>Name Of Event</TableCell>
                        <TableCell align="right">topic</TableCell>
                        <TableCell>No. Of Participations</TableCell>
                        <TableCell>Organizer</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {state.data["events-organised"] && state.data["events-organised"].map((row) => (
                        <TableRow key={row.id}>
                          <TableCell align="right">{row.name_of_event}</TableCell>
                          <TableCell align="right">{row.topic}</TableCell>
                          <TableCell align="right">{row.no_of_participants}</TableCell>
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
