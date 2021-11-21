import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import DialogContainer from "./components/Dialog/DialogContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
      <div className="app-wraper">
        <Header />
        <NavBar />
        <div className="app-wraper-content">
          <Route path="/profile" render={() => <Profile />} />
          <Route
            path="/dialog"
            render={() => <DialogContainer />}
          />
        </div>
        <Footer />
      </div>
    
  );
};

export default App;
