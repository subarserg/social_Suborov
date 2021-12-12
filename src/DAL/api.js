import axios from "axios";

const instanse = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "c82ee34b-7546-436e-bc1d-d6134a51853a"
    }

})

export const getAuthUser = () => instanse.get(`auth/me`).then(response=>response.data)

export const getUsers = (carentPage, pageSize) => instanse.get(`users?page=${carentPage}&count=${pageSize}`).then(response=>response.data)

export const getUsers2 =(carentPage, pageSize) => instanse.get(`users?page=${carentPage}&count=${pageSize}`).then(response=>response.data)

export const postFollowUser = (userID) => instanse.post(`follow/${userID}`).then(response=>response.data)

export const deleteFollowUser = (userId) => instanse.delete(`follow/${userId}`).then(response=>response.data)

export const getProfileUsers = (userId) => instanse.get(`profile/${userId}`).then((response)=>response.data)

export const getStatusUser = (userId) => instanse.get(`profile/status/${userId}`).then(response=>response.data)

export const putStatusUser = (status) => instanse.put(`profile/status/`, {status: status} ).then(response=>response.data)

export const postIsLogin = (loginData) => instanse.post(`auth/login/`, {email: loginData.email,
    password: loginData.password, rememberMe: loginData.rememberMe} ).then(response=>response.data)

export const deleteLogin = () => instanse.delete(`auth/login/`).then(response=>response.data)

