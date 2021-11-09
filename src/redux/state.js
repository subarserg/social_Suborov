import dialogReduser from "./dialog_reduser";
import profileReduser from "./profile_reduser";

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
      newMessageText: "",
    },
    profilePage: {
      postData: [
        { id: 1, text: "Hi,world", likesCount: 5 },
        { id: 2, text: "How are you", likesCount: 7 },
        { id: 3, text: "Good night", likesCount: 8 },
      ],
      newPostText: "",
    },
  },

  getState() {
    return this._state;
  },
  _myRender() {},
  subscribe(observer) {
    this._myRender = observer;
  },
  dispatch(action) {
    profileReduser(this._state.profilePage, action);
    dialogReduser(this._state.dialogPage, action);
    this._myRender(this._state);
  },
};



export default store;
