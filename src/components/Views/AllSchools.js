import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom" 

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import dept from "./dept.svg";

import { MyContext } from "../../store/Store";
import { Typography } from '@material-ui/core';
import axios from 'axios';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import DataTable from './DataTable';
import CriterionTableHOC from './CriterionTableHOC';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DepartmentProfileTableHOC from './DepartmentProfileTableHOC';
import { ArrowForward } from '@material-ui/icons';
import { Profile } from '../Profile/Profile';




function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
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
  
const usePanelStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        textDecoration: 'none',
        maxWidth: "1000px",
        margin : "0 auto",
        padding : theme.spacing(1),
      },
    },
    paper : {
        height : "130px",
        margin : theme.spacing(1),
        padding : theme.spacing(1)
    }
  }));

export default function AllSchools() {
    const classes = useStyles();
    const {state, fetchAllSchools} =  React.useContext(MyContext);
    const [school, setSchool] = React.useState({})
      
    let match = useRouteMatch();

    React.useEffect(() => {
        fetchAllSchools()
    }, [])

    return (
        <div>
             <Switch>
                <Route path={`${match.path}/:id`} component={SchoolDetail}/>

                <Route path={match.path}>
                <div className={classes.root}>
                    <Grid container>
                        {state["schools"] && state.schools.map((link)=> (
                        <Grid item xs={6}>
                            <Paper variant="outlined" className={classes.paper}>
                                <Grid container  justifyContent="center"
                                    alignItems="center">
                                        <Grid item={6} xs={12} sm={6} style={{}}>
                                            <img src={dept} style={{width : 'auto', height : '100px'}}/>
                                        </Grid>
                                        <Grid item sm={6} style={{margin : "0 auto",}} xs={12}>
                                        <Typography style={{marginBottom : "10px",}} variant="caption">
                                                {link.campus.name}
                                            </Typography>
                                            <Typography style={{marginBottom : "10px",}}>
                                                {link.name}
                                            </Typography>
                                            <Link
                                              to={{
                                                pathname: `${match.path}/${link.id}`, 
                                                query:{school: link}
                                              }}
                                             style={{textDecoration: 'none'}}>
                                            <Button variant="outlined" color="primary" size="small" disableRipple disableElevation disableFocusRipple
                                                style={{margin : "0 auto",}}
                                            >View More <ArrowForward style={{fontSize : "1.2em"}}/> </Button>
                                            </Link> 
                                        </Grid>
                                </Grid>
                            </Paper>   
                        </Grid>  
                        ))}                  
                    </Grid>
                </div>
                </Route>
              </Switch>
        </div>
    )
}


export const SchoolDetail = (props)=> {
    const classes = useStyles();
    const [school, setSchool] = React.useState({})
    let match = useRouteMatch();
    React.useEffect(()=>{
        if(props.location.query && props.location.query.school) {
            setSchool(props.location.query.school)
        }
        else {
            fetchSchool().then((res)=> setSchool(res))
        }
        
        
    },[])

    const fetchSchool = async ()=> {
        return await (await axios.get(`school/${props.match.params.id}`)).data
    }

    return(
        <div>
        <Switch>
           <Route path={`${match.path}/dept/:deptId`}  component={DepartmentDetail}/>

           <Route path={match.path}>
           <div className={classes.root}>
               <Grid container>
               {school && school.department_set && school.department_set.map((link)=> (
                   <Grid item xs={6}>
                       <Paper variant="outlined" className={classes.paper}>
                           <Grid container  justifyContent="center"
                               alignItems="center">
                                   <Grid item={6} xs={12} sm={6} style={{}}>
                                       <img src={dept} style={{width : 'auto', height : '100px'}}/>
                                   </Grid>
                                   <Grid item sm={6} style={{margin : "0 auto",}} xs={12}>
                                   <Typography style={{marginBottom : "10px",}} variant="caption">
                                          {school.name}
                                      </Typography>
                                      <Typography style={{marginBottom : "15px",}}>
                                          {link.name}
                                      </Typography>
                                       <Link
                                         to={{
                                           pathname: `${match.path}/dept/${link.id}`, 
                                           query:{dept: link}
                                         }}
                                        style={{textDecoration: 'none',}}>
                                       <Button size="small" variant="outlined" color="primary" disableRipple disableElevation disableFocusRipple >
                                         Read More <ArrowForward style={{fontSize: '.85em'}}/>
                                       </Button>
                                       </Link> 
                                   </Grid>
                           </Grid>
                       </Paper>   
                   </Grid>  
                   ))}                  
               </Grid>
           </div>
           </Route>
         </Switch>
   </div>
  )
}



export const DepartmentDetail = (props)=> {
    const {state, fetchFacultyProfile} = React.useContext(MyContext)
    const classes = useStyles();
    const [department, setDepartment] = React.useState({})
    const [allowedDepartment, setAllowedDepartment] = React.useState(0);
    const [options, setOptions] = React.useState([])

    const handleDeptChange = (event) => {
      setAllowedDepartment(event.target.value);
      console.log(event.target.value)
    };

    React.useEffect(()=> {
        if(match.params.deptId) {
          setAllowedDepartment(parseInt(match.params.deptId))
        }
        axios.get('department').then((res)=> {setOptions(res.data)})
    }, [])
    const sections = ['evaulative-report', 'research-projects', 'participations', 'events-organised', 'other-activity', 'phd-awarded', 'book', 'biodata']
    const headerNames = ['publications', 'research-projects', 'participations', 'events-organised', 'other-activity', 'phd-awarded', 'book', 'biodata']
    let match = useRouteMatch();
    React.useEffect(()=>{
       // fetchFacultyProfile()
        if(props.location.query && props.location.query.dept) {
            setDepartment(props.location.query.dept)
        } 
        else {
            fetchDept().then((res)=> setDepartment(res))
        }
        
    },[])

    const fetchDept = async ()=> {
        return await (await axios.get(`department/${props.match.params.id}`)).data
    }

    const classesPanel = usePanelStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return(
        <div>
        <Switch>
           <Route path={match.path}>
                <Tabs value={value} centered onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Department Data" {...a11yProps(0)} />
                  <Tab label="IQAC Data" {...a11yProps(1)} />
                  <Tab label="Faculty Profiles" {...a11yProps(2)} />
                </Tabs>
              <TabPanel value={value} index={0}>
                <DepartmentProfileTableHOC/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <CriterionTableHOC/>
              </TabPanel>
              <TabPanel value={value} index={2}>
               <Profile/>
            </TabPanel>
           </Route>
         </Switch>
   </div>
  )
}