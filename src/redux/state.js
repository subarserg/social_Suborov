const ADD_POST = `ADD-POST`

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
    }else if (action.type === `UPDATE-NEW-POST-TEXT`){
      this._state.profilePage.newPostText = action.newText;
    this._myRender(this._state);
    }
  }
}
export default store;
