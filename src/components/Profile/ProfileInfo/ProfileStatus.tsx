import React from "react";
import {ChangeEvent, FC, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getStatusUserThunk, putStatusUserThunk } from "../../../redux/profile_reduser";
import {AppStateType} from "../../../redux/store";



const ProfileStatus : FC<PropsType> = ({userId}) => {
    const status = useSelector((state:AppStateType) => state.profileReduser.status)
    const dispatch = useDispatch()
    let [addStatus,  setAddStatus] = useState<boolean>(false)
    let [newStatus, setNewStatus] = useState<string>(status)

    const onAddStatus = () => {
        setAddStatus(true)
    }
    const onBlurAddStatus = () => {
        setAddStatus(false)
        dispatch(putStatusUserThunk(newStatus))
    }
    const onChangeStatus = (e : ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.target.value)
    }
    useEffect(()=>{
        dispatch(getStatusUserThunk(userId || 21028))
    },[userId, dispatch])
    return (
        <div>
            { addStatus ? <div><input autoFocus={true} value={newStatus} onChange={onChangeStatus} type="text" onBlur={onBlurAddStatus} /></div>
            : <div onDoubleClick={onAddStatus}>{status || `ПРИВЕТ`}</div>
            }
        </div>
       
    )
}
export default ProfileStatus

type PropsType = {
    userId: number
}