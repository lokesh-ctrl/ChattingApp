import React from 'react'
import ChatScreenComponent from './../ChatScreen/ChatScreenComponent'
import DeviceInfo from 'react-native-device-info';
import RNSimData from 'react-native-sim-data'
import Contacts from 'react-native-contacts'
import { PermissionsAndroid } from 'react-native';
import {View,Button} from "react-native";


class ChatAppComponent extends React.Component{
    constructor(props){
        super(props);
        this.getContacts = this.getContacts.bind(this)
    }
    componentWillMount() {
        this.getContacts()
    }

    async requestContactsPermission() {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    title: 'ChatApp contacts permission',
                    message: 'ChatApp need access to your contacts so that you send messages to your contacts.'
                }
            )
            return granted === PermissionsAndroid.RESULTS.GRANTED
        }
        getContacts = () => {
            this.requestContactsPermission()
                .then(function (didGetPermission: boolean) {
                    if (didGetPermission) {
                        Contacts.getAll((err, contacts) => {
                            if (err) throw err;
                            alert("We got some contacts!")
                            console.log(contacts)
                        })
                    } else {
                        alert("Oh no no permissions!")
                    }
                })
        }
    render() {
        return (
            <View>
            <ChatScreenComponent/>
            </View>)
    }
}
export default ChatAppComponent
