import React from "react";
import Post from "./Post/Post";
import style from "./MyPost.module.css";
import {onAddPostActionCreator, onChangeNewTextActionCreator} from "../../../redux/profile_reduser";



const MyPost = (props) => {

  const onAddPost = () => {
    props.addPost();
  };
  let postDataElements = props.postData.map((el) => (
    <Post text={el.text} col={el.likesCount} />
  ));

  const onChangeNewText = (event) => {
    props.changeNewText(event.target.value)
  };

  return (
    <div className={style.myPost}>
      <div>
        <h3>New Post</h3>
      </div>
      <div>
        <textarea
          value={props.newText}
          onChange={onChangeNewText}
        />
      </div>
      <div>
        <button onClick={onAddPost}>Add Post</button>
      </div>
      {postDataElements}
    </div>
  );
};

export default MyPost;
