import {saveLocalContacts} from './../../store/user/Actions'
import React from 'react'
import {connect} from 'react-redux'
import ChatScreenComponent from './ChatScreenComponent'

const ChatScreenContainer = props =>
    <ChatScreenComponent saveLocalContacts={props.saveLocalContacts} currentChatUser={props.currentChatUser}/>

const mapStateToProps = state => {
    return {
        currentChatUser: state.user.currentChatUser
    }
}

const mapDispatchToProps = {
    saveLocalContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreenContainer)