import React from 'react'
import {PermissionsAndroid, View} from 'react-native'
import Contacts from "react-native-contacts";
import ChatHomeContainer from './ChatHome/ChatHomeContainer'
import Header from "../Header";
import MessageFormContainer from './MessageForm/MessageFormContainer'

class ChatScreenComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            contacts: []
        })
        this.requestContactsPermission = this.requestContactsPermission.bind(this)
        this.getContacts = () => {
            Contacts.getAll((err, contacts) => {
                if (err) throw err;
                this.props.saveLocalContacts(contacts)
            });
        }
    }

    componentDidMount() {
        this.requestContactsPermission().then(this.getContacts)
    }

    async requestContactsPermission() {
        console.log("in request contact permission")
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
                title: 'ChatApp contacts permission',
                message: 'ChatApp need access to your contacts so that you send messages to your contacts.'
            }
        )
        return granted === PermissionsAndroid.RESULTS.GRANTED
    }

    renderBasedOnState(currentChatUser) {
        console.log(currentChatUser);
        if (currentChatUser) {
            return (
                <MessageFormContainer/>
            )
        } else {
            console.log("im in else")
            return (
                <ChatHomeContainer/>
            )
        }
    }

    render() {
        return (
            <View>
                <Header title={'SOLLU APP'}/>
                {this.renderBasedOnState(this.props.currentChatUser)}
            </View>
        )
    }

}

export default ChatScreenComponent