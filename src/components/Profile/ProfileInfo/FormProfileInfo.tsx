import React, {FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {Formik} from 'formik'
import {GetProfileUsersType, ProfileContactsType} from "../../../DAL/api";
import {Input, Checkbox, SubmitButton, Form, ResetButton} from 'formik-antd'
import {putProfileInfoThunk} from "../../../redux/profile_reduser";


const FormProfileInfo: FC<PropsTypes> = ({profile}) => {
    const dispatch = useDispatch()
    let [checkedJob, setCheckedJob] = useState<boolean>(profile.lookingForAJob)
    const onFormProfileInfo = (values: FormType) => {
        dispatch(putProfileInfoThunk({...profile,
        contacts: values.contacts, lookingForAJobDescription: values.lookingForAJobDescription,
            fullName: values.fullName, lookingForAJob: values.lookingForAJob, aboutMe: values.aboutMe
        }))
    }
    const onChangeLookingForAJob = () => setCheckedJob(!checkedJob)

    return (
        <Formik initialValues={{
            fullName: ``, lookingForAJob: false, lookingForAJobDescription: ``, aboutMe:``, contacts: {
                github: ``, vk: ``, facebook: ``, instagram: ``, twitter: ``, website: ``, youtube: ``, mainLink: ``
            }
        }} onSubmit={onFormProfileInfo}>
            <Form labelCol={{span: 4}} wrapperCol={{span: 14}}>
                <span>Full Name:</span>
                <Input name='fullName' placeholder={profile.fullName}/>
                <span>Looking For a Job:</span>
                <Checkbox name="lookingForAJob" onChange={onChangeLookingForAJob} checked={checkedJob}/>
                {
                    checkedJob && <>
                        <span>Skills:</span>
                        <Input.TextArea name='lookingForAJobDescription' placeholder={profile.lookingForAJobDescription}/>
                    </>
                }
                <span>AboutMe:</span>
                <Input.TextArea name='aboutMe' placeholder={profile.aboutMe}/>
                {
                    Object.keys(profile.contacts).map((el) => <div key={el}>
                            <span>{el}</span>
                            <Input name={`contacts.${el}`} placeholder={profile.contacts[el as keyof ProfileContactsType]}/>
                        </div>
                    )
                }
                <ResetButton>CLEAR</ResetButton>
                <SubmitButton>SAVE</SubmitButton>
            </Form>
        </Formik>
    );
};

export default FormProfileInfo

type FormType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: ProfileContactsType
}

type PropsTypes = {
    profile: GetProfileUsersType
}


