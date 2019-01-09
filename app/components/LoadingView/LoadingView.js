import React from 'react'
import {ActivityIndicator, Text, View} from 'react-native'

class LoadingView extends React.Component {
    stylesOfLoading = {
        flex: 1,
        justifyContent: "space-around",
        backgroundColor: "#cc504e",
        alignItems: "center",
    };
    textStyle = {
        fontSize: 30,
        margin: 10,
        color: "#ffffff"
    }

    render() {
        return (
            <View style={this.stylesOfLoading}>
                <Text style={this.textStyle}>SOLLU</Text>
                <ActivityIndicator size="large" color="##ffffff"/>
            </View>
        )
    }
}

export default LoadingView