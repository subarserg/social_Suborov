import {deleteLogin, getAuthUser, postIsLogin} from "../DAL/api";

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
                isAuth: action.payload.isAuth
            };
        default:
            return state;
    }
};
export const setUserDataSuccess = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth},
});

export const getAuthUserThunk = () => async (dispatch) => {
    try{
        let data = await getAuthUser()
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setUserDataSuccess(id, email, login, true));
        }
    }catch (error){
     console.log(error)
     //todo: обработать ошибки
    }

}

export const postIsLoginThunk = (loginData) => (dispatch) => {
    postIsLogin(loginData).then((data) => {
        if(data.resultCode === 0)
    {
    dispatch(getAuthUserThunk())
    }
})
}

export const deleteLoginThunk = () => (dispatch) => {
    deleteLogin().then((data)=>{
        if(data.resultCode === 0){
            dispatch(setUserDataSuccess(null, null, null, false))
        }
    })
}

export default authReduser;
