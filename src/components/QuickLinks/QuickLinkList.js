import React from 'react';
import './QuickLink.css';
import {MyContext} from '../../store/Store';
import QuickLink from './QuickLink';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function QuickLinkList() {
        const {state} =  React.useContext(MyContext);
        const classes = useStyles();
  return (
    
    <div className="QuickLinkList">
    <Paper elevation={1}>
    <div className='quickLinksDiv'>
    <div className='quickLinkHeading'> <Typography variant="h4" component="h3">
Quick Links
</Typography></div>
    <Divider />
    <div className='quickLinkSection'>
      {state.quickLinks.map((quickLink)=> {
        return(<QuickLink key={quickLink.quick_link_id} quickLink={quickLink}/>)
      })}
      </div>
      </div>
      </Paper>
    </div>
    
  );
}


