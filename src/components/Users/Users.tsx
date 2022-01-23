import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  actions,
  getUsersThunk,
} from "../../redux/users_reduser";
import { withRedirect } from "../hoc/withRedirect";
import User from "./User";
import {
  getCarentPageSelector,
  getIsPreloaderSelector, getPageSizeSelector,
  getTotalUsersSelector,
  getUsersSelector
} from "../../redux/Selectors/user_selector";
import {FC, useEffect} from "react";
import Paginations from "./Paginator";


const Users : FC = () => {
  const users = useSelector(getUsersSelector);
  const pageSize = useSelector(getPageSizeSelector);
  const totalUsersCount = useSelector(getTotalUsersSelector);
  const isPreloader = useSelector(getIsPreloaderSelector);
  const carentPage = useSelector(getCarentPageSelector);
  const dispatch = useDispatch();
 

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsersThunk(carentPage, pageSize,{term: "", friend: null}))
    }
  }, [dispatch, carentPage, pageSize, users]);

  const onSetCarentPageSuccess = (carentPage : number, pageSize: number) => {
    dispatch(getUsersThunk(carentPage, pageSize, {term: "", friend: null}))
  };

  const onSetPageSize = (size: number) => {
    dispatch(actions.setPageSizeSuccess(size))
  };


  if(isPreloader){
    return <div>LOADING...</div>
  }
  return (
    <div>
      <Paginations totalCount={totalUsersCount}
                   pageSize={pageSize}
                   carentPage={carentPage}
                   setCarentPage={onSetCarentPageSuccess}
                   setPageSize={onSetPageSize} />
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

const UsersRiderect = withRedirect(Users)

export default UsersRiderect;
