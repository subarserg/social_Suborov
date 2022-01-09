import {AppStateType} from "../store";

export const getWeatherWigetSelector = (state : AppStateType) => state.profileReduser.weatherWiget
export const getRatesSelector = (state : AppStateType) => state.profileReduser.rates
