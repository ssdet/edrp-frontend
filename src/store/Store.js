import axios from 'axios';
import React from 'react';
import {GLOBAL_URL} from '../config/Config.js';
import { withSnackbar } from 'notistack';

const MyContext = React.createContext();


const serverRequest = async(params)=> {
      return await fetch(GLOBAL_URL + params).then((response)=>{
        return response;
      }) 

}

const CRITERION_STR_MAP = {
  1 : "criterionone",
  2 : "criteriontwo",
  3 : "criterionthree",
  4 : "criterionfour",
  5 : "criterionfive",
  6 : "criterionsix",
  7 : "criterionseven"
}

// Then create a provider Component
class MyProvider extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    isLoggedIn : localStorage.getItem('token') ? true : false,
    notices : [],
    quickLinks : [],
    criterion : 1,
    step : 1,
    stepLabel : [
      "Curriculam Design & Devlopment",
      "Programmes/ Courses Focussed On Employability/Enterpreneurship/Skill Development During The Acedemic Year",
      "New Programmes/ Courses Introduced during the Acedemic Year",
      "Programmes in Which CBCS/Elective Course System Implemented at the University Level During Acedemic Year",
      "Value-Added courses imparting transferable and life skills offered during the year",
      "Field Projects/ Internships under taken during the year",
      "Whether Structured feedback recieved from all the stakeholders"
    ],
    data : {},
    user : {}

  }
}

componentDidMount() {

}

  render() {
    return (
      <MyContext.Provider value = {{ 
        state: this.state,

      loginUser : (data) => {
        this.setState({
          token : "",
          isLoggedIn : true
        })
        //localStorage.setItem('token', "res.data.auth_token")
        axios.post('auth/token/login/', {
          email : data.username,
          password : data.password,
        }).then((res)=> {
          console.log(res)
          this.setState({
            token : res.data.auth_token,
            isLoggedIn : true
          })
          localStorage.setItem('token', res.data.auth_token)
        })
        .then((res2)=> {
          axios.get('auth/users/me/').then((res3)=> {
            this.setState({
              user : res3.data
            })
            window.location.reload()
            console.log( res3.data)
            })
          })
          .catch((err)=> {
            localStorage.removeItem('token')
            window.location.reload()
          })
    },
    aboutUser : ()=> {
      axios.get('auth/users/me/').then((res3)=> {
        this.setState({
          user : res3.data
        })
        console.log( res3.data)
        })
    },
      logoutUser : () => {
        axios.post('auth/token/logout/')
        .then((res)=> {
         this.setState({
           token : null,
           isLoggedIn : false
         })
         localStorage.removeItem('token')
         window.location.reload();
        })
      },

      postCriterionStep : (stepId, stepData)=> {
        axios.post(`${stepId}/`).then((res3)=> {
          this.setState({
            user : res3.data
          })
          })
      },

      

      nextStep : ()=> {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.setState({step : this.state.step + 1})
      },
      goToStep : (val)=> {
        let step = val +1
        this.setState({step : step})
      },
      prevStep : ()=> {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.setState({step : this.state.step - 1})
      },
      addBtn : async (critertion, step, entry)=> {
        let temp = []
        if(this.state.data[`c${critertion}${step}`]) {
          temp = this.state.data[`c${critertion}${step}`]
        }
        temp.push(entry)

        let criterionId = await (await axios.get(`${CRITERION_STR_MAP[critertion]}`)).data
        console.log(criterionId )
        axios.post(`c${critertion}${step}/`, {...entry, criterion : criterionId.id}).then(async (res)=> {
          console.log(criterionId)
          this.setState({
            data : {
              ...this.state.data,
              [`c${critertion}${step}`] : temp
            }
          })
          this.props.enqueueSnackbar("Data Saved", { 
            variant: 'default',
        })
          })
        .catch((err) => {
          this.props.enqueueSnackbar(err, { 
            variant: 'warning',
        })
        })

      },
      removeBtn : (critertion, step)=> {
        let temp = this.state.data[`c${critertion}${step}`];
        temp.pop()
        this.setState({
          data : {
            ...this.state.data,
            [`c${critertion}${step}`] : temp
          }
        })
        
        this.props.enqueueSnackbar("Data Removed", { 
          variant: 'default',
      })
      },

      addBtnFaculty : async (key, entry)=> {

        let facultyProfile = await (await axios.get(`faculty_profile`)).data
        console.log(facultyProfile)
        axios.post(`${key}/`, {...entry, faculty_profile : facultyProfile.id}).then(async (res)=> {
          entry.id = res.data.id
          let temp = []

          if(this.state.data[`${key}`]) {
            temp = this.state.data[`${key}`]
          }

          temp.push(entry)
          
          this.setState({
            data : {
              ...this.state.data,
              [`${key}`] : temp
            }
          })
          this.props.enqueueSnackbar("Data Saved", { 
            variant: 'default',
        })
          })
        .catch((err) => {
          this.props.enqueueSnackbar(err, { 
            variant: 'warning',
        })
        })

      },

      removeBtnFaculty : async(key,id)=> {
        let temp = this.state.data[`${key}`];
        temp.pop()

        let facultyProfile = await (await axios.get(`faculty_profile`)).data
        console.log(facultyProfile)
        axios.delete(`${key}/${id}/`,).then(async (res)=> {
          this.setState({
            data : {
              ...this.state.data,
              [`${key}`] : temp
            }
          })
          this.props.enqueueSnackbar("Data Deleted", { 
            variant: 'warning',
        })
          })
        .catch((err) => {
          this.props.enqueueSnackbar(err, { 
            variant: 'warning',
        })
        })
      },

      fetchFacultyProfile : async()=> {
        let keys = ['evaulative-report', 'research-projects', 'participations', 'events-organised', 'other-activity', 'phd-awarded']

        keys.map(async (key)=> {
          let res = await (await axios.get(`${key}`)).data
          this.setState({
            data : {
              ...this.state.data,
              [`${key}`] : res
            }
          })
        })
        
      },

      fetchStepData : async(critertion, step)=> {
        let res = await (await axios.get(`c${critertion}${step}`)).data
        console.log(res)
        // this.setState({
        //   data : {
        //     ...this.state.data,
        //     [`c${critertion}${step}`] : res
        //   }
        // })

      }
      }}
      	>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export {MyContext};

export default withSnackbar(MyProvider);