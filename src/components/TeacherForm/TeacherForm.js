import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

class TeacherFormComponent extends Component {
    render(){
        return(
            <div>
                <h1 style={{textAlign:'center'}}>Faculty Profile form</h1>

                <div style={{marginTop:'50px'}}>
                    <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
                        <h3>Name: </h3>
                        <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                            <TextField id="name" label="Name" variant="outlined" style={{width: '250px'}}  name="name" required/>
                        </span>                   
                    </div>

                    <div style={{display:'flex', marginBottom:'30px'}}>                    
                        <div  style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
                            <h3>Mobile Number: </h3>
                            <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                                <TextField id="mobilenumber" label="Mobile Number" variant="outlined" style={{width: '250px'}} name="mobilenumber" />
                            </span>                   
                        </div>
                        <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
                            <h3>Email ID: </h3>
                            <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                                <TextField id="emailid" label="Email ID" variant="outlined" style={{width: '250px'}} name="emailid" required/>
                            </span>                   
                        </div>
                    </div>

                    <div style={{display:'flex', marginBottom:'30px'}}>
                        <div  style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
                            <h3>Department:</h3>
                            <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                                <TextField id="department" label="Department" variant="outlined" style={{width: '250px'}} name="department" required/>
                            </span>  
                        </div>
                        <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
                            <h3>Designation: </h3>
                            <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                                <TextField id="designation" label="Designation" variant="outlined" style={{width: '250px'}} name="designation" required/>
                            </span>   
                        </div>
                        <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
                            <h3>Campus: </h3>
                            <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                                <TextField id="campus" label="Campus" variant="outlined" style={{width: '250px'}} name="campus" required/>
                            </span>                 
                        </div>
                    </div>

                    <div style={{display:'flex', marginBottom:'30px'}}>
                        <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
                            <h3>Education Qualification: </h3>
                            <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                                <TextField id="educationqualification" label="Education Qualification" variant="outlined" name="educationqualification" style={{width: '250px'}} />
                            </span>                   
                        </div>
                        <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px'}}>
                            <h3>Teaching Experience: </h3>
                            <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                                <TextField id="teachingexperience" label="Teaching Experience" variant="outlined"  name="teachingexperience" style={{width: '250px'}} />
                            </span>                   
                        </div>
                        <div style={{display:'flex', marginBottom:'30px', marginLeft:'20px' }}>
                            <h3>Research Experience: </h3>
                            <span  style={{marginLeft:'20px', marginTop:'5px'}}>
                                <TextField label="Research Experience" variant="outlined" style={{width: '250px'}} id="researchexperience" name="researchexperience" />
                            </span>                   
                        </div>
                    </div>


                    <div style={{display:'flex', marginBottom:'90px', marginLeft:'20px'}}>
                        <h3>Area of Interest: </h3>
                        <span  style={{marginLeft:'30px', marginTop:'5px'}}>
                            <TextField
                                id="areaofinterest"
                                label="Area of Interest"
                                multiline
                                rows={4}
                                style={{width: '600px'}} 
                                name="areaofinterest"
                            />
                        </span>                   
                    </div>

                    <div style={{display:'flex', marginBottom:'90px', marginLeft:'20px'}}>
                        <h3>Upload Profile Photograph here: </h3>
                        <Button style={{marginLeft:'30px'}} id="photographbutton" variant="contained" component="label" name="photographbutton">
                            Upload File
                            <input id="photographinput" type="file" hidden name="photographinput"/>
                        </Button>
                    </div>

                    <div style={{display:'flex', justifyContent:'center' ,marginBottom:'90px'}}>
                    
                        <Button style={{marginLeft:'30px', width:'150px', height:'40px'}} variant="contained" color="primary" name="submitbutton" id="submitbutton">
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
export const TeacherForm= TeacherFormComponent;