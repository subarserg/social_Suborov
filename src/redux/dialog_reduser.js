const UPDATE_NEW_MESSAGE_TEXT = `UPDATE_NEW_MESSAGE_TEXT`;
const ADD_MESSAGE = `ADD_MESSAGE`;

const defaultState = {
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
  }

const dialogReduser = (state=defaultState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
    case ADD_MESSAGE:
      let mess = {
        id: 4,
        message: state.newMessageText,
      };
      state.messagesData.push(mess);
      state.newMessageText = ``;
      return state;
    default:
      return state;
  }
};

export const updateNewMessageTextAC = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text };
};

export const addMessageAC = () => {
  return { type: ADD_MESSAGE };
};

export default dialogReduser;
