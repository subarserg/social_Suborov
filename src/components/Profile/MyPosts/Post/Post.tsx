import * as React from "react";
import style from './Post.module.css'
import {FC} from "react";

const Post : FC<PropsType> = ({text,col}) => {
   return (
          <div className={style.item}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png" alt='' />      
             {text}
             <div><span>Like {col}</span></div>
          </div>
      )
   }
export default Post

type PropsType = {
    text: string
    col: number
}
