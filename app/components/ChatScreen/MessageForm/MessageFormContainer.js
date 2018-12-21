import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {sendMessage,updateMessage} from "../../../store/chat/Actions";
import MessageFormComponent from "./MessageFormComponent"

const MessageFormContainer = props =>
    <MessageFormComponent updateMessage={props.updateMessage} sendMessage={props.sendMessage} message={props.message}/>

const mapStateToProps = state => {
    return {
        message: state.chat.message
    }
}

const mapDispatchToProps = {
    sendMessage,
    updateMessage
}

MessageFormContainer.propTypes = {
    sendMessage:PropTypes.func.isRequired,
    updateMessage:PropTypes.func.isRequired,
    message:PropTypes.string.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(MessageFormContainer)