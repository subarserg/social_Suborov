import React from "react";
import style from './Post.module.css'

const Post = props => {
   return (
          <div className={style.item}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png" alt='' />      
             {props.text}
             <div><span>Like {props.col}</span></div>
          </div>
      )
   }

export default Post
