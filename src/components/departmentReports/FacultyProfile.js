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
import { MyContext } from "../../store/Store";
import { Typography } from '@material-ui/core';
import AllSchools from '../Views/AllSchools';
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
