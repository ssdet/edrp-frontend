import React from 'react'
import { Chip, CircularProgress, Paper } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { Typography } from '@material-ui/core'
import { MyContext } from '../../store/Store'
import CriterionTable from './CriterionTable'
import { Divider } from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import { FACULTY_PROFILE_CONFIG } from '../Templates/FacultyProfileConfigurations/FacultyProfileConfiguration'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom" 
import DepartmentProfileTable from './DepartmentProfileTable'
import { Profile } from '../Profile/Profile'
import { ProfileDetails } from '../ProfileDetails/ProfileDetails'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CRITERION_DESCRIPTION = {
  "1" : "",
  "2" : "",
  "3" : "3. Any highlighting / mile stone event(s) of the department/ faculty/etc. during the academic year:",
  "4" : "4. Details of Publications (2020-21) (during 2020-21 only)",
  "5" : "5. Research projects ",
  "6" : "6. Consultancy (during 01.04.2020 to 31.03.2021)",
  "7" : "7. Participation of Faculty Members in Conferences/ Seminars/ Workshops/ Training Programme/Webinars (during 01.04.2020 to 31.03.2021)",
  "8" : "8. Participation of Faculty Members in orientation programme /refresher course/Faculty Development programmes/ Capacity Building programmes (during 01.04.2020 to 31.03.2021)    ",
  "9" : "9. Organizing Conferences/ Seminars/ Workshops/ Training Programme/Webinars/ refresher courses/MOOC courses developed/other events (during 01.04.2020 to 31.03.2021)    ",
  "10" : "10. Ph.D. Awarded (2020-21) (from 01.04.2020 to 31.03.2021)",
  "11" : "11. Performance in Public Examinations",
  "12" : "12. Serving in any committee/board outside the university",
  "13" : "13. Membership of scientific/academic bodies during 2020-21",
  "14" : "14. Nominations in boards/committees (outside HNBGU)",
  "15" : "15. Awards/Honors/Fellowships(including awards and recognitions/ visiting fellowship, etc.)",
  "16" : "16. Technical Festivals/event organised by the department/ school    ",
  "17" : "17. Important Visitors to the department during 2020-21",
  "18" : "18. MoU signed",
  "19" : "19. Additional activities/achievements/ information"
}

export default function DepartmentProfileTableHOC(props) {
    const classes = useStyles();
    const store = React.useContext(MyContext)
    //const [key, setKey] = React.useState(1)
    const [selected, setSelected] = React.useState({})
    const [department, setDepartment] = React.useState(0);
    const [options, setOptions] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const[facultyConfig, setFacultyConfig] = React.useState(FACULTY_PROFILE_CONFIG)
    let match = useRouteMatch();
    const [faculty_profile, setFaculty_profile] = React.useState({})

    const [profile, setProfile] = React.useState({})

    React.useEffect(()=> {
      if(store.state.user.type === 'FACULTY') {
        let new_config = JSON.parse(JSON.stringify(FACULTY_PROFILE_CONFIG));
        let excluded_columns = ['1','2','3', '10', '11', '16', '17', '18', '19']
        excluded_columns.map((key)=> delete new_config[key])

        setFacultyConfig(new_config);
      }
    }, [])

      const handleChange = (event) => {
        setDepartment(event.target.value);
        console.log(event.target.value)
      };


    // const handleClick = (key_)=> {
    //     setKey(key_)
    //     setSelected({[key_] : true})
    // }
    React.useEffect(()=> {

      if(store.state.user.type === 'FACULTY') {
        store.fetchLatestFacultyProfile()
       // axios.get('actual_faculty_profile').then((res)=> setFaculty_profile(res.data))
      }
        if(match.params.deptId) {
            setDepartment(parseInt(match.params.deptId))
        }
        store.fetchStepData(1,11)
        store.fetchAllStepsData()
        
        axios.get('department').then((res)=> {setOptions(res.data); setLoading(false)})
    }, [])

    if(loading) {
        return <div style={{width : "100%"}}>
          <center><Typography>Please Wait While We Generate The Report</Typography>
             <CircularProgress/>
             </center>
           </div> 
           
       }
    return (
        <div style={{"marginTop" : "15px", marginLeft : "15px", marginBottom : "15px", maxWidth : "97%"}}>
           {store.state.user.type !== 'FACULTY' && <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Department</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={department}
                  onChange={handleChange}
                >
                  <MenuItem value={0}>All</MenuItem>
                  {options.map((option)=> <MenuItem value={option.id}>{option.name}</MenuItem>)}
                  
                </Select>
              </FormControl>}

              {store.state.user.type === 'FACULTY' && <div style={{marginBottom : '10px'}}>
                <ProfileDetails data={store.state.facultyResume} user={store.state.user}/>
                </div>}

            {Object.keys(facultyConfig).map((key_)=>(<>
            <Paper elevation={2} variant="outlined">
            <TableContainer style={{border: "1px solid gray", marginBottom: "20px"}}>
                <Typography variant="h6" component="h5" style={{marginBottom : "-20px", marginTop : "10px", marginLeft : "20px"}}><b>{CRITERION_DESCRIPTION[key_]}</b> </Typography>
                {Object.keys(facultyConfig[key_]).map( (key,i) => (<>
                         <DepartmentProfileTable criterion={key_} step={key} fields={facultyConfig[key_][key].fields}  criterionDescription={CRITERION_DESCRIPTION[key_]} department={department} loading={loading}/>
                  </>) ) }
                </TableContainer>
                </Paper>
            </>)
            )}
           
           
            
            {/* {Object.keys(CRITERION_CONFIG).map((key)=>
            <Criterion criterion={CRITERION_CONFIG[key]} criterionId={key} criterionDescription={CRITERION_DESCRIPTION[key]}/>
            )} */}
        </div>
    )
}
