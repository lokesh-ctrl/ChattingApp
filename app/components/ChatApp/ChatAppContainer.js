import React from 'react'
import {connect} from 'react-redux'
import ChatAppComponent from './ChatAppComponent'

const ChatAppContainer = props =>
    <ChatAppComponent isRegistered={props.isRegistered}/>

const mapStateToProps = state => {
    return {
        isRegistered: state.user.isRegistered
    }
}

const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(ChatAppContainer)