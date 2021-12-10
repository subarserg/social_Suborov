import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getStatusUserThunk, putStatusUserThunk } from "../../../redux/profile_reduser";



const ProfileStatus = (props) => {
    const status = useSelector((state)=>state.profileReduser.status)
    const dispatch = useDispatch()
    let [addStatus,  setAddStatus] = useState(false)
    let [newStatus, setNewStatus] = useState(status)

    const onAddStatus = () => {
        setAddStatus(true)
    }
    const onBlurAddStatus = () => {
        setAddStatus(false)
        dispatch(putStatusUserThunk(newStatus))
    }
    const onChangeStatus = (e) => {
        setNewStatus(e.target.value)
    }
    useEffect(()=>{
        dispatch(getStatusUserThunk(props.userId || `21028`))
    },[props.userId])
    return (
        <div>
            { addStatus ? <div><input autoFocus={true} value={newStatus} onChange={onChangeStatus} type="text" onBlur={onBlurAddStatus} /></div>
            : <div onDoubleClick={onAddStatus}>{status || `ПРИВЕТ`}</div>
            }
        </div>
       
    )
}

export default ProfileStatus