import { deleteFollowUser, getUsers, getUsers2, postFollowUser } from "../DAL/api";

const FOLLOW = `users/Sergey_Suborov/FOLLOW`;
const UNFOLLOW = `users/Sergey_Suborov/UNFOLLOW`;
const SET_USERS = `users/Sergey_Suborov/SET_USERS`;
const SET_CARENT_PAGE = `users/Sergey_Suborov/SET_CARENT_PAGE`;
const SET_TOTAL_USERS_COUNT = `users/Sergey_Suborov/SET_TOTAL_USERS_COUNT`;
const SET_IS_PRELOADER = `users/Sergey_Suborov/SET_IS_PRELOADER`

const defaultState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 50,
  carentPage: 2,
  isPreloader: false
};

const usersReduser = (state = defaultState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (action.idUser === user.id) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      debugger;
      return {
        ...state,
        users: state.users.map((user) => {
          if (action.idUser === user.id) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CARENT_PAGE:
      return {
        ...state,
        carentPage: action.carentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
      case SET_IS_PRELOADER:
      return {
        ...state,
        isPreloader: action.isPreloader
      };
    default:
      return state;
  }
};

export const setFollowSuccess = (idUser) => {
  return { type: FOLLOW, idUser };
};

export const setUnfollowSuccess = (idUser) => {
  return { type: UNFOLLOW, idUser };
};

export const setUsersSuccess = (users) => {
  return { type: SET_USERS, users };
};

export const setCarentPageSuccess = (carentPage) => {
  return { type: SET_CARENT_PAGE, carentPage };
};

export const setTotalUsersCountSuccess = (totalCount) => {
  return { type: SET_TOTAL_USERS_COUNT, totalCount };
};

const setIspreloader = (isPreloader) => {
  return { type: SET_IS_PRELOADER, isPreloader}
}


export const getUsersThunk = (carentPage, pageSize) => (dispatch) => {
  dispatch(setIspreloader(true))
  getUsers(carentPage, pageSize).then((data) => {
    dispatch(setUsersSuccess(data.items));
    dispatch(setTotalUsersCountSuccess(data.totalCount));
    dispatch(setIspreloader(false))
  });
}

export const getUsers2Thunk = (carentPage) => (dispatch) => {
  dispatch(setCarentPageSuccess(carentPage));
  dispatch(setIspreloader(true))
    getUsers2(carentPage).then((data) => {
      dispatch(setUsersSuccess(data.items));
      dispatch(setIspreloader(false))
    });
}

export const deleteFollowUserThunk = (userId) => (dispatch) => {
    deleteFollowUser(userId)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setUnfollowSuccess(userId));
        }
      });
}

export const onFollowClickThunk = (userId) => (dispatch) => {
    postFollowUser(userId)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setFollowSuccess(userId));
        }
      });
}

export default usersReduser;
