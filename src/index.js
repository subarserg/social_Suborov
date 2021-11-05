import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/state.js";
import { BrowserRouter } from "react-router-dom";



let myRender = (state) =>{//2
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

myRender(store.getState()) //1

store.subscribe(myRender)//3

reportWebVitals();//4
