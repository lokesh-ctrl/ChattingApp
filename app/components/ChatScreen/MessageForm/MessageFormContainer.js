import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {loadMessagesRelatedToChatUser, sendMessage, updateMessage} from "../../../store/chat/Actions";
import MessageFormComponent from "./MessageFormComponent"

const MessageFormContainer = props =>
    <MessageFormComponent updateMessage={props.updateMessage} senderNumber={props.senderNumber}
                          sendMessage={props.sendMessage} message={props.sendingMessage}
                          receiverNumber={props.receiverNumber}
                          loadMessagesRelatedToChatUser={props.loadMessagesRelatedToChatUser}
                          messages={props.messages}/>

const mapStateToProps = state => {
    return {
        sendingMessage: state.chat.message,
        senderNumber: state.user.user.phoneNumber,
        receiverNumber: state.user.currentChatUser.phoneNumber,
        messages: state.chat.messages
    }
}

const mapDispatchToProps = {
    sendMessage,
    updateMessage,
    loadMessagesRelatedToChatUser
}

MessageFormContainer.propTypes = {
    sendMessage:PropTypes.func.isRequired,
    updateMessage:PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,

}

export default connect(mapStateToProps,mapDispatchToProps)(MessageFormContainer)