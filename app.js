
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


const App = StackNavigator({
  Menu: { screen: MenuScreen },
  Note: { screen: NoteScreen },
});

AppRegistry.registerComponent('mnotes', () => App);