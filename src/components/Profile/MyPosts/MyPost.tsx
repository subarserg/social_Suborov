import React, {ChangeEvent, FC} from "react";
import Post from "./Post/Post";
import style from "./MyPost.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actions } from "../../../redux/profile_reduser";
import {AppStateType} from "../../../redux/store";



const MyPost : FC = () => {
  const postData = useSelector((state:AppStateType) => state.profileReduser.postData)
  const newText = useSelector((state:AppStateType) => state.profileReduser.newPostText)
  const dispatch = useDispatch()

  const onAddPost = () => {
    dispatch(actions.setAddPostSuccess());
  };
  let postDataElements = postData.map((el) => (
    <Post key={el.id} text={el.text} col={el.likesCount} />
  ));

  const onChangeNewText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(actions.setChangeNewTextSuccess(event.target.value))
  };

  return (
    <div className={style.myPost}>
      <div>
        <h3>New Post</h3>
      </div>
      <div>
        <textarea
          value={newText}
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
