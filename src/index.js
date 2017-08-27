/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter
} from 'react-native';

import Tabs from 'react-native-tabs';
import NavBar from './components/NavBar'
import Info from './components/Info'
import Home from './components/Home'
import commonStyles from "./styles/common.css";

import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyC6O7qwaLPjJZoqTkpKW1Wgfo2nAKedbvY",
  authDomain: "hack-mty.firebaseapp.com",
  databaseURL: "https://hack-mty.firebaseio.com",
  projectId: "hack-mty",
  storageBucket: "hack-mty.appspot.com",
  messagingSenderId: "780207897633"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class hackmty extends Component {
  constructor(props) {
    super(props)
    this.state = {
        navTitle: 'Consejo Nuevo León',
        page: 'home'
    }
  }

  render() {
    return (
      <View style={commonStyles.container} >
        <NavBar navTitle={this.state.navTitle} />
        {this.state.page == 'info' ? <Info /> : null}
        {this.state.page == 'home' ? <Home /> : null}
        <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'#5b2144'}} onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="home" selectedIconStyle={{borderTopWidth:2,borderTopColor:'#5b2144'}}>Inicio</Text>
            <Text name="info" selectedIconStyle={{borderTopWidth:2,borderTopColor:'#5b2144'}}>Información</Text>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5b2144',
  },
});

AppRegistry.registerComponent('hackmty', () => hackmty);
