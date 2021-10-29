import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import "./App.css";
import Dialog from "./components/Dialog/Dialog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wraper">
      <Header />
      <NavBar />
      <div className="app-wraper-content">
        <Route path='/profile' component={Profile}/>
        <Route path='/dialog' component={Dialog}/>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
    
  );
};

export default App;