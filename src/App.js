import React from 'react';
import './App.css';
import MyProvider from './store/Store';
import Header from './components/Header/Header';
import HeaderBranding from './components/Header/HeaderBranding';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';



function App() {


  return (
    <MyProvider>
    <div className="App">
      <Header/>
      <HeaderBranding/>
     <Nav/>
     <Home/>
       
      
       
      
      
      

    </div>
     <Footer/>
 </MyProvider>
  );
}

export default App;
