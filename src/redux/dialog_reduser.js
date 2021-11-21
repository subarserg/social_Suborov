const UPDATE_NEW_MESSAGE_TEXT = `dialog/Sergey_Suborov/UPDATE_NEW_MESSAGE_TEXT`;
const ADD_MESSAGE = `dialog/Sergey_Suborov/ADD_MESSAGE`;

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
      return {
        ...state,
        newMessageText: action.newMessage
      };
    case ADD_MESSAGE:
      let mess = {
        id: 4,
        message: state.newMessageText,
      };
      return {
        ...state,
        newMessageText: ``,
        messagesData: [...state.messagesData,mess]
      };
    default:
      return state;
  }
};

export const setUpdateNewMessageTextSuccess = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text };
};

export const setAddMessageSuccess = () => {
  return { type: ADD_MESSAGE };
};

export default dialogReduser;
