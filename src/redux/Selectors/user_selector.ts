import {AppStateType} from "../store";

export const getUsersSelector = (state : AppStateType) => state.usersReduser.users
export const getPageSizeSelector = (state : AppStateType) => state.usersReduser.pageSize
export const getTotalUsersSelector = (state : AppStateType) => state.usersReduser.totalUsersCount
export const getIsPreloaderSelector = (state : AppStateType) => state.usersReduser.isPreloader
export const getCarentPageSelector = (state : AppStateType) => state.usersReduser.carentPage

