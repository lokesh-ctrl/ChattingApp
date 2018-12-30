import React from 'react'
import {PermissionsAndroid} from 'react-native'
import Contacts from "react-native-contacts";
import ChatHomeContainer from './ChatHome/ChatHomeContainer'

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
        const granted = await PermissionsAndroid.request(
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
            <ChatHomeContainer/>
        )
    }

}

export default ChatScreenComponent