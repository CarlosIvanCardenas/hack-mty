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

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            navTitle: '',
        }
    }
    
  download(){

  }
  
    render(){
        return(
            <View style={commonStyles.container} >
                <TouchableHighlight onPress={this.download.bind(this)} style={commonStyles.boton} >
                        <Text style={commonStyles.textoBoton} >Descarga el Plan Estratégico</Text>
                    </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
});

module.exports = Home;