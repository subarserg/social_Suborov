import axios from "axios";

const instanse = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "0606a532-d9ec-4e49-9195-c2feb1d79711"
    }

})

export const getAuthUser = () => instanse.get(`auth/me`).then(response=>response.data)

export const getUsers = (carentPage, pageSize) => instanse.get(`users?page=${carentPage}&count=${pageSize}`).then(response=>response.data)

export const getUsers2 =(carentPage, pageSize) => instanse.get(`users?page=${carentPage}&count=${pageSize}`).then(response=>response.data)

export const postFollowUser = (userID) => instanse.post(`follow/${userID}`).then(response=>response.data)

export const deleteFollowUser = (userId) => instanse.delete(`follow/${userId}`).then(response=>response.data)

