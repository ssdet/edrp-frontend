import axios from 'axios';
import React from 'react';
import { withSnackbar } from 'notistack';
import { CRITERION_CONFIG } from '../components/Templates/CriterionConfiguration/CriterionConfig';
import { FACULTY_PROFILE_CONFIG } from '../components/Templates/FacultyProfileConfigurations/FacultyProfileConfiguration';

const MyContext = React.createContext();


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
    user : localStorage.getItem('iqac_user') ? JSON.parse(localStorage.getItem('iqac_user')) : {}

  }
}

componentDidMount() {

}

  render() {
    return (
      <MyContext.Provider value = {{ 
        state: this.state,

      loginUser : (data) => {
        // this.setState({
        //   token : "",
        //   isLoggedIn : true,
        // })
        //localStorage.setItem('token', "res.data.auth_token")
        axios.post('auth/token/login/', {
          email : data.username,
          password : data.password,
        }).then((res)=> {
          console.log(res)
          this.setState({
            token : res.data.auth_token,
          })
          localStorage.setItem('token', res.data.auth_token)

          axios.get('auth/users/me/', {
            headers: {
              Authorization : `Token ${res.data.auth_token}`,
            }
          }).then((res3)=> {
            this.props.enqueueSnackbar("Logged In", { 
              variant: 'default',
          })
            this.setState({
              isLoggedIn : true,
              user : res3.data
            }, ()=> {
              window.location.href = '/'
            })
            console.log( res3.data)
            })
         // window.location.href = '/'
        })
          .catch((err)=> {
            if(err.message === 'Request failed with status code 400') {
              this.props.enqueueSnackbar('Wrong Email Or Password', { 
                variant: 'error',
            })
            }

            // localStorage.removeItem('token')
            // window.location.reload()
          })
    },
    resetPassword : async (e) => {
      axios.post('reset_password/', new FormData(e.target)).then((response)=> {
        this.props.enqueueSnackbar("Password Updated", { 
          variant: 'default',
      })
        localStorage.clear()
        window.location.href = '/logout'
      })
      .catch((err)=> {

      })
    },
    aboutUser : ()=> {
      axios.get('auth/users/me/').then((res3)=> {
        this.setState({
          user : res3.data
        })
        localStorage.setItem('iqac_user', JSON.stringify(res3.data))
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
         localStorage.removeItem('iqac_user')
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
            this.props.enqueueSnackbar(err.message, { 
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

      addBtnFaculty : async (criterion, step, entry)=> {

        let facultyProfile = await (await axios.get(`faculty_profile`)).data
        console.log(facultyProfile)
        axios.post(`fp${criterion}${step}/`, {...entry, faculty_profile : facultyProfile.id}).then(async (res)=> {
          entry.id = res.data.id
          let temp = []

          if(this.state.data[`fp${criterion}${step}`]) {
            temp = this.state.data[`fp${criterion}${step}`]
          }

          temp.push(entry)
          
          this.setState({
            data : {
              ...this.state.data,
              [`fp${criterion}${step}`] : temp
            }
          })
          this.props.enqueueSnackbar("Data Saved", { 
            variant: 'default',
        })
          })
        .catch((err) => {
                      this.props.enqueueSnackbar(err.message, { 
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
            this.props.enqueueSnackbar(err.message, { 
            variant: 'warning',
        })
        })
      },

      fetchFacultyProfile : async()=> {
        let keys = ['evaulative-report', 'research-projects', 'participations', 'events-organised', 'other-activity', 'phd-awarded', 'book', 'biodata']
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

      fetchAllStepsData : async()=> {
        let arr2 = ["c111", "c112", "c121", "c131", "c132", "c141", "c142", "c211", "c221", "c231", "c232", "c233", "c241", "c242", "c261", "c311", "c312", "c321", "c331", "c332", "c333", "c341", "c342", "c343", "c344", "c345", "c346", "c347", "c351", "c352", "c361", "c362", "c363", "c371", "c372", "c373", "c412", "c422", "c431", "c432", "c433", "c511", "c512", "c513", "c514", "c521", "c522", "c523", "c524", "c531", "c541", "c542", "c543", "c544", "c621", "c631", "c632", "c633", "c711", "c712", "c714", "c716", "c717", "c721", "c731", "c741", "c781", "c791"]
        let ct = {}
        let extras = ["id", "dept"]
        Object.keys(CRITERION_CONFIG).map((key_)=>{
          ct[key_] = []
          {Object.keys(CRITERION_CONFIG[key_]).map( (key,i) => {
            ct[key_].push(`c${key_}${key}_set`)
          })
        }
        extras.map((option)=> ct[key_].push(option))
        })

        console.log(ct)
        this.setState({
          allStepsLoading : true
        })
        let arr = ['criterionone_detail', 'criteriontwo_detail', 'criterionthree_detail', 'criterionfour_detail', 'criterionfive_detail', 'criterionsix_detail', 'criterionseven_detail']
        await arr.map( async (step)=> {

          let res = await (await axios.get(`${step}`))
          if(res.data) {
            res.data.map((individual_item)=> {
              Object.keys(individual_item).map((step)=> {
                if(step.includes("_set")) {
                  let newKey = step.replace("_set", "")
                  let data = this.state.data[newKey] ? this.state.data[newKey].concat(individual_item[step]) : individual_item[step]
                  this.setState({
                    data : {
                      ...this.state.data,
                      [newKey] : data,
                      [`${newKey}loading`] : false
                    }
                  })
                }
                else {
                  this.setState({
                    data : {
                      ...this.state.data,
                      [step] :individual_item[step],
                      [`${step}loading`] : false
                    }
                  })
                }
              })
            })

          } 
        })

        this.setState({
          allStepsLoading : false
        })
        console.log(arr)
      },

      fetchAllFacultyStepData : async()=> {
        let ct = {}
        let extras = ["id", "dept"]
        Object.keys(FACULTY_PROFILE_CONFIG).map((key_)=>{
          ct[key_] = []
          {Object.keys(FACULTY_PROFILE_CONFIG[key_]).map( (key,i) => {
            ct[key_].push(`fp${key_}${key}_set`)
          })
        }
        extras.map((option)=> ct[key_].push(option))
        })

        console.log(ct)
        this.setState({
          allStepsLoading : true
        })
        let arr = ['faculty_profile_detail']
        await arr.map( async (step)=> {

          let res = await (await axios.get(`${step}`))
          if(res.data) {
            res.data.map((individual_item)=> {
              Object.keys(individual_item).map((step)=> {
                if(step.includes("_set")) {
                  let newKey = step.replace("_set", "")
                  let data = this.state.data[newKey] ? this.state.data[newKey].concat(individual_item[step]) : individual_item[step]
                  this.setState({
                    data : {
                      ...this.state.data,
                      [newKey] : data,
                      [`${newKey}loading`] : false
                    }
                  })
                }
                else {
                  this.setState({
                    data : {
                      ...this.state.data,
                      [step] :individual_item[step],
                      [`${step}loading`] : false
                    }
                  })
                }
              })
            })

          } 
        })

        this.setState({
          allStepsLoading : false
        })
        console.log(arr)
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

      },

      fetchAllSchools: async()=> {
        let res = await (await axios.get(`school/`)).data
        this.setState({
          schools: res
        })
      },
      }}
      	>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export {MyContext};

export default withSnackbar(MyProvider);