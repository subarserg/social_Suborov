import React from "react";
import Post from "./Post/Post";
import style from "./MyPost.module.css";
import {onAddPostActionCreator, onChangeNewTextActionCreator} from "../../../redux/state";



const MyPost = (props) => {
  let newPostText = React.createRef();

  const onAddPost = () => {
    //props.dispatch({type: `ADD-POST`});
    props.dispatch(onAddPostActionCreator());
  };
  let postDataElements = props.postData.map((el) => (
    <Post text={el.text} col={el.likesCount} />
  ));

  const onChangeNewText = () => {
    //props.dispatch({type: `UPDATE-NEW-POST-TEXT`, newText: newPostText.current.value } );
    props.dispatch(onChangeNewTextActionCreator(newPostText.current.value))
  };

  return (
    <div className={style.myPost}>
      <div>
        <h3>New Post</h3>
      </div>
      <div>
        <textarea
          value={props.newText}
          ref={newPostText}
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
