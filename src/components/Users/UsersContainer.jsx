import { connect } from "react-redux";
import Users from "./Users";
import {setFollowSuccess, setUnfollowSuccess, setUsersSuccess, setCarentPageSuccess, setTotalUsersCountSuccess} from "./../../redux/users_reduser"


let mapStateToProps = (state) => ({
 users: state.usersReduser.users,
 pageSize: state.usersReduser.pageSize,
 totalUsersCount: state.usersReduser.totalUsersCount,
 carentPage: state.usersReduser.carentPage
})

export default connect(mapStateToProps, { setFollowSuccess, setUnfollowSuccess, setUsersSuccess, setCarentPageSuccess, setTotalUsersCountSuccess })(Users)
