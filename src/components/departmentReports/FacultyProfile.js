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


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        textDecoration: 'none',
        maxWidth: "1000px",
        margin : "0 auto",
        padding : theme.spacing(1),
        height : "700px"
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
    const [links, setLinks] = React.useState([
        {
            link : "evaluative-report",
            image : i1,
            label : "Evalutive Report"
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
        }
    ])
    let match = useRouteMatch();

    React.useEffect(() => {
        fetchFacultyProfile()
    }, [])

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
