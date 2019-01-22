import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {loadMessagesRelatedToChatUser, sendMessage, updateMessage,} from "../../../store/chat/Actions";
import {switchToHomePage} from '../../../store/user/Actions'
import MessageFormComponent from "./MessageFormComponent"

const MessageFormContainer = props =>
    <MessageFormComponent updateMessage={props.updateMessage} senderNumber={props.senderNumber}
                          sendMessage={props.sendMessage} message={props.message}
                          receiverNumber={props.receiverNumber}
                          loadMessagesRelatedToChatUser={props.loadMessagesRelatedToChatUser}
                          messages={props.messages} currentChatUserName={props.currentChatUserName}
                          switchToHomePage={props.switchToHomePage}/>

const mapStateToProps = state => {
    return {
        message: state.chat.message,
        senderNumber: state.user.user.phoneNumber,
        receiverNumber: state.user.currentChatUser.phoneNumber,
        messages: state.chat.messages,
        currentChatUserName: state.user.currentChatUser.name
    }
}

const mapDispatchToProps = {
    sendMessage,
    updateMessage,
    loadMessagesRelatedToChatUser,
    switchToHomePage
}

MessageFormContainer.propTypes = {
    sendMessage:PropTypes.func.isRequired,
    updateMessage:PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,

}

export default connect(mapStateToProps,mapDispatchToProps)(MessageFormContainer)