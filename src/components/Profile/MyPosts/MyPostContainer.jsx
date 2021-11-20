import React from "react";
import {onAddPostActionCreator, onChangeNewTextActionCreator} from "../../../redux/profile_reduser";
import MyPost from "./MyPost"


const MyPostContainer = (props) => {
  let state = props.store.getState();
  const onAddPost = () => {
    props.dispatch(onAddPostActionCreator());
  };
  
  const onChangeNewText = (sms) => {
    props.dispatch(onChangeNewTextActionCreator(sms))
  };

  return (
    <MyPost addPost={onAddPost}  changeNewText={onChangeNewText} postData={state.profileReduser.postData} newText={state.profileReduser.newText} />
  );
};

export default MyPostContainer;
