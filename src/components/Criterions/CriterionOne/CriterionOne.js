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
import StepOne from './Steps/StepOne';
import { MyContext } from '../../../store/Store';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';
import StepFour from './Steps/StepFour';
import StepFive from './Steps/StepFive';
import StepSix from './Steps/StepSix';
import StepSeven from './Steps/StepSeven';
import FinalState from './Steps/FinalState';


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
}));

export default function CriterionOne() {
  const classes = useStyles();
  const [step, setStep] = React.useState(1);
  const {state, nextStep, prevStep} =  React.useContext(MyContext);

  React.useEffect(()=> {

  },[])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Criterion I : Curricular Aspects
        </Typography>
        <Typography variant="body1" align="center">
      {state.stepLabel[state.step - 1]}
      </Typography>
       {state.step === 1 && <StepOne/>}
       {state.step === 2 && <StepTwo/>}
       {state.step === 3 && <StepThree/>}
       {state.step === 4 && <StepFour/>}
       {state.step === 5 && <StepFive/>}
       {state.step === 6 && <StepSix/>}
       {state.step === 7 && <StepSeven/>}
       {state.step > 7 && <FinalState/>}
       <Grid container spacing={2}> 
        <Grid item xs={6} sm={6}>
         <Button
           // type="submit"
           onClick={()=> prevStep()}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={state.step <= 1}
          >
            {`Back : Step ${state.step - 1}`}
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
        <Button
           // type="submit"
           onClick={()=> nextStep()}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={state.step > 7}
          >
            {`Next : Step ${state.step}`}
          </Button>
        </Grid>
       </Grid>
      </div>
    </Container>
  );
}