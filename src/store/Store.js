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
    data : {}

  }
}

componentDidMount() {
  //  serverRequest('?type=notices').then(response=>response.json()).then((response)=> {
          
  //         if(response.success) {
  //           this.setState({notices : response.notices});
  //         }
       
  //       })

  //  serverRequest('?type=quickLinks').then(response=>response.json()).then((response)=> {
          
  //         if(response.success) {
  //           this.setState({quickLinks : response.quickLinks});
  //         }
       
  //       })
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
        serverRequest('?type=quickLinks').then((response)=> {
        
         console.log(response);
       
       }) 
      },
      nextStep : ()=> {
        this.setState({step : this.state.step + 1})
      },
      prevStep : ()=> {
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