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


export default function ResearchProjects() {
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
          "research-projects",
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
             Research Projects
            </Typography>
             <form className={classes.form} onSubmit={handleSubmit}>
               <Grid container spacing={2}>
                 <Grid item xs={12}>
                  <TextField
                    autoComplete="title_of_project"
                    name="title_of_project"
                    variant="outlined"
                    required
                    fullWidth
                    id="title_of_project"
                    label="Title Of Project"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="principle_investigator"
                    name="principle_investigator"
                    variant="outlined"
                    required
                    fullWidth
                    id="principle_investigator"
                    label="Principle Investigator"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="duration"
                    name="duration"
                    variant="outlined"
                    required
                    fullWidth
                    id="duration"
                    label="duration"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="funding_agency"
                    name="funding_agency"
                    variant="outlined"
                    required
                    fullWidth
                    id="funding_agency"
                    label="funding agency"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="total_grant_sanctioned"
                    name="total_grant_sanctioned"
                    variant="outlined"
                    required
                    fullWidth
                    id="total_grant_sanctioned"
                    label="total Grant Sanctioned"
                    type="number"
                    
                  />
                </Grid>
            
                {/* <Grid item xs={12}>
                  <TextField
                    autoComplete="impact_factor"
                    name="impact_factor"
                    variant="outlined"
                    required
                    fullWidth
                    id="impact_factor"
                    label="Impact Factor"
                    multiline
                    rows={8}
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="issn"
                    name="issn"
                    variant="outlined"
                    required
                    fullWidth
                    id="issn"
                    label="ISSN"
                  />
                </Grid> */}
               </Grid>
            
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <Button
                       // type="submit"
                       onClick={()=> removeBtnFaculty("research-projects", state.data["research-projects"][state.data["research-projects"].length - 1].id )}

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
                        <TableCell>Title Of Project</TableCell>
                        <TableCell align="right">Principle Investigator</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell>Funding Agency</TableCell>
                        <TableCell>Total Grant Sanctioned</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {state.data["research-projects"] && state.data["research-projects"].map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>
                            {row.title_of_project}
                          </TableCell>
                          <TableCell align="right">{row.principle_investigator}</TableCell>
                          <TableCell align="right">{row.duration}</TableCell>
                          <TableCell align="right">{row.funding_agency}</TableCell>
                          <TableCell align="right">{row.total_grant_sanctioned}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
           
                </TableContainer>
              </Grid>

        </div>
    )
}
