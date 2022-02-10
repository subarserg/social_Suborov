import {
  getProfileUsers,
  GetProfileUsersType, getRates, GetRatesType,
  getStatusUser, getWeatherTemp, putProfileInfo,
  putStatusUser,
  putUploadAvatar, ResultCodeEnum,
  UserPhotoType, WeatherCodeEnum, WeatherType
} from "../DAL/apiSenior";
import {BaseThunkType, InferActionType} from "./store";
import { BeforeUploadFileType, RcFile} from 'rc-upload/es/interface';
import edamamAPI, {FoodParserType} from "../DAL/EdamamAPI";

const defaultState = {
  postData: [
    { id: 1, text: "Hi,world", likesCount: 5 },
    { id: 2, text: "How are you", likesCount: 7 },
    { id: 3, text: "Good night", likesCount: 8 },
  ] as Array<PostDataTypes>,
  newPostText: "",
  profile: null as null | GetProfileUsersType,
  status: ``,
  weatherWiget: null as null | WeatherType,
  rates: null as null | GetRatesType,
  dataSearchFood: null as null | Array<string>,
  dataFoodParser: null as null | FoodParserType
};


const profileReduser = (state = defaultState, action : ActionTypes) : DefaultStateTypes => {
  switch (action.type) {
    case `profile/Sergey_Suborov/ADD-POST`:
      let postData = {
        id: 4,
        text: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        newPostText: "",
        postData: [...state.postData, postData],
      };
    case `profile/Sergey_Suborov/UPDATE-NEW-POST-TEXT`: {
      return {
        ...state,
        newPostText: action.text,
      };
    }
    case `profile/Sergey_Suborov/GET_PROFILE`: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    case `profile/Sergey_Suborov/GET_STATUS`: {
      return {
        ...state,
        status : action.status,
      }
    }
    case `profile/Sergey_Suborov/SET_WEATHER_WIGET`: {
      return {
        ...state,
        weatherWiget : action.weatherWiget,
      }
    }
    case `profile/Sergey_Suborov/SET_RATES`: {
      return {
        ...state,
        rates : action.rates,
      }
    }
    case `profile/Sergey_Suborov/SET_FOOD_SEARCH_AUTOCOMPLETE`: {
      return {
        ...state,
        dataSearchFood : action.dataSearchFood,
      }
    }
    case "profile/Sergey_Suborov/SET_FOOD_PARSER" : {
      return {
        ...state,
        dataFoodParser : action.dataFoodParser
      }
    }
    case `profile/Sergey_Suborov/UPLOAD_AVATAR`: {
      return {
        ...state,
        profile : {
          ...state.profile,
          photos: action.avatar
        } as GetProfileUsersType,
      }
    }
    default:
      return state;
  }
};

export const actions = {
  setAddPostSuccess: () => ({type: `profile/Sergey_Suborov/ADD-POST`} as const),
  setChangeNewTextSuccess: (text: string) => ({type: `profile/Sergey_Suborov/UPDATE-NEW-POST-TEXT`, text} as const),
  setProfileSuccess: (profile: GetProfileUsersType) => ({type: `profile/Sergey_Suborov/GET_PROFILE`, profile} as const),
  setStatusSuccess: (status: string) => ({type: `profile/Sergey_Suborov/GET_STATUS`, status} as const),
  putUploadAvatarSuccess: ( avatar : UserPhotoType ) => ({type: `profile/Sergey_Suborov/UPLOAD_AVATAR`, avatar} as const),
  setWeatherTempSuccess: ( weatherWiget : WeatherType ) => ({type: `profile/Sergey_Suborov/SET_WEATHER_WIGET`, weatherWiget} as const),
  setRatesSuccess: ( rates : GetRatesType ) => ({type: `profile/Sergey_Suborov/SET_RATES`, rates} as const),
  setFoodSearchAutocompleteSuccess: ( dataSearchFood : Array<string> ) => ({type: `profile/Sergey_Suborov/SET_FOOD_SEARCH_AUTOCOMPLETE`, dataSearchFood} as const),
  setFoodParserSuccess: ( dataFoodParser : FoodParserType ) => ({type: `profile/Sergey_Suborov/SET_FOOD_PARSER`, dataFoodParser} as const),
}


export const getRatesThunk = () : ThunkTypes => async (dispatch) => {
  try {
    let data = await getRates()
    if (data.success) dispatch(actions.setRatesSuccess(data))
  }catch (e) {
    console.log(e)
  }
}

export const getFoodSearchAutocompleteThunk = (textFood : string) : ThunkTypes => async (dispatch) => {
  try {
    let data = await edamamAPI.getFoodSearchAutocomplete(textFood)
    dispatch(actions.setFoodSearchAutocompleteSuccess(data))
  }catch (e) {
    console.log(e)
  }
}

export const getFoodParserThunk = (text: string) : ThunkTypes => async (dispatch) => {
  try {
    let data = await edamamAPI.getFoodParser(text)
    dispatch(actions.setFoodParserSuccess(data))
  }catch (e) {
    console.log(e)
  }
}




export const getWeatherTempThunk = (cityName: string) : ThunkTypes => async (dispatch) => {
  try {
    let data = await getWeatherTemp(cityName)
    if (data.cod === WeatherCodeEnum.Success ) dispatch(actions.setWeatherTempSuccess(data))
  }catch (e) {
    console.log(e)
  }
}


export const getProfileUsersThunk = (userId: number) : ThunkTypes => async (dispatch) => {
  try {
    let data = await getProfileUsers(userId)
    dispatch(actions.setProfileSuccess(data))
  }catch (e) {
    console.log(e)
  }
} 

export const getStatusUserThunk = (userId: number) : ThunkTypes => async (dispatch) => {
  try {
    let data = await getStatusUser(userId)
    dispatch(actions.setStatusSuccess(data))
  }catch (e) {
    console.log(e)
  }
}

export const putStatusUserThunk = (status: string) : ThunkTypes => async (dispatch) => {
  try {
    let data = await putStatusUser(status)
    if(data.resultCode === ResultCodeEnum.Success){
      dispatch(actions.setStatusSuccess(status))
    }
  }catch (e) {
    console.log(e)
  }
}

export const putUploadAvatarThunk = (avatar: Exclude<BeforeUploadFileType, File | boolean> | RcFile) : ThunkTypes => async (dispatch ) => {
  try {
    // @ts-ignore
    let data = await putUploadAvatar(avatar)
    if(data.resultCode === ResultCodeEnum.Success){
      dispatch(actions.putUploadAvatarSuccess(data.data))
    }

  }catch (e) {
    console.log(e)
  }
}

export const putProfileInfoThunk = (profile: GetProfileUsersType) : ThunkTypes => async (dispatch, getState) => {
  try {
    let userId = getState().authReduser.userId
    let data = await putProfileInfo(profile)
    if(data.resultCode === ResultCodeEnum.Success){
      if(userId) await dispatch(getProfileUsersThunk(userId))
    }
  }catch (e) {
    console.log(e)
  }
}

export default profileReduser;



type DefaultStateTypes = typeof defaultState
type PostDataTypes =  {
  id: number
  text: string
  likesCount: number
}

type ActionTypes = InferActionType<typeof actions>
type ThunkTypes = BaseThunkType<ActionTypes>
