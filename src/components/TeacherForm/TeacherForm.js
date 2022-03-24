import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class TeacherForm extends Component {
    render(){
        return(
            <div>
                <h1 style={{textAlign:'center'}}>Teacher form</h1>
                <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}>
                    <h3>Name: </h3>
                    <span  style={{marginLeft:'30px', marginTop:'5px'}}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" style={{width: '300px'}} />
                    </span>                   
                </div>
                <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}>
                    <h3>Designation: </h3>
                    <span  style={{marginLeft:'30px', marginTop:'5px'}}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" style={{width: '300px'}} />
                    </span>                   
                </div>
                <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}>
                    <h3>Name: </h3>
                    <span  style={{marginLeft:'30px', marginTop:'5px'}}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" style={{width: '300px'}} />
                    </span>                   
                </div>
                <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}>
                    <h3>Name: </h3>
                    <span  style={{marginLeft:'30px', marginTop:'5px'}}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" style={{width: '300px'}} />
                    </span>                   
                </div>
                <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}>
                    <h3>Name: </h3>
                    <span  style={{marginLeft:'30px', marginTop:'5px'}}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" style={{width: '300px'}} />
                    </span>                   
                </div>
                <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}>
                    <h3>Name: </h3>
                    <span  style={{marginLeft:'30px', marginTop:'5px'}}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" style={{width: '300px'}} />
                    </span>                   
                </div>



            </div>
        );
    }
}
export default TeacherForm;