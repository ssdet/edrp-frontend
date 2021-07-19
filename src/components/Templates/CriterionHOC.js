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

const SHOW_TO_FAC_MAP = {
    "2" : true,
    "3" : true,
    "6" : true
  }

  const ALLOWED_FACULTY_STEPS = {
    "1" : [],
    "2" : ['42'],
    "3" : ['21', '31', '33', '41', '42', '44', '45', '46', '47', '51', '52'],
    "4" : [],
    "5" : [],
    "6" : ['31', '32'],
    "7" : [],
  }

export default function CriterionHOC() {
    const store = React.useContext(MyContext)
    const [key, setKey] = React.useState(1)
    const [selected, setSelected] = React.useState({})
    const [criterionConfig, setCriterionConfig] = React.useState(CRITERION_CONFIG)

    const shouldBeShownToFaculty = (key)=> {
        if(store.state.user && store.state.user.type && store.state.user.type === 'FACULTY') {
            if(SHOW_TO_FAC_MAP[key]) {
                return false;
            }
            else {
                return true;
            }
        }
        return false;
    }

    const handleClick = (key_)=> {
        setKey(key_)
        setSelected({[key_] : true})
        store.goToStep(0)
    }
    React.useEffect(()=> {
        store.fetchAllStepsData()
        let CRITERION_CONFIGURATION = CRITERION_CONFIG
        if(store.state.user && store.state.user.type && store.state.user.type === 'FACULTY') {
            handleClick('2')
            Object.keys(CRITERION_CONFIGURATION).map((criterionKey)=> {
                let allowedSteps = {}
                ALLOWED_FACULTY_STEPS[criterionKey].map((stepKey)=> {
                    allowedSteps =  {...allowedSteps, [stepKey] : CRITERION_CONFIGURATION[criterionKey][stepKey]}
                })
                if(ALLOWED_FACULTY_STEPS[criterionKey].length > 0) {
                    CRITERION_CONFIGURATION[criterionKey] = allowedSteps;
                }
                else {
                    delete CRITERION_CONFIGURATION[criterionKey];
                }
                
            })

            setCriterionConfig(CRITERION_CONFIGURATION)
            console.log(CRITERION_CONFIGURATION)
        }
        else {
            handleClick('1')
        }
    }, [])
    return (
        <div style={{"marginTop" : "15px", marginLeft : "15px", marginBottom : "15px", maxWidth : "97%"}}>
            <Typography variant="h6" align="center" style={{margin : "15px", "text" : "center"}}>
                Annual Quality Assurance Report (IQAC) Module
            </Typography>
            <center>
            {Object.keys(criterionConfig).map((key_)=>
            !shouldBeShownToFaculty(key_) && <Chip key={key_} clickable style={{marginLeft : "5px", marginRight : "5px", fontSize : "1em"}} variant={key === key_ ? "default" : "outlined"} color="primary" icon={<AssignmentIcon />} label={`Criterion ${key_}`} onClick={()=>handleClick(key_)}/>
            )}
            </center>
           
           {criterionConfig[key] && <Criterion criterion={criterionConfig[key]} criterionId={key} criterionDescription={CRITERION_DESCRIPTION[key]}/>}
            {/* {Object.keys(CRITERION_CONFIG).map((key)=>
            <Criterion criterion={CRITERION_CONFIG[key]} criterionId={key} criterionDescription={CRITERION_DESCRIPTION[key]}/>
            )} */}
        </div>
    )
}
