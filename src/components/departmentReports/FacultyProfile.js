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
import AllSchools, { DepartmentDetail } from '../Views/AllSchools';
import DepartmentProfileTableHOC from '../Views/DepartmentProfileTableHOC';


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
    let match = useRouteMatch();

    React.useEffect(() => {
        fetchFacultyProfile()
    }, [])

    if(state.isLoggedIn) {
         if(state.user && state.user.type && state.user.type !== 'FACULTY' && state.user.type !== 'HOD') {
           return(<div style={{margin : "70px"}}>
           <center> <Typography component="h6" variant="h5">DEPARTMENT PROFILE REPORT</Typography></center>
           <AllSchools/>
           </div>)
        }
        else if(state.user && state.user.type && state.user.type === 'FACULTY' || state.user.type === 'HOD') {
            return(<div style={{margin : "70px"}}>
            <center> <Typography component="h6" variant="h5">{state.user.type === 'FACULTY' ? 'FACULTY': 'DEPARTMENT'} PROFILE REPORT</Typography></center>
            <DepartmentProfileTableHOC/>
            </div>)
        }
        else {
            return <> Nothing To Show</>
        }

    }
    else {
        return <Redirect to="/login"/>
    }
}
