import React from 'react'
import { MyContext } from '../../store/Store'
import Criterion from "./Criterion"
import { Chip } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { Typography } from '@material-ui/core'
import { FACULTY_PROFILE_CONFIG } from './FacultyProfileConfigurations/FacultyProfileConfiguration'
import FacultyProfile from './FacultyProfile'

const FP_DESCRIPTION = {
    "3" : "Any highlighting / mile stone event(s) of the department/ faculty/etc. during the academic year",
    "4" : "Details of Publications (2020-21) (during 2020-21 only)",
    "5" : "Research projects ",
    "6" : "Consultancy (during 01.04.2020 to 31.03.2021)",
    "7" : "Participation of Faculty Members in Conferences/ Seminars/ Workshops/ Training Programme/Webinars (during 01.04.2020 to 31.03.2021)",
    "8" : "Participation of Faculty Members in orientation programme /refresher course/Faculty Development programmes/ Capacity Building programmes (during 01.04.2020 to 31.03.2021)    ",
    "9" : "Organizing Conferences/ Seminars/ Workshops/ Training Programme/Webinars/ refresher courses/MOOC courses developed/other events (during 01.04.2020 to 31.03.2021)    ",
    "10" : "Ph.D. Awarded (2020-21) (from 01.04.2020 to 31.03.2021)",
    "11" : " Performance in Public Examinations",
    "12" : "Serving in any committee/board outside the university",
    "13" : "Membership of scientific/academic bodies during 2020-21",
    "14" : "Nominations in boards/committees (outside HNBGU)",
    "15" : " Awards/Honors/Fellowships(including awards and recognitions/ visiting fellowship, etc.)",
    "16" : " Technical Festivals/event organised by the department/ school    ",
    "17" : "Important Visitors to the department during 2020-21",
    "18" : "MoU signed",
    "19" : "Additional activities/achievements/ information"
}

const SHOW_TO_FAC_MAP = {
    "4" : true,
    "5" : true,
    "6" : true,
    "7" : true,
    "8" : true,
    "9" : true,
    "12" : true,
    "13" : true,
    "14" : true,
    "15" : true,

  }

  const ALLOWED_FACULTY_STEPS = {
    "1" : [],
    "2" : [],
    "3" : [],
    "4" : ['1', '2', '3', '4'],
    "5" : ['1'],
    "6" : ['1'],
    "7" : ['1'],
    "8" : ['1'],
    "9" : ['1'],
    "10" : [],
    "11" : [],
    "12" : ['1'],
    "13" : ['1'],
    "14" : ['1'],
    "15" : ['1'],
    "16" : [],
    "17" : [],
    "18" : [],
    "19" : []
  }

export default function FacultyProfileHOC() {
    const store = React.useContext(MyContext)
    const [key, setKey] = React.useState(1)
    const [selected, setSelected] = React.useState({})
    const [criterionConfig, setCriterionConfig] = React.useState(FACULTY_PROFILE_CONFIG)

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
        store.fetchAllFacultyStepData()
        let CRITERION_CONFIGURATION = FACULTY_PROFILE_CONFIG
        if(store.state.user && store.state.user.type && store.state.user.type === 'FACULTY') {
            handleClick('4')
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
            handleClick('3')
        }
    }, [])

    React.useEffect(()=> {
        console.log(criterionConfig)
    },[])
    return (
        <div style={{"marginTop" : "15px", marginLeft : "15px", marginBottom : "15px", maxWidth : "97%"}}>
            <Typography variant="h6" align="center" style={{margin : "15px", "text" : "center"}}>
                {store.state.user.type === 'HOD' ? 'Department' : 'Faculty'} Profile Module
            </Typography>
            <center>
            {Object.keys(criterionConfig).map((key_)=>
            !shouldBeShownToFaculty(key_) && <Chip key={key_} clickable style={{marginLeft : "5px", marginRight : "5px", marginBottom : "15px", fontSize : "1em"}} variant={key === key_ ? "default" : "outlined"} color="primary" icon={<AssignmentIcon />} label={`Module ${key_}`} onClick={()=>handleClick(key_)}/>
            )}
            </center>
           
           {criterionConfig[key] && <FacultyProfile criterion={criterionConfig[key]} criterionId={key} criterionDescription={FP_DESCRIPTION[key]}/>}
            {/* {Object.keys(CRITERION_CONFIG).map((key)=>
            <Criterion criterion={CRITERION_CONFIG[key]} criterionId={key} criterionDescription={CRITERION_DESCRIPTION[key]}/>
            )} */}
        </div>
    )
}
