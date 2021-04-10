import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginLeft : theme.spacing(3)
  }
}));


export default function StepSeven() {
    const classes = useStyles();
    const {state, nextStep, addBtn, removeBtn} =  React.useContext(MyContext);
    const handleSubmit = (e)=> {
        e.preventDefault();
        const formData = new FormData(e.target);
        addBtn(
            1,
            7,
            {
                students : formData.get("students"),
                teachers : formData.get("teachers"),
                employers : formData.get("employers"),
                alumni : formData.get("alumni"),
                parents : formData.get("parents"),
                feedback : formData.get("feedback"),
            }
        )
    }
    return (
        <div>
             <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                  <Grid container  className={classes.gridRoot}>
                    <Grid item xs={12} sm={6}>
                    <FormControl component="fieldset">
                          <FormLabel component="legend">Students</FormLabel>
                          <RadioGroup aria-label="gender" name="students" row>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                          </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormControl component="fieldset">
                          <FormLabel component="legend">Teachers</FormLabel>
                          <RadioGroup aria-label="gender" name="teachers" row>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                          </RadioGroup>
                        </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.gridRoot}> 
                     <Grid item xs={12} sm={6}>
                    <FormControl component="fieldset">
                          <FormLabel component="legend">employers</FormLabel>
                          <RadioGroup aria-label="gender" name="employers" row>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                          </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormControl component="fieldset">
                          <FormLabel component="legend">Alumni</FormLabel>
                          <RadioGroup aria-label="gender" name="alumni" row>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                          </RadioGroup>
                        </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.gridRoot}> 
                     <Grid item xs={12} sm={6}>
                     <FormControl component="fieldset">
                          <FormLabel component="legend">Parents</FormLabel>
                          <RadioGroup aria-label="gender" name="parents" row>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                          </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} >
                  <TextField
                    autoComplete="fname"
                    name="feedback"
                    variant="outlined"
                    required
                    fullWidth
                    id="sTotal"
                    multiline
                    rows={10}
                    label="Feedback"
                    placeholder="How The Feedback obtained is being analyzed and utilized for overall development of the department (Max 500 Words)"
                    autoFocus
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <Button
                       // type="submit"
                       onClick={()=> removeBtn(1,7)}
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
                  <TableRow>
                    <TableCell><b>Student</b></TableCell>
                    <TableCell>{(state.data.c1s7 && state.data.c1s7.length > 0 ) ? state.data.c1s7[0].students : "-"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Teachers</b></TableCell>
                    <TableCell>{(state.data.c1s7 && state.data.c1s7.length > 0 )  ? state.data.c1s7[0].teachers : "-"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Employers</b></TableCell>
                    <TableCell>{(state.data.c1s7 && state.data.c1s7.length > 0 )  ? state.data.c1s7[0].employers : "-"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Alumni</b></TableCell>
                    <TableCell>{(state.data.c1s7 && state.data.c1s7.length > 0 )  ? state.data.c1s7[0].alumni : "-"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Parents</b></TableCell>
                    <TableCell>{(state.data.c1s7 && state.data.c1s7.length > 0 )  ? state.data.c1s7[0].parents : "-"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Feedback</b></TableCell>
                    <TableCell>{(state.data.c1s7 && state.data.c1s7.length > 0 )  ? state.data.c1s7[0].feedback : "-"}</TableCell>
                  </TableRow>
              </Table>
            </TableContainer>
              <Grid item xs={12}>

              </Grid>
            </form> 
        </div>
    )
}
