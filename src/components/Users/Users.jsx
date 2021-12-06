import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setCarentPageSuccess,
  setTotalUsersCountSuccess,
  setUsersSuccess,
} from "../../redux/users_reduser";
import User from "./User";
import style from "./Users.module.css";

const Users = () => {
  const users = useSelector((state) => state.usersReduser.users);
  const pageSize = useSelector((state) => state.usersReduser.pageSize);
  const totalUsersCount = useSelector(
    (state) => state.usersReduser.totalUsersCount
  );
  const carentPage = useSelector((state) => state.usersReduser.carentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${carentPage}&count=${pageSize}`,
          { withCredentials: true }
        )
        .then((response) => {
          dispatch(setUsersSuccess(response.data.items));
          dispatch(setTotalUsersCountSuccess(response.data.totalCount));
        });
    }
  }, []);

  const onSetCarentPageSuccess = (carentPage) => {
    dispatch(setCarentPageSuccess(carentPage));
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${carentPage}&count=${pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        dispatch(setUsersSuccess(response.data.items));
      });
  };

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
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
