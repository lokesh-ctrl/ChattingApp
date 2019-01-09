import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from "../../../Styles/styleSheet";

class ChatHomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            contacts: [],
        });
        this.onChatPress = this.onChatPress.bind(this);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({contacts: nextProps});
    }

    onChatPress = (item) => {
        console.log(item.phoneNumbers[0].number);
        console.log(item.givenName);
        this.props.currentChatUser(item)
    };
    renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.separator} onPress={() => {
                this.onChatPress(item)
            }}>
                <Image source={require('../../../Styles/user.png')}
                       style={[styles.chatHomeimageStyle]}/>
                <Text style={styles.item}>{item.givenName}</Text>
            </TouchableOpacity>
        );
    };


    render() {
        return (
            <View>
                <View style={styles.stylesOfHeader}>
                    <Text style={styles.headerText}>Sollu</Text>
                </View>
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
