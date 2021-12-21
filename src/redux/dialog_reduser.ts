import {InferActionsTypes} from "./store";

const UPDATE_NEW_MESSAGE_TEXT = `dialog/Sergey_Suborov/UPDATE_NEW_MESSAGE_TEXT`;
const ADD_MESSAGE = `dialog/Sergey_Suborov/ADD_MESSAGE`;

const defaultState = {
    dialogData: [
      { id: 1, name: "Sasha" },
      { id: 2, name: "Valera" },
      { id: 3, name: "Masha" },
      { id: 4, name: "Denis" },
      { id: 5, name: "Ira" },
    ] as Array<DialogTypes>,
    messagesData: [
      { id: 1, message: "Hello" },
      { id: 2, message: "Hi" },
      { id: 3, message: "Yo" },
    ] as Array<MessageTypes>,
    newMessageText: "",
  }

  type DialogTypes = {
  id: number
  name: string
}

  type MessageTypes = {
    id: number
    message: string
  }

  type DefaultStateType = typeof defaultState

const dialogReduser = (state=defaultState, action: ActionsTypes): DefaultStateType  => {

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

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  setUpdateNewMessageTextSuccess: (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text } as const),
  setAddMessageSuccess: () => ({type: ADD_MESSAGE } as const)
}



export default dialogReduser;
