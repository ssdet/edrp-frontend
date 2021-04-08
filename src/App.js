import React from 'react';
import './App.css';
import MyProvider from './store/Store';
import Header from './components/Header/Header';
import HeaderBranding from './components/Header/HeaderBranding';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Typography } from '@material-ui/core';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CriterionOne from './components/Criterions/CriterionOne/CriterionOne';



function App() {


  return (
    <MyProvider>
    <div className="App">
      <Header/>
      <HeaderBranding/>
     <Nav/>
     {/* <Home/> */}
    {/* <Login type="Director"/>
    <Register/> */}
    <CriterionOne/>
    </div>
     <Footer/>
 </MyProvider>
  );
}

export default App;
