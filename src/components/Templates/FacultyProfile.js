import React from 'react'
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
// Tabs
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Redirect } from 'react-router';
import { MyContext } from '../../store/Store';
import Step from './FormFaculty';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-index`}
      aria-labelledby={`simple-tab-index`}
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
    id: `simple-tab-index`,
    'aria-controls': `simple-tabpanel-index`,
  };
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





export default function FacultyProfile(props) {
  const classes = useStyles();

  const {state, nextStep, prevStep, aboutUser, goToStep} =  React.useContext(MyContext);

  const totalSteps = Object.keys(props.criterion).length
  
  const generateTabHeading =  (criterion, step)=> {
      console.log(criterion, step)
    let steps = step.split("")
    if(!steps[1]) {
      steps[1] = '0'
    }
    return `${criterion}.${steps[0]}.${steps[1]}`
  }

  React.useEffect(()=> {
    console.log(props.criterion)
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
        <Typography component='h1' variant='h5' align='center' style={{marginTop : "10px"}}>
        <center> {`${props.criterionDescription}`}</center>
        </Typography>
      <div style={{'position': 'absolute', width : '100%', marginTop : '-50px'}}>
      <Tabs 
          value={state.step-1} 
          onChange={(e, val)=>{goToStep(val)}} 
          aria-label='simple tabs example' 
          indicatorColor="primary" 
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          >
          {/* {Object.keys(props.criterion).map(key => ( state.user && state.user.type === "FACULTY"
          && SHOW_TO_FAC_MAP[generateTabHeading(props.criterionId, key)] &&
           <Tab label={generateTabHeading(props.criterionId, key)} {...a11yProps(0)} />
          ))} */}
        {Object.keys(props.criterion).map(key =>(<Tab label={generateTabHeading(props.criterionId, key)} {...a11yProps(0)} />))}
      </Tabs>
      </div>
  {Object.keys(props.criterion).map( (key,i) => (
    <TabPanel value={state.step-1} index={i}>
        <Typography variant='body1' align='center' style={{marginTop : "10px", textTransform : 'capitalize'}}>
          {props.criterion[key].description}
        </Typography>
        <Step criterion={props.criterionId} step={key} fields={props.criterion[key].fields} />
    </TabPanel>
  ) ) }
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
            disabled={state.step > totalSteps}
          >
            {`Next : Step ${state.step}`}
          </Button>
        </Grid>
       </Grid>
      </div>
    </Container>
  );
}
