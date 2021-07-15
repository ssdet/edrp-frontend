import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import axios from 'axios';
import { GLOBAL_URL } from './config/Config';
import { Slide } from '@material-ui/core';
import MyProvider from './store/Store';

axios.defaults.baseURL = GLOBAL_URL;
if(localStorage.getItem('token')) {
  axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('token')}`;
}
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
   // console.log(request);
    // Edit request config
    return request;
}, error => {
    //console.log(error);

    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    //console.log(response);
    // Edit response config
    return response;
}, error => {
    if(error.message === 'Request failed with status code 401') {
      localStorage.clear()
      if(window.location.pathname !== "/")
        window.location.href = '/login'
    }
    console.log(JSON.stringify(error));
    return Promise.reject(error);
});

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#008336',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
      <SnackbarProvider
        hideIconVariant
        dense={false}
        preventDuplicate
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
      }}
      TransitionComponent={Slide}
      >
         <MyProvider>
          <App />
        </MyProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
