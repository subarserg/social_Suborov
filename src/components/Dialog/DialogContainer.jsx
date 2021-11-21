import { connect } from "react-redux";
import { setUpdateNewMessageTextSuccess, setAddMessageSuccess } from "../../redux/dialog_reduser";
import Dialog from "./Dialog";


let mapStateToProps = (state) => ({
  dialogData: state.dialogReduser.dialogData,
  newMessageText: state.dialogReduser.newMessageText,
  messagesData: state.dialogReduser.messagesData

})

export default connect(mapStateToProps, {setUpdateNewMessageTextSuccess, setAddMessageSuccess })(Dialog)
