import React from 'react';
import './Notice.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import WarningIcon from '@material-ui/icons/Warning';
import Chip from '@material-ui/core/Chip';
import moment from 'moment';


function DateTime(date) {
   let param_date = moment(date * 1000).fromNow();
   
   return param_date;
}

export default function Notice(props) {
  return (
    
    <div className="Notice">
        <ListItem>
          <div className='flexBox'>
          <div className='DateTime'> {DateTime(props.notice.date_created)}</div>
          <Chip
           icon = {props.notice.type == 'IMPORTANT' ? <WarningIcon style={{'color' : 'orange'}}/> : props.notice.type == 'INFO' ? <InfoIcon style={{'color' : 'green'}}/> : <AssignmentLateIcon style={{'color' : 'lightblue'}}/>}
        label={props.notice.type == 'IMPORTANT' ? 'Important' : props.notice.type == 'INFO' ? 'Information' : 'Newest'}
        
      />
          <div className='NoticeText'> 
          <ListItemText style={{'color' : 'slategray'}} primary={props.notice.description} />
          </div>
         
    </div>
        </ListItem>
         <Divider/>
       
    </div>
    
  );
}
