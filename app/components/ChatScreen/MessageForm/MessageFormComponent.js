import React, {Component} from 'react'
import {Platform,Text,View,Image,StyleSheet,FlatList,TextInput,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Header,SafeAreaView} from 'react-navigation';


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
        };
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

    renderFlatList(){
        return(
            <View>
                <FlatList
                    data={this.state.messages}
                    renderItem={this.renderItem}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()}
                    ref={ref => this.flatList = ref}
                    onContentSizeChange={() => this.flatList.scrollToEnd({animated: false})}
                    onLayout={() => this.flatList.scrollToEnd({animated: true})}
                />
            </View>
        );
    }
    render() {
        const keyboardVerticalOffset = Platform.OS === 'ios' ? Header.HEIGHT + 20 : 0;
        const padding = Platform.OS === 'ios' ? "padding" : '';
            if(this.state.messages) {
                this.renderFlatList();
            }
            return(
                <View>
                    <KeyboardAvoidingView
                        keyboardVerticalOffset={keyboardVerticalOffset}
                        behavior={padding}
                    >
                        <SafeAreaView forceInset={{bottom: 'never'}}>
                            <View>
                                <TextInput
                                    value={this.props.message}
                                    onChangeText={this.handleMessageChange}
                                    underlineColorAndroid="transparent"
                                    placeholder="Type something nice"
                                />
                                <TouchableOpacity onPress={this.handleButtonPress}>
                                    <Text>Send</Text>
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
export default MessageFormComponent;

