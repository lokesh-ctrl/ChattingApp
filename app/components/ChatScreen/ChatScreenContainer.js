import {saveLocalContacts} from './../../store/user/Actions'
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import ChatScreenComponent from './ChatScreenComponent'

const ChatScreenContainer = props =>
    <ChatScreenComponent saveLocalContacts={props.saveLocalContacts}/>

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = {
    saveLocalContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreenContainer)