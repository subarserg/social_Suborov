import {InferActionType} from "./store";

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


const dialogReduser = (state=defaultState, action: ActionType): DefaultStateType  => {

  switch (action.type) {
    case "dialog/Sergey_Suborov/UPDATE_NEW_MESSAGE_TEXT":
      return {
        ...state,
        newMessageText: action.newMessage
      };
    case "dialog/Sergey_Suborov/ADD_MESSAGE":
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


export const actions = {
  setUpdateNewMessageTextSuccess: (text: string) => ({type: `dialog/Sergey_Suborov/UPDATE_NEW_MESSAGE_TEXT`, newMessage: text } as const),
  setAddMessageSuccess: () => ({type: `dialog/Sergey_Suborov/ADD_MESSAGE` } as const)
}

export default dialogReduser;




type DialogTypes = {
  id: number
  name: string
}
type MessageTypes = {
  id: number
  message: string
}
type DefaultStateType = typeof defaultState
type ActionType = InferActionType<typeof actions>