import React, {Component} from 'react'
import {Button, TextInput, View} from 'react-native'
import PropTypes from 'prop-types'
import DeviceInfo from 'react-native-device-info'
import styles from "../../Styles/styleSheet";
import Header from "../Header";

class LoginScreenComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: null,
            deviceId: null
        }
        this.handleButtonPress = () => {
            if(this.state.phoneNumber && this.state.phoneNumber.length===10){
                let userInfo = {
                    phoneNumber: this.state.phoneNumber,
                    deviceId: this.state.deviceId
                }
                this.props.registerUser(userInfo)
            }
            else{
                alert("Enter Proper Phone Number");
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
                <Header title={'SOLLU APP'}/>
                <View style={styles.Box}>
                    <TextInput onChangeText={this.handleTextChange}
                               value={this.state.phoneNumber}
                               placeholder="Enter your phone number"
                               keyboardType='numeric'
                               style={styles.inputBox}
                               maxLength={10}
                    />
                    <View>
                        <Button style={styles.button} title={"next"} onPress={this.handleButtonPress}/>
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
