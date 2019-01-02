import React from 'react'
import {connect} from 'react-redux'
import ChatHomeComponent from './ChatHomeComponent'
import {chatWithThisUser} from './../../../store/user/Actions'

const ChatHomeContainer = props =>
    <ChatHomeComponent contacts={props.localContacts} currentChatUser={props.chatWithThisUser}/>

const mapStateToProps = state => {
    return {
        localContacts: state.user.localContacts,
        currentChatUser: state.user.currentChatUser
    }
};

const mapDispatchToProps = {
    chatWithThisUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatHomeContainer)