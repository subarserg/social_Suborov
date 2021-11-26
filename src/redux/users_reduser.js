const FOLLOW = `users/Sergey_Suborov/FOLLOW`;
const UNFOLLOW = `users/Sergey_Suborov/UNFOLLOW`;
const SET_USERS = `users/Sergey_Suborov/SET_USERS`;

const defaultState = {
  users: [],
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
        users: [...action.users]
      }    
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
  debugger;
  return { type: SET_USERS, users}
}

export default usersReduser;
