import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  setFollowSuccess,
  setUnfollowSuccess,
} from "../../redux/users_reduser";
import imgAva from "./../../assets/images/images.png";
import style from "./Users.module.css";

const User = (props) => {
  const dispatch = useDispatch();

  const onUnfollowClick = () => {
    axios
      .delete(
        `https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,
        { withCredentials: true,
          headers: {
            "API-KEY": "0606a532-d9ec-4e49-9195-c2feb1d79711"
          }
        }
      )
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setUnfollowSuccess(props.user.id));
        }
      });
  };

  const onFollowClick = () => {
    axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,
        {},
        { withCredentials: true,
          headers: {
            "API-KEY": "0606a532-d9ec-4e49-9195-c2feb1d79711"
          } }
      )
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setFollowSuccess(props.user.id));
        }
      });
  };

  return (
    <div>
      <div>
        <div className={style.name}>
          <span>MY NAME IS: {props.user.name}</span>
        </div>
        <div>
          <NavLink to={`profile/` + props.user.id}>
            <img
              className={style.imgAva}
              src={
                props.user.photos.small === null
                  ? imgAva
                  : props.user.photos.small
              }
              alt="noPhoto"
            />
          </NavLink>
        </div>
        {props.user.followed ? (
          <div>
            <button onClick={onUnfollowClick}>UNFOLLOW</button>
          </div>
        ) : (
          <div>
            <button onClick={onFollowClick}>FOLLOW</button>
          </div>
        )}
      </div>
      <div>
        <span>
          MY STATUS:{" "}
          {props.user.name === "subar"
            ? "I am BOSS"
            : props.user.status === null
            ? "вы лошары"
            : props.user.status}
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
