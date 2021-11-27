const FOLLOW = `users/Sergey_Suborov/FOLLOW`;
const UNFOLLOW = `users/Sergey_Suborov/UNFOLLOW`;
const SET_USERS = `users/Sergey_Suborov/SET_USERS`;
const SET_CARENT_PAGE = `users/Sergey_Suborov/SET_CARENT_PAGE`;
const SET_TOTAL_USERS_COUNT = `users/Sergey_Suborov/SET_TOTAL_USERS_COUNT`;

const defaultState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 50,
  carentPage: 2,
};

const usersReduser = (state = defaultState, action) => {
  debugger;
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

export default usersReduser;
