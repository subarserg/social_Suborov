import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getUsers2Thunk,
  getUsersThunk,
} from "../../redux/users_reduser";
import User from "./User";
import style from "./Users.module.css";

const Users = () => {
  const users = useSelector((state) => state.usersReduser.users);
  const pageSize = useSelector((state) => state.usersReduser.pageSize);
  const totalUsersCount = useSelector(
    (state) => state.usersReduser.totalUsersCount
  );
  const isPreloader = useSelector((state) => state.usersReduser.isPreloader);
  const carentPage = useSelector((state) => state.usersReduser.carentPage);
  const dispatch = useDispatch();
 

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsersThunk(carentPage, pageSize))
    }
  }, []);

  const onSetCarentPageSuccess = (carentPage) => {
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
          <span
            className={carentPage === p && style.selectPage}
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

export default Users;
