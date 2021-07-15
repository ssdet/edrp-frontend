import React from 'react'
import { MyContext } from '../../store/Store'
import { CRITERION_CONFIG } from './CriterionConfiguration/CriterionConfig'
import Criterion from "./Criterion"
import { Chip } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { Typography } from '@material-ui/core'

const CRITERION_DESCRIPTION = {
    "1" : "CURRICULAR ASPECTS",
    "2" : "TEACHING-LEARNING AND EVALUATION",
    "3" : "RESEARCH, INNOVATIONS AND EXTENSIONS",
    "4" : "INFASTRUCTURE AND LEARNING RESOURCES",
    "5" : "STUDENT SUPPORT AND PROGRESSION",
    "6" : "GOVERNANCE, LEADERSHIP AND MANAGEMENT",
    "7" : "INSTITUTIONAL VALUES AND BEST PRACTICES",
}

export default function CriterionHOC() {
    const store = React.useContext(MyContext)
    const [key, setKey] = React.useState(1)
    const [selected, setSelected] = React.useState({})

    const handleClick = (key_)=> {
        setKey(key_)
        setSelected({[key_] : true})
        store.goToStep(0)
    }
    React.useEffect(()=> {
        store.fetchAllStepsData()
    }, [])
    return (
        <div style={{"marginTop" : "15px", marginLeft : "15px", marginBottom : "15px", maxWidth : "97%"}}>
            <Typography variant="h6" align="center" style={{margin : "15px", "text" : "center"}}>
                Annual Quality Assurance Report (IQAC) Module
            </Typography>
            <center>
            {Object.keys(CRITERION_CONFIG).map((key_)=>
             <Chip key={key_} clickable style={{marginLeft : "5px", marginRight : "5px", fontSize : "1em"}} variant={key === key_ ? "default" : "outlined"} color="primary" icon={<AssignmentIcon />} label={`Criterion ${key_}`} onClick={()=>handleClick(key_)}/>
            )}
            </center>
           
            <Criterion criterion={CRITERION_CONFIG[key]} criterionId={key} criterionDescription={CRITERION_DESCRIPTION[key]}/>
            {/* {Object.keys(CRITERION_CONFIG).map((key)=>
            <Criterion criterion={CRITERION_CONFIG[key]} criterionId={key} criterionDescription={CRITERION_DESCRIPTION[key]}/>
            )} */}
        </div>
    )
}
