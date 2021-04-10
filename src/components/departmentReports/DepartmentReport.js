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


export default function DepartmentReport() {
    const classes = useStyles();
    const [author, setAuthor] = React.useState('');
    const [authorArray, setAuthorArray] = React.useState(['']);
    const {state, nextStep, addBtn, removeBtn} =  React.useContext(MyContext);

    const handleChange = (e)=> {
        e.preventDefault();
        setAuthor(e.target.value);
        console.log(e.target.value)
    }

    const addAuthor  = () => {
        let temp = authorArray
        temp.push(author)
        setAuthorArray(temp)
        console.log(authorArray)
    }

    const removeAuthor  = () => {
        let temp = authorArray
        temp.pop()
        setAuthorArray(temp)
        console.log(authorArray)
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        const formData = new FormData(e.target);
        addBtn(
            99,
            99,
            {
                aName : formData.get("aName"),
                pTitle : formData.get("pTitle"),
                pNo : formData.get("pNo"),
                jTitle :formData.get("jTitle"),
                year :formData.get("year"),
                impactFactor : formData.get("impactFactor"),
                issn : formData.get("issn"),
                volume : formData.get("volume"),

            }
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
             Evalutive Report Of The Department
            </Typography>
             <form className={classes.form} onSubmit={handleSubmit}>
               <Grid container spacing={2}>
                 <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="aName"
                    variant="outlined"
                    required
                    fullWidth
                    id="aName"
                    label="Name Of Author"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="pTitle"
                    variant="outlined"
                    required
                    fullWidth
                    id="pName"
                    label="Title Of Paper"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="volume"
                    variant="outlined"
                    required
                    fullWidth
                    id="pNos"
                    label="Volume"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="pNo"
                    variant="outlined"
                    required
                    fullWidth
                    id="pNo"
                    label="Page No."
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="jTitle"
                    variant="outlined"
                    required
                    fullWidth
                    id="pName"
                    label="Title Of Journal"
                    autoFocus
                  />
                </Grid>
            
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="year"
                    variant="outlined"
                    required
                    fullWidth
                    id="pName"
                    label="Year"
                    autoFocus
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="fname"
                    name="impactFactor"
                    variant="outlined"
                    required
                    fullWidth
                    id="asd"
                    label="Impact Factor"
                    multiline
                    rows={3}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="fname"
                    name="issn"
                    variant="outlined"
                    required
                    fullWidth
                    id="fgdgf"
                    label="ISSN"
                    autoFocus
                  />
                </Grid>
               </Grid>
            
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <Button
                       // type="submit"
                       onClick={()=> removeBtn(1,5)}
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
                        <TableCell>Volume(Issue) Page No.</TableCell>
                        <TableCell>Title Of Journal</TableCell>
                        <TableCell>Year</TableCell>
                        <TableCell>Impact Factor</TableCell>
                        <TableCell>ISSN</TableCell>
                        <TableCell>Volume</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {state.data.c99s99 && state.data.c99s99.map((row) => (
                        <TableRow key={row.aName}>
                          <TableCell component="th" scope="row">
                            {row.aName}
                          </TableCell>
                          <TableCell align="right">{row.pTitle}</TableCell>
                          <TableCell align="right">{row.pNo}</TableCell>
                          <TableCell align="right">{row.jTitle}</TableCell>
                          <TableCell align="right">{row.year}</TableCell>
                          <TableCell align="right">{row.impactFactor}</TableCell>
                          <TableCell align="right">{row.issn}</TableCell>
                          <TableCell align="right">{row.volume}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
           
                </TableContainer>
              </Grid>

        </div>
    )
}
