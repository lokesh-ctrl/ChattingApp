import React from 'react'
import {connect} from 'react-redux'
import ChatHomeComponent from './ChatHomeComponent'

const ChatHomeContainer = props =>
    <ChatHomeComponent contacts={props.localContacts}/>

const mapStateToProps = state => {
    return {
        localContacts: state.user.localContacts
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ChatHomeContainer)