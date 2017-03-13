
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';



import MenuScreen from './src/menu'
import NoteScreen from './src/note'

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: "♬♪♫🎶🎵🎼",
  };
  

/*
  <MenuScreen />

*/

  render() {
    return (
      <NoteScreen />
    );
  }
}



const App = StackNavigator({
  Home: { screen: HomeScreen },
  Note: { screen: NoteScreen },
});

AppRegistry.registerComponent('mnotes', () => App);