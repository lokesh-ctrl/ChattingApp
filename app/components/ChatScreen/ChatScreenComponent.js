import React from 'react'
import {PermissionsAndroid, View} from 'react-native'
import MessageFormContainer from './MessageForm/MessageFormContainer'
import Contacts from "react-native-contacts";

class ChatScreenComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            contacts: []
        })
        this.requestContactsPermission = this.requestContactsPermission.bind(this)
        this.getContacts = () => {
            console.log("getContacts was triggered")
            Contacts.getAll((err, contacts) => {
                if (err) throw err;
                console.log("We got some contacts!")
                console.log(contacts)
                this.props.saveLocalContacts(contacts)
            });
        }
    }
    componentDidMount() {
        this.requestContactsPermission().then(this.getContacts)
    }

    async requestContactsPermission() {
        console.log("requesting permission")
        const granted =  await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
                title: 'ChatApp contacts permission',
                message: 'ChatApp need access to your contacts so that you send messages to your contacts.'
            }
        )
        return granted === PermissionsAndroid.RESULTS.GRANTED
    }

    render() {
        return (
            <View>
                <MessageFormContainer/>
            </View>
        )
    }

}

export default ChatScreenComponent