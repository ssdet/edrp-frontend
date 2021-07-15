import React from 'react'
import { Chip, CircularProgress, Paper } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { Typography } from '@material-ui/core'
import { MyContext } from '../../store/Store'
import CriterionTable from './CriterionTable'
import { Divider } from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import { CRITERION_CONFIG } from '../Templates/CriterionConfiguration/CriterionConfig'
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
    "1" : "I : CURRICULAR ASPECTS",
    "2" : "II : TEACHING-LEARNING AND EVALUATION",
    "3" : "III : RESEARCH, INNOVATIONS AND EXTENSIONS",
    "4" : "IV : INFASTRUCTURE AND LEARNING RESOURCES",
    "5" : "V : STUDENT SUPPORT AND PROGRESSION",
    "6" : "VI : GOVERNANCE, LEADERSHIP AND MANAGEMENT",
    "7" : "VII : INSTITUTIONAL VALUES AND BEST PRACTICES",
}

export default function CriterionTableHOC(props) {
    const classes = useStyles();
    const store = React.useContext(MyContext)
    //const [key, setKey] = React.useState(1)
    const [selected, setSelected] = React.useState({})
    const [department, setDepartment] = React.useState(0);
    const [options, setOptions] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    let match = useRouteMatch();

      const handleChange = (event) => {
        setDepartment(event.target.value);
        console.log(event.target.value)
      };


    // const handleClick = (key_)=> {
    //     setKey(key_)
    //     setSelected({[key_] : true})
    // }
    React.useEffect(()=> {
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
            <FormControl className={classes.formControl}>
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
              </FormControl>

            {Object.keys(CRITERION_CONFIG).map((key_)=>(<>
            <Paper elevation={2} variant="outlined">
            <TableContainer style={{border: "1px solid gray", marginBottom: "20px"}}>
                <Typography variant="h6" component="h5" style={{marginBottom : "-20px", marginTop : "10px", marginLeft : "20px"}}><b>{CRITERION_DESCRIPTION[key_]}</b> </Typography>
                {Object.keys(CRITERION_CONFIG[key_]).map( (key,i) => (<>
                         <CriterionTable criterion={key_} step={key} fields={CRITERION_CONFIG[key_][key].fields}  criterionDescription={CRITERION_DESCRIPTION[key_]} department={department} loading={loading}/>
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
