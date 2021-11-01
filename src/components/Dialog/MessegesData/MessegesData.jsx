import React from "react";
import style from "./MessegesData.module.css";

const Messanges = props => {
  return (
  <div className={style.messanges}>
    <span>{props.sms}</span>
  </div>
  )
};

export default Messanges;
