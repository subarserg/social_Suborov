import React, {FC} from "react";
import {Formik} from 'formik'
import {Input, Form, SubmitButton} from "formik-antd";


const ProfileWeather : FC = () => {
    const onWeatherForm = (values:  ) => {

    }
    return (
        <Formik initialValues={{cityName: ``}} onSubmit={onWeatherForm}>
            <Form>
                <Input name="cityName" placeholder="please write city name" />
                <SubmitButton>GO</SubmitButton>
                <span>Скорость ветра: {weatherWiget.wind.speed}</span>
                <span>Температура</span>
                <span>Влажность</span>
                <span>Давление</span>
            </Form>
        </Formik>
    )
}

export default ProfileWeather

