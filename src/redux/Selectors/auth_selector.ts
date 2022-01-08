import {AppStateType} from "../store";

export const getCaptchaUrlSelector = (state : AppStateType) => state.authReduser.captchaUrl