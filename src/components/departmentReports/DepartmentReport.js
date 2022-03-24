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


export default function DepartmentReport(props) {
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
        "evaulative-report",
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
              Publications
            </Typography>
             <form className={classes.form} onSubmit={handleSubmit}>
               <Grid container spacing={2}>
                 <Grid item xs={12}>
                  <TextField
                    autoComplete="name_of_author"
                    name="name_of_author"
                    variant="outlined"
                    required
                    fullWidth
                    id="name_of_author"
                    label="Name Of Author"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="title_of_paper"
                    name="title_of_paper"
                    variant="outlined"
                    required
                    fullWidth
                    id="title_of_paper"
                    label="Title Of Paper"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={props.validator}
                    autoComplete="volume"
                    name="volume"
                    variant="outlined"
                    required
                    fullWidth
                    id="volume"
                    label="volume"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="page_no"
                    name="page_no"
                    variant="outlined"
                    required
                    fullWidth
                    id="page_no"
                    label="Page No."
                    type="number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="title_of_journal"
                    name="title_of_journal"
                    variant="outlined"
                    required
                    fullWidth
                    id="title_of_journal"
                    label="Title Of Journal"
                  />
                </Grid>
            
                <Grid item xs={12}>
                  <TextField
                    autoComplete="year"
                    name="year"
                    variant="outlined"
                    required
                    fullWidth
                    id="year"
                    label="Year"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="impact_factor"
                    name="impact_factor"
                    variant="outlined"
                    required
                    fullWidth
                    id="impact_factor"
                    label="Impact Factor"
                    multiline
                    rows={6}
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
                    autoFocus
                  />
                </Grid>
               </Grid>
            
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <Button
                       // type="submit"
                       onClick={()=> removeBtnFaculty("evaulative-report", state.data["evaulative-report"][state.data["evaulative-report"].length - 1].id )}
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
                        <TableCell>Name Of Author</TableCell>
                        <TableCell align="right">Title Of Paper</TableCell>
                        <TableCell>Volume</TableCell>
                        <TableCell>Volume(Issue) Page No.</TableCell>
                        <TableCell>Title Of Journal</TableCell>
                        <TableCell>Year</TableCell>
                        <TableCell>Impact Factor</TableCell>
                        <TableCell>ISSN</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {state.data["evaulative-report"] && state.data["evaulative-report"].map((row) => (
                        <TableRow key={row.name_of_author}>
                          <TableCell align="right">{row.name_of_author}</TableCell>
                          <TableCell align="right">{row.title_of_paper}</TableCell>
                          <TableCell align="right">{row.volume}</TableCell>
                          <TableCell align="right">{row.page_no}</TableCell>
                          <TableCell align="right">{row.title_of_journal}</TableCell>
                          <TableCell align="right">{row.year}</TableCell>
                          <TableCell align="right">{row.impact_factor}</TableCell>
                          <TableCell align="right">{row.issn}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
           
                </TableContainer>
              </Grid>

        </div>
    )
}
