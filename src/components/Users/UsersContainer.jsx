import { connect } from "react-redux";
import Users from "./Users";
import {setFollowSuccess, setUnfollowSuccess, setUsersSuccess} from "./../../redux/users_reduser"


let mapStateToProps = (state) => ({
 users: state.usersReduser.users
})

export default connect(mapStateToProps, { setFollowSuccess, setUnfollowSuccess, setUsersSuccess })(Users)
