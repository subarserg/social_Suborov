import React from "react";
import Post from "./Post/Post";
import style from "./MyPost.module.css";

const MyPost = () => {

   let postData = [
      {id : 1, text : 'Hi,world', likesCount: 5},
      {id : 2, text : 'How are you', likesCount: 7},
      {id : 3, text : 'Good night', likesCount: 8}
    ]

  return (
    <div className={style.myPost}>
      <div>
        <h3>New Post</h3>
      </div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add Post</button>
      </div>
      <Post text={postData[0].text} col={postData[0].likesCount} />
      <Post text={postData[1].text} col={postData[1].likesCount} />
      <Post text={postData[2].text} col={postData[2].likesCount} />
    </div>
  );
};

export default MyPost;
