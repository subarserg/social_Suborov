import {instanseEdamam} from "./API";

const edamamAPI = {
    getFoodSearchAutocomplete: (textFood: string) => instanseEdamam.get<Array<string>>(`auto-complete?app_id=${process.env.REACT_APP_EDAMAM_BASE_FOOD_ID}&app_key=${process.env.REACT_APP_EDAMAM_BASE_FOOD_KEY}&q=${textFood}&limit=5`)
        .then(response => response.data),
    getFoodParser: (text: string) => instanseEdamam.get<FoodParserType>(`/api/food-database/v2/parser?app_id=${process.env.REACT_APP_EDAMAM_BASE_FOOD_ID}&app_key=${process.env.REACT_APP_EDAMAM_BASE_FOOD_KEY}&ingr=${text}`)
        .then(response => response.data),
    postFoodNutrients: () => instanseEdamam.post('/api/food-database/v2/nutrients?app_id=${process.env.REACT_APP_EDAMAM_BASE_FOOD_ID}&app_key=${process.env.REACT_APP_EDAMAM_BASE_FOOD_KEY}')
        .then(response => response.data),

}

export default edamamAPI


export type FoodParserType = {
    hints: Array<FoodParserHintsType>
    parsed: Array<FoodParserFoodType>
    text: string
}

type FoodParserFoodType = {
    food: FoodParserHintsFoodType
}

type FoodParserHintsType = {
    food: FoodParserHintsFoodType
    measures: Array<FoodParserHintsMeasuresType>
}

type FoodParserHintsMeasuresType = {
    label: string
    uri: string
    weight: number
}


export type FoodParserHintsFoodType = {
    category: string
    categoryLabel: string
    foodId: string
    image: string
    label: string
    nutrients: FoodParserHintsFoodNutrientsType
}

type FoodParserHintsFoodNutrientsType = {
    ENERC_KCAL: number
    PROCNT: number
    FAT: number
    CHOCDF: number
    FIBTG: number
}
