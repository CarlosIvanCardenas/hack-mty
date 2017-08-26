'use strict'

import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView
} from 'react-native'
import MapView from 'react-native-maps';
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
                <MapView
                    style={styles.map}
                    
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  map: {
    
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 300, 
    height: 450,
  },
});

module.exports = Map;