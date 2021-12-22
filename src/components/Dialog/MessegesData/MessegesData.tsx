import React, {FC} from "react";
import style from "./MessegesData.module.css";

const Messanges : FC<PropsType> = ({sms}) => {
  return (
  <div className={style.messanges}>
    <span>{sms}</span>
  </div>
  )
};

export default Messanges;

type PropsType = {
  sms: string
}


