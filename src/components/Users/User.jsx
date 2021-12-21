import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  deleteFollowUserThunk, onFollowClickThunk,
  setFollowSuccess,
} from "../../redux/users_reduser";
import imgAva from "./../../assets/images/images.png";
import style from "./Users.module.css";

const User = (props) => {
  const dispatch = useDispatch();

  let [buttonInProgress, setButtonInProgres] = useState(false);

  const followUnfollwFlow = (dispatch, thunk) => {
    setButtonInProgres(true);
    setButtonInProgres(false);
  }

  const onUnfollowClick = () => {
    followUnfollwFlow(dispatch(deleteFollowUserThunk(props.user.id)));
  };

  const onFollowClick = () => {
    followUnfollwFlow(dispatch(onFollowClickThunk(props.user.id)));
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
