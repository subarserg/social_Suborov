import { connect } from "react-redux";
import {setAddPostSuccess, setChangeNewTextSuccess} from "../../../redux/profile_reduser";
import MyPost from "./MyPost"

const mapStateToProps = (state) => ({
  postData: state.profileReduser.postData,
  newText: state.profileReduser.newPostText
})

export default connect(mapStateToProps, {setAddPostSuccess, setChangeNewTextSuccess})(MyPost);
