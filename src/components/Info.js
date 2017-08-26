'use strict'

import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

import commonStyles from "../styles/common.css";

class Info extends Component{
    constructor(props) {
        super(props)
        this.state = {
            page: '',
            title: 'Lorem ipsum',
            subtitle: 'Lorem ipsum dolor sit amet.',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur aliquam tempus. Quisque eu magna lobortis, commodo dui dapibus, porta massa. Aliquam vel sapien velit. Aliquam posuere augue vel ullamcorper posuere. Maecenas sit amet purus in enim efficitur feugiat id vitae purus. Maecenas non neque hendrerit, porttitor risus suscipit, aliquam turpis. Duis varius nibh sed nisi faucibus, at tristique ipsum lobortis. Donec interdum orci ut condimentum fermentum. Fusce pretium leo ut fermentum semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc convallis accumsan velit non porttitor. Proin risus ante, pharetra eget urna nec, vestibulum dignissim augue.'
        }
    }

    render(){
        return(
            <View style={commonStyles.container} >
                <Text style={commonStyles.infoTitle} >{this.state.title}</Text>
                <Text style={commonStyles.infoSubtitle} >{this.state.subtitle}</Text>
                <Text style={commonStyles.info} >{this.state.info}</Text>
            </View>
        );
    }
}

module.exports = Info;