import React from "react";
import {Formik} from 'formik'
import {Form, Input, Checkbox, SubmitButton} from 'formik-antd'
import {useDispatch, useSelector} from "react-redux";
import {postIsLoginThunk} from "../../redux/auth_reduser";
import {FC} from "react";
import {Image} from "antd";
import {getCaptchaUrlSelector} from "../../redux/Selectors/auth_selector";

const LoginForm : FC = () => {
    const dispatch = useDispatch()
    const onLoginForm = (values: FormType) => {
        dispatch(postIsLoginThunk(values))
    }
    const captchaUrl = useSelector(getCaptchaUrlSelector)

    return (
        <Formik <FormType> initialValues={{email: ``, password: ``, rememberMe: false, captcha: ""}} onSubmit={onLoginForm}>
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
                {
                    captchaUrl && <>
                        <Image src={captchaUrl} alt="no photo"/>
                        <Input name='captcha' />
                    </>
                }
                <SubmitButton  disabled={false} >Login</SubmitButton>
            </Form>
        </Formik>
    )
}
export default LoginForm

export type FormType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}