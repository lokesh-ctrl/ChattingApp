import React, {Component} from 'react'
import {Button, TextInput, View} from 'react-native'
import PropTypes from 'prop-types'
import DeviceInfo from 'react-native-device-info'

class LoginScreenComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: null,
            deviceId: null
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
        let deviceId = DeviceInfo.getUniqueID();
        this.setState({deviceId: deviceId});
        console.log(deviceId);
        console.log("diviceInfo" + this.state.deviceId);
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