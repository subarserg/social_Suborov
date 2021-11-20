const ADD_POST = `ADD-POST`;
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`;

const defaultState = {
  postData: [
    { id: 1, text: "Hi,world", likesCount: 5 },
    { id: 2, text: "How are you", likesCount: 7 },
    { id: 3, text: "Good night", likesCount: 8 },
  ],
  newPostText: "",
}

const profileReduser = (state=defaultState, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 4,
        text: state.newPostText,
        likesCount: 0,
      };
      state.postData.unshift(post);
      state.newPostText = ``;
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const onAddPostActionCreator = () => {
  return { type: ADD_POST };
};

export const onChangeNewTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReduser;
