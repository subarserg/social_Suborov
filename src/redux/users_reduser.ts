import {deleteFollowUser, FilterType, getUsers, postFollowUser, UserType} from "../DAL/api";
import {BaseThunkType, InferActionType} from "./store";

const defaultState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 50,
  carentPage: 1,
  isPreloader: false,
  usersFriends: [] as Array<UserType>
};


const usersReduser = (state = defaultState, action: ActionType) : DefaultStateType => {
  switch (action.type) {
    case `users/Sergey_Suborov/FOLLOW`:
      return {
        ...state,
        users: state.users.map((user) => {
          if (action.idUser === user.id) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case `users/Sergey_Suborov/UNFOLLOW`:
      return {
        ...state,
        users: state.users.map((user) => {
          if (action.idUser === user.id) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case `users/Sergey_Suborov/SET_USERS`:
      return {
        ...state,
        users: action.users,
      };
    case `users/Sergey_Suborov/SET_CARENT_PAGE`:
      return {
        ...state,
        carentPage: action.carentPage,
      };
    case `users/Sergey_Suborov/SET_TOTAL_USERS_COUNT`:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
      case `users/Sergey_Suborov/SET_IS_PRELOADER`:
      return {
        ...state,
        isPreloader: action.isPreloader
      };
    case `users/Sergey_Suborov/PAGE_SIZE`:
      return {
        ...state,
        pageSize: action.pageSize,
      };
      case `users/Sergey_Suborov/USERS_FRIENDS`:
      return {
        ...state,
        usersFriends: [...state.usersFriends, ...action.usersFriends]
      };
    default:
      return state;
  }
};

export const actions = {
  setFollowSuccess: (idUser: number | undefined) => ({type: `users/Sergey_Suborov/FOLLOW`, idUser} as const),
  setUnfollowSuccess: (idUser: number | undefined) => ({type: `users/Sergey_Suborov/UNFOLLOW`, idUser} as const),
  setUsersSuccess: (users: Array<UserType>) => ({type: `users/Sergey_Suborov/SET_USERS`, users} as const),
  setCarentPageSuccess: (carentPage: number) => ({type: `users/Sergey_Suborov/SET_CARENT_PAGE`, carentPage} as const),
  setTotalUsersCountSuccess: (totalCount: number) => ({type: `users/Sergey_Suborov/SET_TOTAL_USERS_COUNT`, totalCount} as const),
  setIspreloader: (isPreloader: boolean) => ({type: `users/Sergey_Suborov/SET_IS_PRELOADER`, isPreloader} as const),
  setPageSizeSuccess: (pageSize: number) => ({type: `users/Sergey_Suborov/PAGE_SIZE`, pageSize} as const),
  setUserFriendsSuccess: (usersFriends: Array<UserType>) => ({type: `users/Sergey_Suborov/USERS_FRIENDS`, usersFriends} as const),

}

export const  getUserFriendsThunk = (carentPage : number, pageSize : number, filter: FilterType) : ThunkType => async (dispatch) => {
  try {
    dispatch(actions.setIspreloader(true))
    let data = await getUsers(carentPage, pageSize,filter)
    dispatch(actions.setUserFriendsSuccess(data.items));
    dispatch(actions.setTotalUsersCountSuccess(data.totalCount));
    dispatch(actions.setIspreloader(false))
  }catch (e) {
    console.log(e)
  }
}


export const getUsersThunk = (carentPage : number, pageSize : number, filter: FilterType) : ThunkType => async (dispatch) => {
  try {
    dispatch(actions.setIspreloader(true))
    let data = await getUsers(carentPage, pageSize,filter)
    dispatch(actions.setUsersSuccess(data.items));
    dispatch(actions.setTotalUsersCountSuccess(data.totalCount));
    dispatch(actions.setCarentPageSuccess(carentPage));
    dispatch(actions.setIspreloader(false))
  }catch (e) {
    console.log(e)
  }
}


export const deleteFollowUserThunk = (userId: number | undefined) : ThunkType => async (dispatch) => {
  try {
    let data = await deleteFollowUser(userId)
    if (data.resultCode === 0) {
      dispatch(actions.setUnfollowSuccess(userId))
    }
  }catch (e) {
    console.log(e)
  }
}

export const onFollowClickThunk = (userId: number | undefined) : ThunkType => async (dispatch) => {
  try {
    let data = await postFollowUser(userId)
    if (data.resultCode === 0) {
      dispatch(actions.setFollowSuccess(userId));
    }
  }catch (e) {
    console.log(e)
  }
}

export default usersReduser;


type DefaultStateType = typeof defaultState
type ActionType = InferActionType<typeof actions>
type ThunkType = BaseThunkType<ActionType>