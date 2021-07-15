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


export default function BookReport() {
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
        "book",
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
                    autoComplete="book_or_book_chapter"
                    name="book_or_book_chapter"
                    variant="outlined"
                    required
                    fullWidth
                    id="book_or_book_chapter"
                    label="Book/Book chapter"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="author"
                    name="author"
                    variant="outlined"
                    required
                    fullWidth
                    id="author"
                    label="Author"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="year_of_publication"
                    name="year_of_publication"
                    variant="outlined"
                    required
                    fullWidth
                    id="year_of_publication"
                    label="Year of publication"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="publisher"
                    name="publisher"
                    variant="outlined"
                    required
                    fullWidth
                    id="publisher"
                    label="Publisher"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="isbn"
                    name="isbn"
                    variant="outlined"
                    required
                    fullWidth
                    id="isbn"
                    label="ISBN"
                  />
                </Grid>       
               </Grid>
            
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <Button
                       // type="submit"
                       onClick={()=> removeBtnFaculty("book", state.data["book"][state.data["book"].length - 1].id )}
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
                        <TableCell>Book/ Book Chapter</TableCell>
                        <TableCell align="right">Author</TableCell>
                        <TableCell>Year Of Publicaiton</TableCell>
                        <TableCell>Publisher</TableCell>
                        <TableCell>ISBN</TableCell>
                  </TableRow>
                    </TableHead>
                    <TableBody>
                      {state.data["book"] && state.data["book"].map((row) => (
                        <TableRow key={row.book_or_book_chapter}>
                          <TableCell align="right">{row.author}</TableCell>
                          <TableCell align="right">{row.year_of_publication}</TableCell>
                          <TableCell align="right">{row.publisher}</TableCell>
                          <TableCell align="right">{row.isbn}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
           
                </TableContainer>
              </Grid>

        </div>
    )
}
