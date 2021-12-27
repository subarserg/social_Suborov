import * as React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  deleteFollowUserThunk, onFollowClickThunk,
} from "../../redux/users_reduser";
import imgAva from "./../../assets/images/images.png";
import style from "./Users.module.css";
import {UserType} from "../../DAL/api";
import {FC, useState} from "react";

const User : FC<PropsType> = ({user}) => {
  const dispatch = useDispatch();

  let [buttonInProgress, setButtonInProgres] = useState<boolean>(false);

  const onUnfollowClick = async () => {
    setButtonInProgres(true);
   await dispatch(deleteFollowUserThunk(user.id));
    setButtonInProgres(false);
  };

  const onFollowClick = async () => {
    setButtonInProgres(true);
   await dispatch(onFollowClickThunk(user.id));
    setButtonInProgres(false);
  };
  return (
    <div>
      <div>
        <div className={style.name}>
          <span>MY NAME IS: {user.name}</span>
        </div>
        <div>
          <NavLink to={`profile/` + user.id}>
            <img
              className={style.imgAva}
              src={
                user.photos.small === null
                  ? imgAva
                  : user.photos.small
              }
              alt="noPhoto"
            />
          </NavLink>
        </div>
        {user.followed ? (
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
          </div>
        )}
      </div>
      <div>
        <span>
          MY STATUS:{" "}
          {user.name === "subar"
            ? "I am BOSS"
            : user.status === null
            ? "вы лошары"
            : user.status}
        </span>
      </div>
      <div>
        <div>
          <span>{`props.user.location.country`}</span>
        </div>
        <div>
          <span>{`props.user.location.city`}</span>
        </div>
      </div>
    </div>
  );
};

export default User;

type PropsType = {
  user: UserType
}
