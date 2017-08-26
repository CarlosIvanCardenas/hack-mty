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
  View
} from 'react-native';
import Tabs from 'react-native-tabs';
import NavBar from './components/NavBar'
import Info from './components/Info'
import commonStyles from "./styles/common.css";

export default class hackmty extends Component {
  constructor(props) {
    super(props)
    this.state = {
        navTitle: 'Titulo',
        page: 'map'
    }
  }

  render() {
    return (
      <View style={commonStyles.container} >
        <NavBar navTitle={this.state.navTitle} />
        {this.state.page == 'info' ? <Info /> : null}
        <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'#243e92'}} onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="map" selectedIconStyle={{borderTopWidth:2,borderTopColor:'#243e92'}}>Mapa</Text>
            <Text name="info" selectedIconStyle={{borderTopWidth:2,borderTopColor:'#243e92'}}>Información</Text>
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
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('hackmty', () => hackmty);
