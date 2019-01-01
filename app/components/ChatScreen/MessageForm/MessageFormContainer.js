import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {sendMessage, updateMessage} from "../../../store/chat/Actions";
import MessageFormComponent from "./MessageFormComponent"

const MessageFormContainer = props =>
    <MessageFormComponent updateMessage={props.updateMessage} senderNumber={props.senderNumber}
                          sendMessage={props.sendMessage} message={props.message}
                          receiverNumber={props.receiverNumber}/>

const mapStateToProps = state => {
    return {
        message: state.chat.message,
        senderNumber: state.user.user.phoneNumber,
        receiverNumber: state.user.currentChatUser.phoneNumber
    }
}

const mapDispatchToProps = {
    sendMessage,
    updateMessage
}

MessageFormContainer.propTypes = {
    sendMessage:PropTypes.func.isRequired,
    updateMessage:PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,

}

export default connect(mapStateToProps,mapDispatchToProps)(MessageFormContainer)