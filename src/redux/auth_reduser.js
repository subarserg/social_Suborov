const SET_USER_DATA = `users/Sergey_Suborov/SET_USER_DATA`;

const defaultState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReduser = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true
      };
    default:
      return state;
  }
};
export const setUserDataSuccess = (userId, email, login) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login },
});

export default authReduser;
