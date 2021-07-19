import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect
  } from "react-router-dom" 

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import i1 from "./assets/1.svg";
import i2 from "./assets/2.svg";
import i3 from "./assets/3.svg";
import i4 from "./assets/4.svg";
import i5 from "./assets/5.svg";
import i6 from "./assets/6.svg";
import i7 from "./assets/7.svg";
import i8 from "./assets/8.svg";
import DepartmentReport from './DepartmentReport';
import EventsOrganized from './EventsOrganized';
import Participations from './Participations';
import OtherActivity from './OtherActivity';
import PhdAwarded from './PhdAwarded';
import ResearchProjects from './ResearchProjects';
import { MyContext } from "../../store/Store";
import BookReport from './BookReport';
import DataTable from '../Views/DataTable';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        textDecoration: 'none',
        maxWidth: "1000px",
        margin : "0 auto",
        padding : theme.spacing(1),
        height : "1000px"
      },
    },
    paper : {
        height : "170px",
        margin : theme.spacing(1),
        padding : theme.spacing(1)
    }
  }));

export default function FacultyProfile() {
    const classes = useStyles();
    const {state, fetchFacultyProfile} =  React.useContext(MyContext);
    const sections = ['evaulative-report', 'research-projects', 'participations', 'events-organised', 'other-activity', 'phd-awarded', 'book']
    const headerNames = ['publications', 'research-projects', 'participations', 'events-organised', 'other-activity', 'phd-awarded', 'book']
    const [links, setLinks] = React.useState([
        {
            link : "evaluative-report",
            image : i1,
            label : "Publications"
        },
        {
            link : "events-organised",
            image : i2,
            label : "Events Organised"
        },
        {
            link : "other-activities",
            image : i3,
            label : "Other Activities"
        },
        {
            link : "participations",
            image : i4,
            label : "Participations"
        },
        {
            link : "phd-awarded",
            image : i5,
            label : "Ph.D Awarded"
        },
        {
            link : "research-projects",
            image : i6,
            label : "Research Projects"
        },
        {
            link : "book-report",
            image : i7,
            label : "Book Report"
        }
    ])
    let match = useRouteMatch();

    React.useEffect(() => {
        fetchFacultyProfile()
    }, [])

    if(state.isLoggedIn) {
        if(state.user && state.user.type && state.user.type === "FACULTY") {
            return (
                <div>
                     <Switch>
                        <Route path={`${match.path}evaluative-report`}>
                         <DepartmentReport/>
                        </Route>
                        <Route path={`${match.path}events-organised`}>
                         <EventsOrganized/>
                        </Route>
                        <Route path={`${match.path}other-activities`}>
                         <OtherActivity/>
                        </Route>
                        <Route path={`${match.path}participations`}>
                         <Participations/>
                        </Route>
                        <Route path={`${match.path}phd-awarded`}>
                         <PhdAwarded/>
                        </Route>
                        <Route path={`${match.path}research-projects`}>
                         <ResearchProjects/>
                        </Route>
                        <Route path={`${match.path}book-report`}>
                         <BookReport/>
                        </Route>

                        <Route path={match.path}>
                        <div className={classes.root}>
                            <Grid container>
                                {links.map((link)=> (
                                <Grid item xs={6}>
                                    <Paper variant="outlined" className={classes.paper}>
                                        <Grid container  justifyContent="center"
                                            alignItems="center">
                                                <Grid item={6} xs={12} sm={6} style={{}}>
                                                    <img src={link.image} style={{width : 'auto', height : '100px'}}/>
                                                </Grid>
                                                <Grid item sm={6} style={{margin : "0 auto",}} xs={12}>
                                                    <Link to={`${match.path}${link.link}`} style={{textDecoration: 'none',}}>
                                                    <Button variant="contained" color="primary" disableRipple disableElevation disableFocusRipple >{link.label}</Button>
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
        if(state.user && state.user.type && state.user.type === "HOD") {
           return(<div style={{margin : "70px"}}>
           <center> <Typography component="h6" variant="h5">FACULTY PROFILE REPORT</Typography></center>
            {sections.map((key,i)=> state.data[key] && <DataTable rows={state.data[key]} tableName={headerNames[i]} department={0}/> )}
           </div>)
        }
    }
    else {
        return <Redirect to="/login"/>
    }
}
