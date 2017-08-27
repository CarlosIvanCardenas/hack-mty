'use strict'

import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image
} from 'react-native'

import commonStyles from "../styles/common.css";

class NavBar extends Component {

    componentWillReceiveProps(nextProps) {
      this.setState({
        navTitle: nextProps.navTitle,
    });
  }

    render() {
        return (
            <View style={commonStyles.navBar} >
                <View style={commonStyles.navBarContainer} >
                    <Image style={commonStyles.logo} source={require('../../assets/img/logoNL.png')} />
                </View>
            </View>
        );
    }
}

module.exports = NavBar;