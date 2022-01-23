import React from "react";


import Dialog from "./components/Dialog/Dialog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";
import {FC} from "react";
import {Route} from "react-router-dom";
import {Login} from "./components/Login/login";

const App : FC = () => {
  return (
      <div className="app-wraper">
        <Header />
        <NavBar />
        <div className="app-wraper-content">
            {/* @ts-ignore */}
          <Route path="/profile/:userId?"  render = { ()=> <Profile /> } />
            {/* @ts-ignore */}
          <Route path="/dialog" render= { ()=> <Dialog /> } />
            {/* @ts-ignore */}
          <Route path="/users" render= { ()=> <Users /> }/>
            {/* @ts-ignore */}
          <Route path="/login" render= { ()=> <Login /> }/>
        </div>
        <Footer />
      </div>
    
  );
};

export default App;
