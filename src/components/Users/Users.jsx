import axios from "axios";
import React from "react";
import User from "./User";
import style from "./Users.module.css"

class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.carentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsersSuccess(response.data.items);
          this.props.setTotalUsersCountSuccess(response.data.totalCount);
        });
    }
  };
  onSetCarentPageSuccess = (carentPage) => {
    this.props.setCarentPageSuccess(carentPage)
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${carentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsersSuccess(response.data.items);
        });
  }
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
    let pages = [];
    for(let i=1; i <= pagesCount; i++){
      pages.push(i)
    }
    return (
      <div>
        <div>
          {pages.map(p => <span className={this.props.carentPage === p && style.selectPage} onClick={(e)=>{this.onSetCarentPageSuccess(p)}} >{p}</span>)}
        </div>
        {this.props.users.map((user) => (
          <User
            user={user}
            key={user.id}
            setUnfollowSuccess={this.props.setUnfollowSuccess}
            setFollowSuccess={this.props.setFollowSuccess}
          />
        ))}
      </div>
    );
  }
}

export default Users;
