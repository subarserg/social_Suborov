import React, {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getCarentPageSelector,
    getPageSizeSelector,
    getTotalUsersSelector, getUsersFriendsSelector,
} from "../../redux/Selectors/user_selector";
import {getUserFriendsThunk} from "../../redux/users_reduser";
import {Button, Col, Row} from "antd";


const MyFriends : FC = ()  => {
    const users = useSelector(getUsersFriendsSelector);
    const pageSize = useSelector(getPageSizeSelector);
    const [carentPage, setCarentPage ] = useState<number>(1);
    const totalFriends = useSelector(getTotalUsersSelector);
    const onNextFriends = async () => {
        setCarentPage((carentPage)=>carentPage+1)
    }


    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(getUserFriendsThunk(carentPage, pageSize, {term:"", friend: true}))
    }, [dispatch, carentPage, pageSize]);

    return (
        <Row>
            { totalFriends > 10 && totalFriends ? totalFriends > users.length && <Button type={"primary"} onClick={onNextFriends}>NEXT FRIENDS</Button> : <></>}
            <div><span>
                Friends: {totalFriends}
            </span></div>
            {
                users.map(friend=>(
                    <Row key={friend.id}>
                        <Col span={4}><img src={friend.photos.small || "https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"} alt="no photo"/></Col>
                        <Col span={20}><span>{friend.name}</span><br/>
                            <span>{friend.status || `NO STATUS`}</span></Col>

                </Row>))
            }
        </Row>
    )

}

export default MyFriends