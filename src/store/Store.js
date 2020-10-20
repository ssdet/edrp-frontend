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
  }
}

componentDidMount() {
   serverRequest('?type=notices').then(response=>response.json()).then((response)=> {
          
          if(response.success) {
            this.setState({notices : response.notices});
          }
       
        })

   serverRequest('?type=quickLinks').then(response=>response.json()).then((response)=> {
          
          if(response.success) {
            this.setState({quickLinks : response.quickLinks});
          }
       
        })
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