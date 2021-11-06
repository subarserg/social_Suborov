const ADD_POST = `ADD-POST`
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`
const UPDATE_NEW_MESSAGE_TEXT = `UPDATE_NEW_MESSAGE_TEXT`
const ADD_MESSAGE = `ADD_MESSAGE`

let store = {
  _state: {
    dialogPage: {
      dialogData: [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Valera" },
        { id: 3, name: "Masha" },
        { id: 4, name: "Denis" },
        { id: 5, name: "Ira" },
      ],
      messagesData: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Hi" },
        { id: 3, message: "Yo" },
      ],
      newMessageText: ""
    },
    profilePage: {
      postData: [
        { id: 1, text: "Hi,world", likesCount: 5 },
        { id: 2, text: "How are you", likesCount: 7 },
        { id: 3, text: "Good night", likesCount: 8 },
      ],
      newPostText: ""
    },
  },

  getState() {
    return this._state 
  },
  _myRender() {},
  subscribe(observer) {
    this._myRender = observer;
  },
  dispatch(action){
    if (action.type === ADD_POST){
      let post = {
        id: 4,
        text: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postData.unshift(post);
      this._state.profilePage.newPostText = ``;
      this._myRender(this._state);
    }else if (action.type === UPDATE_NEW_POST_TEXT){
      this._state.profilePage.newPostText = action.newText;
    this._myRender(this._state);
    }else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
      this._state.dialogPage.newMessageText = action.newMessage
      this._myRender(this._state)
    }else if (action.type === ADD_MESSAGE){
      let mess = {
        id: 4,
        message: this._state.dialogPage.newMessageText,
      }
      this._state.dialogPage.messagesData.push(mess);
      this._state.dialogPage.newMessageText = ``;
      this._myRender(this._state);
    }
  }
}

export const updateNewMessageTextAC = (text) =>{
  return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}

export const addMessageAC = () =>{
  return {type:ADD_MESSAGE}
}

export const onAddPostActionCreator = () =>{
  return {type: ADD_POST}
}

export const onChangeNewTextActionCreator = (text) =>{
  return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default store;
