import {deleteLogin, getAuthUser, getCaptchaUrl, postIsLogin, ResultCodeCaptchaEnum, ResultCodeEnum} from "../DAL/apiSenior";
import {BaseThunkType, InferActionType} from "./store";
import {FormType} from "../components/Login/LoginForm";

const defaultState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
    captchaUrl: null as null | string
};


const authReduser = (state = defaultState, action: ActionTypes): DefaultStateTypes => {
        switch (action.type) {
            case `users/Sergey_Suborov/SET_USER_DATA`:
                return {
                    ...state,
                    ...action.payload,
                    isAuth: action.payload.isAuth
                }
            case `users/Sergey_Suborov/SET_CAPTCHA_URL`:
                return {
                    ...state,
                    captchaUrl: action.captchaUrl
                };
            default:
                return state;
        }
    }
;

export const actions = {
    setUserDataSuccess: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: `users/Sergey_Suborov/SET_USER_DATA`,
        payload: {userId, email, login, isAuth},
    } as const),
    setCaptchaUrlSuccess: (captchaUrl: string | null) => ({
        type: `users/Sergey_Suborov/SET_CAPTCHA_URL`,
        captchaUrl
    } as const)
}

export const getAuthUserThunk = (): ThunkTypes => async (dispatch) => {
    try {
        let data = await getAuthUser()
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(actions.setUserDataSuccess(id, email, login, true));
        }
    } catch
        (error) {
        console.log(error)
        //todo: обработать ошибки
    }
}


export const getCaptchaUrlThunk = (): ThunkTypes => async (dispatch) => {
    try {
        let data = await getCaptchaUrl()
        dispatch(actions.setCaptchaUrlSuccess(data.url));
    } catch (error) {
        console.log(error)
        //todo: обработать ошибки
    }
}


export const postIsLoginThunk = (loginData: FormType): ThunkTypes => async (dispatch) => {
    try {
        let data = await postIsLogin(loginData)
        if (data.resultCode === ResultCodeEnum.Success) {
            await dispatch(getAuthUserThunk())
        } else if (data.resultCode === ResultCodeCaptchaEnum.Captcha) {
            await dispatch(getCaptchaUrlThunk())
        }
    } catch (error) {
        console.log(error)
        //todo: обработать ошибки
    }
}

export const deleteLoginThunk = (): ThunkTypes => async (dispatch) => {
    try {
        let data = await deleteLogin()
        if (data.resultCode === 0) {
            dispatch(actions.setUserDataSuccess(null, null, null, false))
        }
    } catch (error) {
        console.log(error)
        //todo: обработать ошибки
    }
}

export default authReduser;


type DefaultStateTypes = typeof defaultState
type ActionTypes = InferActionType<typeof actions>
type ThunkTypes = BaseThunkType<ActionTypes>