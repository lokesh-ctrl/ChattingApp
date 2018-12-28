import {saveLocalContacts} from './../../store/user/Actions'
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import ChatAppComponent from './ChatAppComponent'

const ChatAppContainer = props =>
    <ChatAppComponent saveLocalContacts={props.saveLocalContacts} />

const mapDispatchToProps = {
    saveLocalContacts
}

ChatAppContainer.propTypes = {
    saveLocalContacts: PropTypes.func.isRequired,
    localContacts: PropTypes.array.isRequired
}

export default connect(mapDispatchToProps)(ChatAppContainer)