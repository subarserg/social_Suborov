import axios from "axios";

import {FormType} from "../components/Login/LoginForm";

const instanse = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "c82ee34b-7546-436e-bc1d-d6134a51853a"
    }
})

const instanseWeather = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`
})
const weatherKey = "43f9c815f1e98b336a9644f9aedc4e4d"



const instanseRates = axios.create({
    baseURL: `http://api.exchangeratesapi.io/v1/`
})
const ratesKey = "8694cbf57aef009ed0b655888262bdbb"


export const getRates = () => instanseRates.get<GetRatesType>(`latest?access_key=${ratesKey}&symbols=USD,AUD,CAD,PLN,BYN`).then(response => response.data)

export const getWeatherTemp = (cityName: string) => instanseWeather.get<WeatherType & WeatherCodeEnum>(`weather?q=${cityName}&appid=${weatherKey}`).then(response => response.data)


export const getAuthUser = () => instanse.get<ApiResponseType<GetAuthUserType>>(`auth/me`).then(response => response.data)

export const getUsers = (carentPage: number, pageSize: number) => instanse.get<GetUsersType>(`users?page=${carentPage}&count=${pageSize}`).then(response => response.data)

export const postFollowUser = (userID: number) => instanse.post<ApiResponseType>(`follow/${userID}`).then(response => response.data)

export const deleteFollowUser = (userId: number) => instanse.delete<ApiResponseType>(`follow/${userId}`).then(response => response.data)

export const getProfileUsers = (userId: number) => instanse.get<GetProfileUsersType>(`profile/${userId}`).then((response) => response.data)

export const getStatusUser = (userId: number) => instanse.get<string>(`profile/status/${userId}`).then(response => response.data)

export const putStatusUser = (status: string) => instanse.put<ApiResponseType>(`profile/status/`, {status: status}).then(response => response.data)

export const putUploadAvatar = (avatar: File) => {
    const formData = new FormData()
    formData.append("image", avatar)
    return instanse.put<ApiResponseType<UserPhotoType>>(`profile/photo/`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(response => response.data)
}

export const putProfileInfo = (profile: GetProfileUsersType) => instanse.put<ApiResponseType>(`profile/`, profile).then(response => response.data)


export const postIsLogin = (loginData: FormType) => instanse.post<ApiResponseType<PostIsLoginType, ResultCodeCaptchaEnum | ResultCodeEnum>>(`auth/login/`, {
    email: loginData.email,
    password: loginData.password,
    rememberMe: loginData.rememberMe,
    captcha: loginData.captcha
}).then(response => response.data)

export const deleteLogin = () => instanse.delete<ApiResponseType>(`auth/login/`).then(response => response.data)

export const getCaptchaUrl = () => instanse.get<CaptchaUrlType>(`security/get-captcha-url`).then(response => response.data)


type CaptchaUrlType = {
    url: string
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
    aboutMe: string
    contacts: ProfileContactsType
    photos: UserPhotoType
}

export type ProfileContactsType = {
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


export enum WeatherCodeEnum {
    Success = 200
}





type  WeatherMainType = {
        temp: number
        grnd_level: number
        humidity: number
}

type WeatherListWeatherType = {
    id: number
    main: string
    description: string
    icon: string
}

type WeatherCloudsType = {
    all: number
}

type WeatherWindType = {
    speed: number
}

type WeatherCoordType ={
    lat: number
    lon: number
}

type WeatherSysType = {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
}

export type WeatherType = {
    base: string
    clouds: WeatherCloudsType
    cod: number
    coord: WeatherCoordType
    dt: number
    id: number
    main: WeatherMainType
    name: string
    sys: WeatherSysType
    timezone: number
    visibility: number
    weather: Array<WeatherListWeatherType>
    wind: WeatherWindType
}

export type RatesType = {
    USD: number
    AUD: number
    CAD: number
    PLN: number
    BYN: number
}


export type GetRatesType = {
    success: boolean
    timestamp: number
    base: string
    date: string
    rates: RatesType
}

