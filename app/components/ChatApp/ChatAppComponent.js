import React from 'react'
import ChatScreenComponent from './../ChatScreen/ChatScreenComponent'
import Contacts from 'react-native-contacts'
import {PermissionsAndroid, View} from 'react-native';
import PropTypes from 'prop-types'


class ChatAppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.getContacts = () => {
            console.log("getContacts was triggered")
            this.requestContactsPermission()
                .then(function (didGetPermission: boolean) {
                    if (didGetPermission) {
                        Contacts.getAll((err, contacts) => {
                            if (err) throw err;
                            console.log("We got some contacts!")
                            console.log(contacts)
                            this.props.saveLocalContacts(contacts)
                            console.log("contact saved in store successfully")
                        })
                    } else {
                        console.log("Oh no no permissions!")
                    }
                })
        }
    }

    componentDidMount() {
        console.log("in component will mount")
        this.getContacts()
    }

    async requestContactsPermission() {
        console.log("requesting permisson")
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
            <View>
                <ChatScreenComponent/>
            </View>)
    }
}

ChatAppComponent.propTypes = {
    saveLocalContacts: PropTypes.func.isRequired
}
export default ChatAppComponent
