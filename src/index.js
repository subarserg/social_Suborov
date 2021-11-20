import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";



let myRender = (state) =>{
  ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App store={store} state={state} dispatch={store.dispatch} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
}
myRender(store.getState())
store.subscribe(myRender)

reportWebVitals();//4
