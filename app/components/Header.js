import React, { Component } from 'react';
import {Text,View} from 'react-native';
import HeaderStyle from '../Styles/styleSheet'

export default class Header extends Component{
    render(){
        let e=React.createElement;
        return(
            e(View,{style:[HeaderStyle.leftHeaderContainer,HeaderStyle.headerContainer]},
                e(Text,{style:HeaderStyle.headerText},this.props.title)
            )
        )
    }
}