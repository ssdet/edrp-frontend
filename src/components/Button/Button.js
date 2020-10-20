import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export const GreenButton = withStyles({
 
   root: {
    
    borderRadius : '1.5em',
    background : '#008336',
    color : 'white',

    '&:hover': {
      backgroundColor: '#008336',
    },
    '&:active': {
      backgroundColor: '#008336',
    },
    '&:focus': {
     
    },
  },
})(Button);