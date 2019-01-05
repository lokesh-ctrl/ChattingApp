import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HeaderStyle from '../Styles/styleSheet'

export default class HeaderComponent extends Component {
    render(){
        console.log(this.props.title);
        let e=React.createElement;
        return(
            e(View,{style:[HeaderStyle.leftHeaderContainer,HeaderStyle.headerContainer]},
                e(Text,{style:HeaderStyle.headerText},this.props.title)
            )
        )
    }
}