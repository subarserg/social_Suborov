import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProfileUsersThunk, putUploadAvatarThunk} from "../../../redux/profile_reduser";
import style from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";
import {useRouteMatch} from "react-router-dom";
import {AppStateType} from "../../../redux/store";
import {ChangeEvent, useEffect, useState} from "react";
import {Button, Upload, message} from "antd";
import {EditOutlined, UploadOutlined} from "@ant-design/icons";
import { UploadRequestOption } from 'rc-upload/es/interface';
import FormProfileInfo from "./FormProfileInfo";


const ProfileInfo = () => {
    const profile = useSelector((state: AppStateType) => state.profileReduser.profile)
    const userId = useSelector((state: AppStateType) => state.authReduser.userId)
    const dispatch = useDispatch()
    const match = useRouteMatch()
    let [editOutlined, setEditOutlined] = useState<boolean>(false)
    const onSetEditOutlined = () => {
        setEditOutlined(!editOutlined)
    }


    useEffect(() => {
        let userId = +match.params.userId
        if (!userId) {
            userId = 21028
        }
        dispatch(getProfileUsersThunk(userId))
    }, [match.params.userId, dispatch])


    const uploadAvatar = (options : UploadRequestOption<any>) => {

        dispatch(putUploadAvatarThunk(options.file))
    }

    return (
        <div>{!profile ? <></> :
            <>
                <div>
                    <img
                        src={profile.photos.large || "https://www.vinterier.ru/pictures/shop/osen-v-moskve-kartina-maslom-60x50.jpg"}
                        alt="NoPhoto"/>
                </div>
                <div><span>{profile.fullName}</span></div>
                <div>
                    <Upload customRequest={uploadAvatar} >
                        {
                            userId === profile.userId && <Button icon={<UploadOutlined/>}>Click to Upload</Button>
                        }
                </Upload>
                </div>
                <div className={style.profileInfo}><ProfileStatus userId={match.params.userId}/></div>

                <div>
                    {
                        userId === profile.userId && <Button onClick={onSetEditOutlined} icon={<EditOutlined />} >EDIT</Button>
                    }
                    { editOutlined && <FormProfileInfo profile={profile} /> }
                </div>
            </>
        }
        </div>
    )
}

export default ProfileInfo


