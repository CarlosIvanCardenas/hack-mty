'use strict'

import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView
} from 'react-native'
import commonStyles from "../styles/common.css";

class Map extends Component{
    constructor(props) {
        super(props)
        this.state = {
            navTitle: '',
        }
    }

    render(){
        return(
            <View style={commonStyles.container} >
                <Text style={commonStyles.title} >Beacon location</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
});

module.exports = Map;