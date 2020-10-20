import React from 'react';
import './Notice.css';
import {MyContext} from '../../store/Store';
import Notice from './Notice';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

export default function NoticeList() {
	const {state} =  React.useContext(MyContext);
	const classes = useStyles();
  return (
    
    <div className="NoticeList">
    <Paper elevation={1}>
    <div className='noticesListDiv'>
    <div className='noticeListTitle'> <Typography variant="h4" component="h3">
Notices
</Typography></div>
<Divider/>

    {state.notices.map((notice)=> {
        return(<Notice key={notice.notice_id} notice={notice}/>)
      })}
    </div>
     </Paper>
    </div>
    
  );
}
