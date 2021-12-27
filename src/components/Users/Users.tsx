import * as React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getUsers2Thunk,
  getUsersThunk,
} from "../../redux/users_reduser";
import { withRedirect } from "../hoc/withRedirect";
import User from "./User";
import style from "./Users.module.css";
import {
  getCarentPageSelector,
  getIsPreloaderSelector, getPageSizeSelector,
  getTotalUsersSelector,
  getUsersSelector
} from "../../redux/Selectors/user_selector";
import {FC, useEffect} from "react";

const Users : FC = () => {
  const users = useSelector(getUsersSelector);
  const pageSize = useSelector(getPageSizeSelector);
  const totalUsersCount = useSelector(getTotalUsersSelector);
  const isPreloader = useSelector(getIsPreloaderSelector);
  const carentPage = useSelector(getCarentPageSelector);
  const dispatch = useDispatch();
 

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsersThunk(carentPage, pageSize))
    }
  }, [dispatch, carentPage, pageSize, users]);

  const onSetCarentPageSuccess = (carentPage : number) => {
    dispatch(getUsers2Thunk(carentPage))
  };

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  if(isPreloader){
    return <div>LOADING...</div>
  }
  return (
    <div>
      <div>
        {pages.map((p) => (
          <span key={p}
            className={carentPage === p ? style.selectPage : ``}
            onClick={(e) => {
              onSetCarentPageSuccess(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

const UsersRiderect = withRedirect(Users)

export default UsersRiderect;
