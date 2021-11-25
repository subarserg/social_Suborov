const FOLLOW = `users/Sergey_Suborov/FOLLOW`;
const UNFOLLOW = `users/Sergey_Suborov/UNFOLLOW`;

const defaultState = {
  users: [
    { id: 1, fullName: `Sergey Suborov`, status: `I am very cool!`, followed: true, location: {country: `Belarus`, city: `Orsha`}, photos: "https://pngicon.ru/file/uploads/vinni-pukh-v-png-256x256.png"},
    { id: 2, fullName: `Alexandr Andreev`, status: `I am very cool!`, followed: false, location: {country: `Poland`, city: `Warshava`}, photos: "https://pngicon.ru/file/uploads/vinni-pukh-v-png-256x256.png"},
  ],
};

const usersReduser = (state = defaultState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user)=>{
          if (action.idUser === user.id) {
            return {...user,followed: true}
          }
          return user
        })
      }
      case UNFOLLOW:
        return {
          ...state,
          users: state.users.map((user)=>{
            if(action.idUser === user.id) {
              return {...user,followed: false}
            }
            return user
          })
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

export default usersReduser;
