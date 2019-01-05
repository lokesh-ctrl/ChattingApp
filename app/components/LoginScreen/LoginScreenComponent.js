import React, {Component} from 'react'
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native'
import PropTypes from 'prop-types'
import DeviceInfo from 'react-native-device-info'
import styles from "../../Styles/styleSheet";
import HeaderComponent from "../Header";

class LoginScreenComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: null,
            deviceId: null
        }
        this.handleButtonPress = () => {
            if (this.state.phoneNumber && this.state.phoneNumber.length === 10) {
                let userInfo = {
                    phoneNumber: this.state.phoneNumber,
                    deviceId: this.state.deviceId
                }
                this.props.registerUser(userInfo)
            }
            else {
                alert("Enter valid phone number");
            }
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
            <View style={styles.mainContainer}>
                <HeaderComponent title={'SOLLU'}/>
                <View style={styles.mainBox}>
                    {/*<ProgressBarAndroid/>*/}
                    <View style={styles.SectionStyle}>
                        <Image source={require('../../Styles/phone-icon.jpg')}
                               style={[styles.imageStyle]}/>
                        <TextInput onChangeText={this.handleTextChange}
                                   value={this.state.phoneNumber}
                                   placeholder="Enter your phone number"
                                   keyboardType='numeric'
                                   style={styles.TextContainer}
                                   maxLength={10}
                        />
                    </View>
                    <View>
                        <TouchableOpacity
                            style={[styles.button, {backgroundColor: this.state.phoneNumber ? '#cc504e' : '#f49f8e'}]}
                            activeOpacity={.5}
                            disabled={!this.state.phoneNumber}
                            onPress={this.handleButtonPress}>
                            <Text style={styles.text}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

LoginScreenComponent.propTypes = {
    registerUser: PropTypes.func.isRequired
}
export default LoginScreenComponent;
