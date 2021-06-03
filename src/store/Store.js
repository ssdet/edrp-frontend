import axios from 'axios';
import React from 'react';
import {GLOBAL_URL} from '../config/Config.js';

const MyContext = React.createContext();


const serverRequest = async(params)=> {
      return await fetch(GLOBAL_URL + params).then((response)=>{
        return response;
      }) 

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
    c1s1Rows : [],
    c1s2Rows : [],
    c1s3Rows : [],
    c1s4Rows : [],
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
        fetchNotices :()=> {
          serverRequest('?type=notices').then((response)=> {

          console.log(response);
       
        })
        }, 
       fetchQuickLinks : () => {
      },


      loginUser : (data) => {
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


      nextStep : ()=> {
        document.body.scrollTop = 220;
        document.documentElement.scrollTop = 220;
        this.setState({step : this.state.step + 1})
      },
      goToStep : (val)=> {
        let step = val +1
        this.setState({step : step})
      },
      prevStep : ()=> {
        document.body.scrollTop = 220;
        document.documentElement.scrollTop = 220;
        this.setState({step : this.state.step - 1})
      },
      c1s2Add : (cName, cDate, pName, pDate)=> {
        let c1s2row = this.state.c1s2Rows;
        c1s2row.push({
          cName, cDate, pName, pDate
        })
        this.setState({
          c1s2Rows : c1s2row  
        })
      },
      c1s2Remove : ()=> {
        let c1s2row = this.state.c1s2Rows;
        c1s2row.pop()
        this.setState({
          c1s2Rows : c1s2row
        })
      },
      c1s1Add : (pName, pCode, pDate)=> {
        let c1s1row = this.state.c1s1Rows;
        c1s1row.push({
         pName, pCode, pDate
        })
        this.setState({
          c1s1Rows : c1s1row
        })
      },
      c1s1Remove : ()=> {
        let c1s1row = this.state.c1s1Rows;
        c1s1row.pop()
        this.setState({
          c1s1Rows : c1s1row
        })
      },
      c1s3Add : (pName, pDate)=> {
        let temp = this.state.c1s3Rows;
        temp.push({
         pName, pDate
        })
        this.setState({
          c1s3Rows : temp
        })
      },
      c1s3Remove : ()=> {
        let temp = this.state.c1s3Rows;
        temp.pop()
        this.setState({
          c1s3Rows : temp
        })
      },

      addBtn : (critertion, step, entry)=> {
        let temp = []
        if(this.state.data[`c${critertion}s${step}`]) {
          temp = this.state.data[`c${critertion}s${step}`]
        }
        temp.push(entry)
        this.setState({
          data : {
            ...this.state.data,
            [`c${critertion}s${step}`] : temp
          }
        })
      },
      removeBtn : (critertion, step)=> {
        let temp = this.state.data[`c${critertion}s${step}`];
        temp.pop()
        this.setState({
          data : {
            ...this.state.data,
            [`c${critertion}s${step}`] : temp
          }
        })
      }

      }}
      	
      	>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export {MyContext};

export default MyProvider;