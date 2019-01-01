import React, {Component} from 'react'
import {Button, TextInput, View} from 'react-native'
import PropTypes from 'prop-types'


class MessageFormComponent extends Component {
    constructor(props) {
        super(props);
        this.handleButtonPress = () => {
            this.props.sendMessage(this.props.message, this.props.senderNumber, this.props.receiverNumber)
        }
        this.handleMessageChange = (message) => {
            this.props.updateMessage(message)
        }
    }
    render() {
        return (
            <View>
                <TextInput onChangeText={this.handleMessageChange}
                           value={this.props.message}
                />
                <Button title = "Send message" onPress={this.handleButtonPress}/>
            </View>
        )
    }
}
MessageFormComponent.propTypes = {
    sendMessage: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    updateMessage:PropTypes.func.isRequired
}
export default MessageFormComponent