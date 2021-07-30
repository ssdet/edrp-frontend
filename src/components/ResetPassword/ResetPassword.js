import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect, useHistory } from "react-router-dom";
import { MyContext } from '../../store/Store';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { IconButton, InputAdornment } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function ResetPassword(props) {
    const [error, setError] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false)
    const {type} = props
    const classes = useStyles();
     const {state, resetPassword} =  React.useContext(MyContext);
    let history = useHistory();

    const handleClickShowPassword = ()=> {
        setShowPassword(!showPassword)
      }

    
    const handleSubmit = (e)=> {
        e.preventDefault();
        const formData = new FormData(e.target);
        if(formData.get('confirm_password') === formData.get('password')) {
            resetPassword(e)
        }
        else {
            setError('Passwords Do Not Match')
        }

    }
    if(state.isLoggedIn) {
        return (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  {`Reset Password`}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    error={error}
                    helperText={error}
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="password"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    error={error}
                    fullWidth
                    name="confirm_password"
                    label="Confirm Passsword"
                    id="password"
                    autoComplete="current-password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClickShowPassword}>
                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
    
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Reset Password
                  </Button>
                </form>
              </div>
            </Container>
          );
      
    }
    else {
        return <Redirect to="/" />
    }
}
