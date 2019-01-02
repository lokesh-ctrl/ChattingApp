import React, {Component} from 'react'
import {TextInput, TouchableOpacity, View} from 'react-native'
import PropTypes from 'prop-types'


class MessageFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this.handleButtonPress = () => {
            this.props.sendMessage(this.props.message)
        }
        this.handleMessageChange = (message) => {
            message => this.setState({typing: message})
            this.props.updateMessage(message)
        }
    }

    componentDidMount() {
        this.setState({messages: this.props.messages});
    }

    renderItem({item}) {
        return (
            <View style={styles.row}>
                <View style={styles.rowText}>
                    <Text style={styles.sender}>{item._id}</Text>
                    <Text style={styles.message}>{item.text}</Text>
                </View>
            </View>
        );
    };

    render() {
        return (<View style={styles.container}>
                <FlatList
                    data={this.state.messages}
                    renderItem={this.renderItem}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()}
                    ref={ref => this.flatList = ref}
                    onContentSizeChange={() => this.flatList.scrollToEnd({animated: false})}
                    onLayout={() => this.flatList.scrollToEnd({animated: true})}
                />
                <KeyboardAvoidingView
                    keyboardVerticalOffset={keyboardVerticalOffset}
                    behavior={padding}
                >
                    <SafeAreaView forceInset={{bottom: 'never'}}>
                        <View style={styles.footer}>
                            <TextInput
                                value={this.props.message}
                                onChangeText={this.handleMessageChange}
                                style={styles.input}
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
    updateMessage:PropTypes.func.isRequired
}
export default MessageFormComponent