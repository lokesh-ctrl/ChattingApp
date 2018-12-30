import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class ChatHomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            contacts: [],
        })
        this.renderList = this.renderList.bind(this)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let newProps = nextProps;
        this.setState({contacts: newProps})
    }

    static navigationOptions = ({navigation}) => {
        return (
            {
                headerTitle: "P2PApp",
                headerBackTitle: "Back"
            }
        );
    };

    renderList(contacts) {
        if (contacts.length !== 0) {
            console.log("in if")
            console.log(contacts["contacts"]);
            const contactList = contacts["contacts"].map(contact =>
                <View>
                    <Text>Name:{contact.givenName} </Text>
                    <Text>Ph NO: {contact.phoneNumber[0].number}</Text>
                </View>
            )
            return (
                <View>
                    {contactList}
                </View>
            );
        } else {
            return (<View/>)
        }
    }

    renderItem = ({item}) => {
        return (
            <View style={styles.row}>
                <TouchableOpacity style={styles.rowText} onPress={console.log(item)}>
                    <Text style={styles.sender}>{item.givenName}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.contacts["contacts"]}
                    renderItem={(item) => this.renderItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
                {/*{console.log("in render")}*/}
                {/*{console.log(this.state.contacts)}*/}
                {/*{this.renderList(this.state.contacts)}*/}
            </View>
        );
    }
}

export default ChatHomeComponent;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    row: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    rowText: {
        flex: 1,
    },
});