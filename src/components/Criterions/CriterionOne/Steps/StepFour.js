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
import { MyContext } from '../../../../store/Store';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
  gridRoot : {
      marginTop : theme.spacing(1),
      marginLeft : theme.spacing(1)
  }
}));


export default function StepFour() {
    const classes = useStyles();
    const {state, nextStep, addBtn, removeBtn} =  React.useContext(MyContext);
    const handleSubmit = (e)=> {
        e.preventDefault();
        const formData = new FormData(e.target);
        addBtn(
            1,
            4,
            {
                pName : formData.get("pName"),
                pDate : formData.get("pDate"),
                pUG : formData.get("pUG"),
                pPG : formData.get("pPG"),
                iUG : formData.get("iUG"),
                iPG : formData.get("iPG"),
            }
        )
    }
    return (
        <div>
             <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="fname"
                    name="pName"
                    variant="outlined"
                    required
                    fullWidth
                    id="pName"
                    label="Programme/Course"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                <Grid container className={classes.gridRoot}> 
                         <Grid item xs={12} sm={6}>
                        <FormControl component="fieldset" disabled>
                              <FormLabel component="legend">UG</FormLabel>
                              <RadioGroup aria-label="gender" name="pUG" row value="Yes">
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                              </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <FormControl component="fieldset" disabled>
                              <FormLabel component="legend">PG</FormLabel>
                              <RadioGroup aria-label="gender" name="pPG" row value="Yes">
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                              </RadioGroup>
                            </FormControl>
                        </Grid>
                      </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    defaultValue="2021-05-24"
                    required
                    fullWidth
                    type="date"
                    label="Date Of Implementation"
                    id="password"
                    autoComplete="current-password"
                    name='pDate'
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container className={classes.gridRoot}> 
                     <Grid item xs={12} sm={6}>
                      <FormControl component="fieldset" disabled>
                          <FormLabel component="legend">UG</FormLabel>
                          <RadioGroup aria-label="gender" name="iUG" row  value="Yes">
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                          </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormControl component="fieldset" disabled>
                          <FormLabel component="legend">PG</FormLabel>
                          <RadioGroup aria-label="gender" name="iPG" row value="Yes">
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                          </RadioGroup>
                        </FormControl>
                    </Grid>
                  </Grid>
              </Grid>
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <Button
                       // type="submit"
                       onClick={()=> removeBtn(1,4)}
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
              <TableContainer >
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Programme/Course</TableCell>
                    <TableCell align="right">Introduction Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.data.c1s4 && state.data.c1s4.map((row) => (
                    <TableRow key={row.pName}>
                      <TableCell component="th" scope="row">
                        {row.pName}
                      </TableCell>
                      <TableCell align="right">{row.pDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
              <Grid item xs={12}>

              </Grid>
            </form> 
        </div>
    )
}
