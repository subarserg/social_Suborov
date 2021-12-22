import {getProfileUsers, GetProfileUsersType, getStatusUser, putStatusUser} from "../DAL/api";
import {BaseThunkType, InferActionType} from "./store";

const defaultState = {
  postData: [
    { id: 1, text: "Hi,world", likesCount: 5 },
    { id: 2, text: "How are you", likesCount: 7 },
    { id: 3, text: "Good night", likesCount: 8 },
  ] as Array<PostDataTypes>,
  newPostText: "",
  profile: null as null | GetProfileUsersType,
  status: ``
};


const profileReduser = (state = defaultState, action : ActionTypes) : DefaultStateTypes => {
  switch (action.type) {
    case `profile/Sergey_Suborov/ADD-POST`:
      let postData = {
        id: 4,
        text: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        newPostText: "",
        postData: [...state.postData, postData],
      };
    case `profile/Sergey_Suborov/UPDATE-NEW-POST-TEXT`: {
      return {
        ...state,
        newPostText: action.text,
      };
    }
    case `profile/Sergey_Suborov/GET_PROFILE`: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    case `profile/Sergey_Suborov/GET_STATUS`: {
      return {
        ...state,
        status : action.status,
      }
    }
    default:
      return state;
  }
};

export const actions = {
  setAddPostSuccess: () => ({type: `profile/Sergey_Suborov/ADD-POST`} as const),
  setChangeNewTextSuccess: (text: string) => ({type: `profile/Sergey_Suborov/UPDATE-NEW-POST-TEXT`, text} as const),
  setProfileSuccess: (profile: GetProfileUsersType) => ({type: `profile/Sergey_Suborov/GET_PROFILE`, profile} as const),
  setStatusSuccess: (status: string) => ({type: `profile/Sergey_Suborov/GET_STATUS`, status} as const)
}


export const getProfileUsersThunk = (userId: number) : ThunkTypes => async (dispatch) => {
  try {
    let data = await getProfileUsers(userId)
    dispatch(actions.setProfileSuccess(data))
  }catch (e) {
    console.log(e)
  }
} 

export const getStatusUserThunk = (userId: number) : ThunkTypes => async (dispatch) => {
  try {
    let data = await getStatusUser(userId)
    dispatch(actions.setStatusSuccess(data))
  }catch (e) {
    console.log(e)
  }
}

export const putStatusUserThunk = (status: string) : ThunkTypes => async (dispatch) => {
  try {
    let data = await putStatusUser(status)
    if(data.resultCode === 0){
      dispatch(actions.setStatusSuccess(status))
    }
  }catch (e) {
    console.log(e)
  }
}

export default profileReduser;



type DefaultStateTypes = typeof defaultState
type PostDataTypes =  {
  id: number
  text: string
  likesCount: number
}

type ActionTypes = InferActionType<typeof actions>
type ThunkTypes = BaseThunkType<ActionTypes>
