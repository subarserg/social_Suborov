import {AppStateType} from "../store";
import {createSelector} from "reselect";

export const getWeatherWigetSelector = (state : AppStateType) => state.profileReduser.weatherWiget
export const getRatesSelector = (state : AppStateType) => state.profileReduser.rates
export const getDataSearchFoodSelector = (state : AppStateType) => state.profileReduser.dataSearchFood
export const getDataFoodParserSelector = (state : AppStateType) => state.profileReduser.dataFoodParser

export const getDataFoodParserTableSelector = createSelector(getDataFoodParserSelector, (dataFoodParser)=>{
    return dataFoodParser ? [{...dataFoodParser?.parsed[0].food, ENERC_KCAL: dataFoodParser.parsed[0].food.nutrients.ENERC_KCAL,
        PROCNT: dataFoodParser.parsed[0].food.nutrients.PROCNT,
        FAT: dataFoodParser.parsed[0].food.nutrients.FAT,
        CHOCDF: dataFoodParser.parsed[0].food.nutrients.CHOCDF,
        FIBTG: dataFoodParser.parsed[0].food.nutrients.FIBTG}] : null

})
