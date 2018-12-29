import React from 'react'
import {connect} from 'react-redux'
import ChatAppComponent from './ChatAppComponent'

const ChatAppContainer = props =>
    <ChatAppComponent/>

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(ChatAppContainer)