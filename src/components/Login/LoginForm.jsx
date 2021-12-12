import React from "react";
import { Formik } from 'formik'
import { Form, Input, Checkbox, SubmitButton } from 'formik-antd'
import {useDispatch} from "react-redux";
import {postIsLoginThunk} from "../../redux/auth_reduser";

const LoginForm = () => {
    const dispatch =  useDispatch()


    const onLoginForm = (values) => {
        dispatch(postIsLoginThunk(values))

    }

    return (
        <Formik initialValues={{email: ``, password: ``, rememberMe: false}} onSubmit={onLoginForm}>
            <Form>
                <Input name='email' placeholder='Email' label="Username" rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}/>
                <Input.Password name='password' placeholder='Password' label="Password" rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}/>
                <Checkbox name='rememberMe'>Remember Me</Checkbox>
                <SubmitButton>Login</SubmitButton>
            </Form>
        </Formik>
    )
}

export default LoginForm