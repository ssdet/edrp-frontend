import React, {Component} from 'react';
import styles from './ProfileDetails.style';
import { withStyles} from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core'
import { Edit } from '@material-ui/icons';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { TeacherForm } from '../TeacherForm/TeacherForm';


class ProfileDetailsComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
      }
   
    render(){
        const {classes, data, user}=this.props
        return(
            <div>
                <Typography variant="h5" style={{display:'flex', justifyContent:'center', marginBottom : '10px'}}> Resume</Typography>
                {user.type === 'FACULTY' && <Button onClick={(e)=> this.setState({open : true})}  variant="contained" color="primary" name="submitbutton" disableElevation disableRipple style={{marginBottom : '10px', marginLeft : '30px'}}>
                <Edit style={{marginRight : '10px'}}/> Update Resume
                   </Button>}

                   <Dialog onClose={()=> {
                       this.setState({
                           open : false
                       })
                   }} aria-labelledby="simple-dialog-title" open={this.state.open}>
                    <DialogTitle>Update Resume </DialogTitle>
                    <TeacherForm closeFunc={()=> {this.setState({open : false})}}/>
                   </Dialog>
                <div>
                <table className={classes.table}>
                    <tr>
                        <th className={classes.th}>Name</th>
                        <th className={classes.th}>{data.name}</th>
                        <td rowspan="9" colspan="2" className={classes.td}>    
                        <center>
                        <img className={classes.img} style={{margin : "0 auto"}} src='https://user-images.githubusercontent.com/22274195/160230059-825a1040-e684-4145-ac05-5c7d1a0f02c6.PNG' />

                            </center>          
                        </td>
                    </tr>

                    <tr>
                        <td  className={classes.td}>Designation</td>
                        <td className={classes.td}>{data.designation}</td>

                    </tr>
                    <tr>
                        <td className={classes.td}>Department</td>
                        <td className={classes.td}>{user.dept.name}</td>

                    </tr>
                    <tr>
                        <td className={classes.td}>Duty</td>
                        <td className={classes.td}>{data.duty}</td>

                    </tr>
                    <tr>
                        <td className={classes.td}>Orcid Id</td>
                        <td className={classes.td}>{data.orcid_id}</td>

                    </tr>
                    <tr>
                        <td className={classes.td}>Mobile Number</td>
                        <td className={classes.td}>{data.mobile}</td>

                    </tr>
                    <tr>
                        <td className={classes.td}>Email id </td>
                        <td className={classes.td}>{data.email_secondary}</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Teaching Experience</td>
                        <td className={classes.td}>{data.teaching_experience}</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Research Experience</td>
                        <td className={classes.td}>{data.research_experience}</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Education Qualification</td>
                        <td colspan="2" className={classes.td}>{data.educational_qualification}</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Area of Interest</td>
                        <td colspan="2" className={classes.td} >
                        {data.areas_of_interest}
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Achievement</td>
                        <td colspan="2" className={classes.td} >
                        {data.achievements}
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Address</td>
                        <td colspan="2" className={classes.td} >
                        {data.address}
                        </td>
                    </tr>
                </table>

                <Typography variant="h5" style={{display:'flex', justifyContent:'center', marginY : '10px'}}> Proffesional Work</Typography>
                </div>
            </div>
        )
    }
}

export const ProfileDetails= (withStyles(styles)(ProfileDetailsComponent));

