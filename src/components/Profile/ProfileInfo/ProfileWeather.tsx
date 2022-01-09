import React, {FC, useEffect} from "react";
import {Formik} from 'formik'
import {Input, Form, SubmitButton} from "formik-antd";
import {useDispatch, useSelector} from "react-redux";
import {getWeatherTempThunk} from "../../../redux/profile_reduser";
import {getWeatherWigetSelector} from "../../../redux/Selectors/profile_selector";



const ProfileWeather : FC = () => {
    const dispatch = useDispatch()
    const weatherWiget = useSelector(getWeatherWigetSelector)
    const onWeatherForm = (values: FormType ) => {
        dispatch(getWeatherTempThunk(values.cityName))
    }
    const tempKtoC = (kelvin: number | undefined) => kelvin ? Math.round(kelvin - 273)  : null
    useEffect(()=>{
        if (!weatherWiget) dispatch(getWeatherTempThunk(`Orsha`))
    },[])
    return (
        <Formik initialValues={{cityName: ``}} onSubmit={onWeatherForm}>
            <Form>
                <Input name="cityName" placeholder="please write city name" />
                <SubmitButton disabled={false} >GO</SubmitButton>
                <div>
                    <span>Как на улуце в городе {weatherWiget?.name}? <img src={`http://openweathermap.org/img/wn/${weatherWiget?.weather[0].icon}.png`}
                                             alt="no icon"/> {weatherWiget?.weather[0].main}</span>
                    <div>
                        <span>{weatherWiget?.weather[0].description}</span>
                    </div>
                </div>
                <div>
                    <span>Скорость ветра: {weatherWiget?.wind.speed}</span>
                </div>
                <div>
                    <span>Температура: {tempKtoC(weatherWiget?.main.temp)}</span>
                </div>
                <div>
                    <span>Влажность: {weatherWiget?.main.humidity}</span>
                </div>
                <div>
                    <span>Давление: {weatherWiget?.main.grnd_level}</span>
                </div>
            </Form>
        </Formik>
    )
}

export default ProfileWeather

type FormType = {
    cityName: string
}