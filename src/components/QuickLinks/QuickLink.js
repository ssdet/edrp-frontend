import React from 'react';
import './QuickLink.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';



export default function QuickLink(props) {
  return (
   
    <div className="QuickLink">
        <ListItem>
          <div className='flexBox'>
          <div className='QuickLinkText'> 
          <ListItemText style={{'color' : 'slategray'}} primary={props.quickLink.description} />
          </div>
          <div className='DownloadBtn'>
          <Button   color="primary" disableElevation href={props.quickLink.download_link} target="_blank" rel="noopener noreferrer">
      Download
    </Button>
    </div>
    </div>
        </ListItem>
        <Divider/>
      

    </div>
    
  );
}
