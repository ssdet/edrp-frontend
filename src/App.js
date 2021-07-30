import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import HeaderBranding from './components/Header/HeaderBranding';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Typography } from '@material-ui/core';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CriterionOne from './components/Criterions/CriterionOne/CriterionOne';
import LoginCard from './components/Cards/LoginCard';
import Admissions from './components/Admissions/Admissions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DepartmentReport from './components/departmentReports/DepartmentReport';
import FacultyProfile from './components/departmentReports/FacultyProfile';
import CriterionTwo from './components/Criterions/CriterionTwo/CriterionTwo';
import { Form } from './components/forms/FormElements';
import CriterionHOC from './components/Templates/CriterionHOC';
import AllSchools from './components/Views/AllSchools';
import { MyContext } from './store/Store';
import ResetPassword from './components/ResetPassword/ResetPassword';



function App() {
  const {state, aboutUser} = React.useContext(MyContext)

  React.useEffect(()=> {
    aboutUser()
  },[])
  return (<>
    <div className="App">
       <Router>
       <Header/>
        <HeaderBranding/>
       <Nav/>
      
       <Switch>
          <Route path="/login">
            <Login type=" "/>
          </Route>

          <Route path="/reset-password">
            <ResetPassword/>
          </Route>
          {/* <Route path="/aqar">
           <CriterionOne/>
          </Route> */}
          <Route path="/aqar">
           <CriterionHOC/>
          </Route>
          <Route path="/faculty/">
            <FacultyProfile/>
          </Route>
          <Route path="/erod">
            <DepartmentReport/>
          </Route>
          <Route path="/schools">
            <AllSchools/>
          </Route>
          <Route path="/">
          <Admissions/>
          </Route>
        </Switch>
       </Router>
     {/* <Home/> */}
    {/* <Login type="Director"/>
    <Register/> */}
    {/* <CriterionOne/> */}
    </div>
     <Footer/>
     </>
  );
}

export default App;
