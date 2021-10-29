import React from "react";
import Post from "./Post/Post";

const MyPost = () => {
   return (
       <div>
           <div>New Post</div>
           <textarea></textarea>
           <button>Add Post</button>
          <Post text= "Hi,world"  col= '5' />
          <Post text= "How are you"  col= '7' />
          <Post text= "Good night"  col= '8' />
       </div>
      )
   }

export default MyPost
