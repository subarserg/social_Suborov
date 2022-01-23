import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProfileUsersThunk, putUploadAvatarThunk} from "../../../redux/profile_reduser";
import style from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";
import {useRouteMatch} from "react-router-dom";
import {AppStateType} from "../../../redux/store";
import {ChangeEvent, useEffect, useState} from "react";
import {Button, Upload, message} from "antd";
import {EditOutlined, UploadOutlined} from "@ant-design/icons";
import {UploadRequestOption} from 'rc-upload/es/interface';
import FormProfileInfo from "./FormProfileInfo";
import {getUsersSelector} from "../../../redux/Selectors/user_selector";
import {deleteFollowUserThunk, onFollowClickThunk} from "../../../redux/users_reduser";



const ProfileInfo = () => {
    const profile = useSelector((state: AppStateType) => state.profileReduser.profile)
    const userId = useSelector((state: AppStateType) => state.authReduser.userId)
    const users = useSelector(getUsersSelector);
    const dispatch = useDispatch()
    const match = useRouteMatch()
    let [buttonInProgress, setButtonInProgres] = useState<boolean>(false);
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


    const uploadAvatar = (options: UploadRequestOption<any>) => {

        dispatch(putUploadAvatarThunk(options.file))
    }

    const onUnfollowClick = async () => {
        setButtonInProgres(true);
        await dispatch(deleteFollowUserThunk(user?.id));
        setButtonInProgres(false);
    };

    const onFollowClick = async () => {
        setButtonInProgres(true);
        await dispatch(onFollowClickThunk(user?.id));
        setButtonInProgres(false);
    };
    let user = users.find(user => user.id === +match.params.userId)
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
                <Upload customRequest={uploadAvatar}>
                    {
                        userId === profile.userId && <Button icon={<UploadOutlined/>}>Click to Upload</Button>
                    }
                </Upload>
            </div>

        {
            userId !== profile.userId ?
            user?.followed ? (
            <div>
            <button disabled={buttonInProgress} onClick={onUnfollowClick}>
            UNFOLLOW
            </button>
            </div>
            ) : (
            <div>
            <button disabled={buttonInProgress} onClick={onFollowClick}>
            FOLLOW
            </button>
            </div>) : <></>
        }

            <div className={style.profileInfo}><ProfileStatus userId={match.params.userId}/></div>

            <div>
        {
            userId === profile.userId && <Button onClick={onSetEditOutlined} icon={<EditOutlined />} >EDIT</Button>
        }
        {editOutlined && <FormProfileInfo profile={profile} />}
            </div>
            </>
        }
            </div>
            )
        }

            export default ProfileInfo


