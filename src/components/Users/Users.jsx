import axios from "axios";
import React from "react";
import User from "./User";

class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users`)
        .then((response) => {
          this.props.setUsersSuccess(response.data.items);
        });
    }
  }
  render() {
    return (
      <div>
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
