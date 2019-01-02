import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CHAT_LOAD_MESSAGES} from "../../../store/chat/ActionTypes";

class ChatHomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            contacts: [],
        })
        this.onChatPress = this.onChatPress.bind(this);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let newProps = nextProps;
        this.setState({contacts: newProps});
    }

    onChatPress = (item) => {
        console.log(item.phoneNumbers[0].number)
        console.log(item.givenName)
        this.props.currentChatUser(item)
    }
    renderItem = ({item}) => {
        return (
            <View style={styles.row}>
                <TouchableOpacity style={styles.rowText} onPress={() => {
                    this.onChatPress(item)
                }}>
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
                <Text>I'm here</Text>
            </View>
        );
    }
}

export default ChatHomeComponent;

//
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
    },
    row: {
        // padding: 20,
        // borderBottomWidth: 1,
        // borderBottomColor: '#eee',
    },
    rowText: {
        // flex: 1,
    },
});