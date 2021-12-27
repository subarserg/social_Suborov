import axios from "axios";

const instanse = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "c82ee34b-7546-436e-bc1d-d6134a51853a"
    }

})

export const getAuthUser = () => instanse.get<ApiResponseType<GetAuthUserType>>(`auth/me`).then(response => response.data)

export const getUsers = (carentPage: number, pageSize: number) => instanse.get<GetUsersType>(`users?page=${carentPage}&count=${pageSize}`).then(response => response.data)

export const postFollowUser = (userID: number) => instanse.post<ApiResponseType>(`follow/${userID}`).then(response => response.data)

export const deleteFollowUser = (userId: number) => instanse.delete<ApiResponseType>(`follow/${userId}`).then(response => response.data)

export const getProfileUsers = (userId: number) => instanse.get<GetProfileUsersType>(`profile/${userId}`).then((response) => response.data)

export const getStatusUser = (userId: number) => instanse.get<string>(`profile/status/${userId}`).then(response => response.data)

export const putStatusUser = (status: string) => instanse.put<ApiResponseType>(`profile/status/`, {status: status}).then(response => response.data)

export const putUploadAvatar = (avatar: File ) => {
    const formData = new FormData()
    formData.append("image", avatar)
    return instanse.put<ApiResponseType<UserPhotoType>>(`profile/photo/`, formData, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
}).then(response => response.data)
}


export const postIsLogin = (loginData: LoginDataType) => instanse.post<ApiResponseType<PostIsLoginType>>(`auth/login/`, {
    email: loginData.email,
    password: loginData.password,
    rememberMe: loginData.rememberMe
}).then(response => response.data)

export const deleteLogin = () => instanse.delete<ApiResponseType>(`auth/login/`).then(response => response.data)



type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type GetAuthUserType = {
    id: number
    email: string
    login: string
}

type GetUsersType = {
    items: Array<UserType>
    Items: UserType
    totalCount: number
    error: string
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: UserPhotoType
    followed: boolean
}

export type UserPhotoType = {
    small: string
    large: string
}

export type GetProfileUsersType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactsType
    photos: UserPhotoType
}

type ProfileContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PostIsLoginType = {
    userId: number
}

export type ApiResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeCaptchaEnum {
    Captcha = 10
}