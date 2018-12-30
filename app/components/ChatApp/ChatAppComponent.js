import React from 'react'
import ChatScreenContainer from './../ChatScreen/ChatScreenContainer'
import LoginScreenContainer from './../LoginScreen/LoginScreenContainer'

class ChatAppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this)
    }

    navigate(isRegistered) {
        if (isRegistered) {
            return <ChatScreenContainer/>
        } else {
            return <LoginScreenContainer/>
        }
    }
    render() {
        return (
            this.navigate(this.props.isRegistered)
        )
    }
}
export default ChatAppComponent
