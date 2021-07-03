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
// Tabs
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Redirect } from 'react-router';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStylesForTabs = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleTabs() {
  const classes = useStylesForTabs();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='inherit'>
        <Tabs value={value} onChange={handleChange} aria-label='simple tabs example'>
          <Tab label='Item One' {...a11yProps(0)} />
          <Tab label='Item Two' {...a11yProps(1)} />
          <Tab label='Item Three' {...a11yProps(2)} />
          <Tab label='Item Three' {...a11yProps(3)} />
          <Tab label='Item Three' {...a11yProps(4)} />
          <Tab label='Item Three' {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}


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
  const {state, nextStep, prevStep, aboutUser, goToStep} =  React.useContext(MyContext);

  React.useEffect(()=> {
    aboutUser()
  },[])

  if(!state.isLoggedIn) {
    return <Redirect to='/'/>
  }
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
         Criterion I : Curricular Aspects
        </Typography>
        <Typography variant='body1' align='center'>
      {state.stepLabel[state.step - 1]}
      </Typography>
      <div style={{'position': 'absolute', width : '100%', marginTop : '-50px'}}>
        <Tabs value={state.step-1} onChange={(e, val)=>{
          goToStep(val)
          }} aria-label='simple tabs example'>
          <Tab label='1.1.1' {...a11yProps(0)} />
          <Tab label='1.1.2' {...a11yProps(1)} />
          <Tab label='1.2.1' {...a11yProps(2)} />
          <Tab label='1.3.1' {...a11yProps(3)} />
          <Tab label='1.3.2' {...a11yProps(4)} />
          <Tab label='1.3.2' {...a11yProps(5)} />
          <Tab label='1.4.1' {...a11yProps(6)} />
          <Tab label='1.4.2' {...a11yProps(7)} />
        </Tabs>
      </div>
      <TabPanel value={state.step-1} index={0}>
        <StepOne/>
      </TabPanel>
      <TabPanel value={state.step-1} index={1}>
        <StepTwo/>
      </TabPanel>
      <TabPanel value={state.step-1} index={2}>
        <StepThree/>
      </TabPanel>
      <TabPanel value={state.step-1} index={3}>
        <StepFour/>
      </TabPanel>
      <TabPanel value={state.step-1} index={4}>
        <StepFive/>
      </TabPanel>
      <TabPanel value={state.step-1} index={5}>
        <StepSix/>
      </TabPanel>
      <TabPanel value={state.step-1} index={6}>
        <StepSeven/>
      </TabPanel>
      <TabPanel value={state.step-1} index={7}>
        <FinalState/>
      </TabPanel>
       {/* {state.step === 1 && <StepOne/>}
       {state.step === 2 && <StepTwo/>}
       {state.step === 3 && <StepThree/>}
       {state.step === 4 && <StepFour/>}
       {state.step === 5 && <StepFive/>}
       {state.step === 6 && <StepSix/>}
       {state.step === 7 && <StepSeven/>}
       {state.step > 7 && <FinalState/>} */}
       <Grid container spacing={2}> 
        <Grid item xs={6} sm={6}>
         <Button
           // type='submit'
           onClick={()=> prevStep()}
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={state.step <= 1}
          >
            {`Back : Step ${state.step - 1}`}
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
        <Button
           // type='submit'
           onClick={()=> nextStep()}
            fullWidth
            variant='contained'
            color='primary'
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