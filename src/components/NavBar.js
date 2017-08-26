'use strict'

import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

import commonStyles from "../styles/common.css";

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navTitle: '',

        }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        navTitle: nextProps.navTitle,
    });
  }

    render() {
        return (
            <View style={commonStyles.navBar} >
                <View style={commonStyles.navBarContainer} >
                    <Text style={commonStyles.navBarTitle} > {this.props.navTitle} </Text>
                </View>
            </View>
        );
    }
}

module.exports = NavBar;