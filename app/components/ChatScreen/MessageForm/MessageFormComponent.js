import React, {Component} from 'react'
import {FlatList, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {Header, SafeAreaView} from 'react-navigation';
import styles from '../../../Styles/styleSheet';
import firebaseService from '../../../services/FirebaseService'


class MessageFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        let that = this;
        let conversationKey = 'Users/' + this.props.senderNumber + '/' + 'Conversations/' + this.props.receiverNumber;
        let firebaseRef = firebaseService.database().ref(conversationKey);
        firebaseRef.on("value", function (dataSnapshot) {
            let messages = []
            dataSnapshot.forEach(function (child) {
                let message = child.val()
                messages.push(message)
            })
            that.setState({messages: messages})
        });
        this.handleButtonPress = () => {
            this.props.sendMessage(this.props.message, this.props.senderNumber, this.props.receiverNumber)
        }
        this.handleMessageChange = (message) => {
            message => this.setState({typing: message})
            this.props.updateMessage(message)
        };
    }

    componentDidMount() {
        this.setState({messages: this.props.messages});
    }

    renderItem({item}) {
        let messageboxstyle;
        let messagetextstyle;
        if (item.id === 1) {
            messageboxstyle = styles.senderMessageContainer;
            messagetextstyle = styles.senderMessage;
        }else {
            messageboxstyle =styles.receiverMessageContainer;
            messagetextstyle = styles.receiverMessage;
        }
        return (
            <View style={[messageboxstyle,styles.chatBox]}>
                <View style={styles.rowText}>
                    <Text style={messagetextstyle}>{item.text}</Text>
                </View>
            </View>
        );
    };

    renderFlatList() {
        if (this.state.messages.length > 0) {
            return (
                <View>
                    <FlatList
                        data={this.state.messages}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ref={ref => this.flatList = ref}
                        onContentSizeChange={() => this.flatList.scrollToEnd({animated: false})}
                        onLayout={() => this.flatList.scrollToEnd({animated: true})}
                    />
                </View>
            );
        }
    }

    render() {
        const keyboardVerticalOffset = Platform.OS === 'ios' ? Header.HEIGHT + 20 : 0;
        const padding = Platform.OS === 'ios' ? "padding" : '';

        return (
            <View>
                <View>
                    {this.renderFlatList()}
                </View>
                <KeyboardAvoidingView
                    keyboardVerticalOffset={keyboardVerticalOffset}
                    behavior={padding}
                >
                    <SafeAreaView forceInset={{bottom: 'never'}}>
                        <View style={styles.footer}>
                            <TextInput
                                value={this.props.message}
                                style={styles.input}
                                onChangeText={this.handleMessageChange}
                                underlineColorAndroid="transparent"
                                placeholder="Type something nice"
                            />
                            <TouchableOpacity onPress={this.handleButtonPress}>
                                <Text style={styles.send}>Send</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

MessageFormComponent.propTypes = {
    sendMessage: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    updateMessage: PropTypes.func.isRequired
}
export default MessageFormComponent;

