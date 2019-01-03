import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from "../../../Styles/styleSheet";
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
        this.setState({contacts: nextProps});
    }

    onChatPress = (item) => {
        console.log(item.phoneNumbers[0].number)
        console.log(item.givenName)
        this.props.currentChatUser(item)
    }
    renderItem = ({item}) => {
        return (
                <TouchableOpacity style={styles.separator} onPress={() => {
                    this.onChatPress(item)
                }}>
                    <Text style={styles.item}>{item.givenName}</Text>
                </TouchableOpacity>
        );
    };

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.contacts["contacts"]}
                    renderItem={(item) => this.renderItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

export default ChatHomeComponent;
