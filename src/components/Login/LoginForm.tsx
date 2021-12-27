import * as React from "react";
import {Formik} from 'formik'
import {Form, Input, Checkbox, SubmitButton} from 'formik-antd'
import {useDispatch} from "react-redux";
import {postIsLoginThunk} from "../../redux/auth_reduser";
import {FC} from "react";

const LoginForm : FC = () => {
    const dispatch = useDispatch()
    const onLoginForm = (values: FormType) => {
        dispatch(postIsLoginThunk(values))
    }

    return (
        <Formik initialValues={{email: ``, password: ``, rememberMe: false}} onSubmit={onLoginForm}>
            <Form>
                {/* @ts-ignore */}
                <Input name='email' placeholder='Email' rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}/>
                {/* @ts-ignore */}
                <Input.Password name='password' placeholder='Password' rules={[
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

type FormType = {
    email: string
    password: string
    rememberMe: boolean
}