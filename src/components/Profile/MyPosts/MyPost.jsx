import React from "react";
import Post from "./Post/Post";
import style from "./MyPost.module.css";


const MyPost = (props) => {
  let newPostText = React.createRef();

  const onAddPost = () => {
    props.addPost(newPostText.current.value);
  };
  let postDataElements = props.postData.map((el) => (
    <Post text={el.text} col={el.likesCount} />
  ));

  const onChangeNewText = () => {
    //debugger;
    props.addNewPostText(newPostText.current.value);
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
