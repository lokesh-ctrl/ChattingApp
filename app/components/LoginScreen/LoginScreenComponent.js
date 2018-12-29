import React, {Component} from 'react'
import {TextInput, TouchableOpacity, View, Button} from 'react-native'
import PropTypes from 'prop-types'
import DeviceInfo from 'react-native-device-info'

class LoginScreenComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            deviceId: ''
        }
        this.handleButtonPress = () => {
            let userInfo = {
                phoneNumber: this.state.phoneNumber,
                deviceId: this.state.deviceId
            }
            this.props.registerUser(userInfo)
        }
        this.handleTextChange = (phoneNumber) => {
            this.setState({phoneNumber: phoneNumber})
        }
    }

    componentDidMount() {
        this.setState({deviceId: DeviceInfo.getDeviceId})
    }

    render() {
        return (
            <View>
                <TextInput onChangeText={this.handleTextChange}
                           value={this.state.phoneNumber}
                />
                <Button title={"next"} onPress={this.handleButtonPress}/>
            </View>
        )
    }
}

LoginScreenComponent.propTypes = {
    registerUser: PropTypes.func.isRequired
}
export default LoginScreenComponent