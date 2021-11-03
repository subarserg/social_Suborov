import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state from "./redux/state.js";
import { BrowserRouter } from "react-router-dom";



let myRender = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default myRender