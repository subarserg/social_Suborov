import { getProfileUsers, getStatusUser, putStatusUser } from "../DAL/api";

const ADD_POST = `profile/Sergey_Suborov/ADD-POST`;
const UPDATE_NEW_POST_TEXT = `profile/Sergey_Suborov/UPDATE-NEW-POST-TEXT`;
const GET_PROFILE = `profile/Sergey_Suborov/GET_PROFILE`;
const GET_STATUS = `profile/Sergey_Suborov/GET_STATUS`

const defaultState = {
  postData: [
    { id: 1, text: "Hi,world", likesCount: 5 },
    { id: 2, text: "How are you", likesCount: 7 },
    { id: 3, text: "Good night", likesCount: 8 },
  ],
  newPostText: "",
  profile: null,
  status: ``
};

const profileReduser = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_POST:
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
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text,
      };
    }
    case GET_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    case GET_STATUS: {
      return {
        ...state,
        status : action.status,
      }
    }
    default:
      return state;
  }
};

export const setAddPostSuccess = () => {
  return { type: ADD_POST };
};

export const setChangeNewTextSuccess = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, text };
};

export const setProfileSuccess = (profile) => {
  return { type: GET_PROFILE, profile}
}

export const setStatusSuccess = (status) => {
  return { type: GET_STATUS, status}
}

export const getProfileUsersThunk = (userId) => (dispatch) => {
  getProfileUsers(userId).then((data) => {
    dispatch(setProfileSuccess(data))
})
} 

export const getStatusUserThunk = (userId) => (dispatch) => {
  getStatusUser(userId).then((data)=>{
    dispatch(setStatusSuccess(data))
  })
}

export const putStatusUserThunk = (status) => (dispatch) => {
  putStatusUser(status).then((response)=>{
    debugger;
    if(response.resultCode === 0){
      dispatch(setStatusSuccess(status))
    }
  })
}

export default profileReduser;
