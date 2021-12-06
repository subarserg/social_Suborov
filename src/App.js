import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Dialog from "./components/Dialog/Dialog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";

const App = (props) => {
  return (
      <div className="app-wraper">
        <Header />
        <NavBar />
        <div className="app-wraper-content">
          <Route path="/profile/:userId?" render={() => <Profile />} />
          <Route
            path="/dialog"
            render={() => <Dialog />}
          />
          <Route path="/users" render={() => <Users />} />
        </div>
        <Footer />
      </div>
    
  );
};

export default App;
